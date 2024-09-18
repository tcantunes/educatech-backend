import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Register = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log('Cadastro confirmado');
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.contentContainer}>
        <div style={styles.imageContainer}>
          <img
            src={require('../assets/cadastro.png')}
            alt="Educatech"
            style={styles.image}
          />
        </div>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>BEM-VINDO À EDUCATECH!</h2>
          <p style={styles.subtitle}>Insira seus dados para criar sua conta:</p>

          <form style={styles.form}>
            <label style={styles.label}>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome aqui" style={styles.input} />

            <label style={styles.label}>Cidade</label>
            <input type="text" placeholder="Digite sua cidade aqui" style={styles.input} />

            <label style={styles.label}>Estado</label>
            <input type="text" placeholder="Digite seu estado aqui" style={styles.input} />

            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Digite seu email aqui" style={styles.input} />

            <label style={styles.label}>Senha</label>
            <input type="password" placeholder="Digite sua senha aqui" style={styles.input} />

            <label style={styles.label}>Confirme sua senha</label>
            <input type="password" placeholder="Digite novamente sua senha aqui" style={styles.input} />
            <div style={styles.containerButton}>
            <Button
              text="Confirmar"
              onClick={handleConfirm}
              style={styles.confirmButton}
            />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#D9633F',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '50px',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    borderRadius: '20%',
    width: '400px',
    height: 'auto',
  },
  formContainer: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: '50px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#FDF4D7',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '400',
    marginBottom: '20px',
    color: '#FDF4D7',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '18px',
    marginBottom: '8px',
    color: '#FDF4D7',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '2px solid #FDF4D7',
    backgroundColor: 'transparent',
    color: '#FDF4D7',
  },
  containerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }, 
};

export default Register;
