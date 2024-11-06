const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      city: user.city,
      state: user.state,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.register = async (req, res) => {
  const { name, city, state, email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Senhas não coincidem' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const user = await User.create({
      name,
      city,
      state,
      email,
      password,
      isAdmin: email === 'educatech@gmail.com', 
    });

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id, user.isAdmin),
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id, user.isAdmin),
      });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};


exports.updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;
  const userId = req.user.id;

  try {
    let updateData = { name, email };
    
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateData.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
    
    res.json(updatedUser);
  } catch (error) {
    console.error('Erro ao atualizar perfil do usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

exports.googleAuthCallback = async (req, res) => {
  try {
    const { id, displayName, emails } = req.user;

    let user = await User.findOne({ email: emails[0].value });

    if (!user) {
      user = new User({
        name: displayName,
        email: emails[0].value,
        googleId: id,
      });

      await user.save(); 
    }

    const token = generateToken(user._id);

    return res.json({ token });
  } catch (error) {
    console.error('Erro na autenticação com Google:', error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.googleAuth = async (req, res) => {
  const { token } = req.body;

  try {
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      let user = await User.findOne({ email: payload.email });

      if (!user) {
          user = await User.create({
              name: payload.name,
              email: payload.email,
          });
      }

      const jwtToken = generateToken(user._id);
      return res.json({ token: jwtToken });
  } catch (error) {
      console.error('Erro ao verificar o token do Google:', error);
      return res.status(400).json({ message: 'Falha na autenticação com o Google' });
  }
};