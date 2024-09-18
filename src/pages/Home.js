import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import image from '../assets/pagina-inicial.png';

const Home = () => {
  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate('/login');
  };

  const registerRedirect = () => {
    navigate('/register');
  };


  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.contentContainer}>
        <div style={styles.textContent}>
          <h1 style={styles.title}>EDUCATECH</h1>
          <h2 style={styles.subtitle}>Educação para a Terceira Idade</h2>
          <p style={styles.description}>Cursos de tecnologia para a terceira idade</p>
          <div style={styles.buttonContainer}>
            <Button text="Entre Agora" onClick={loginRedirect} />
            <Button text="Cadastre-se" onClick={registerRedirect} />
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img src={image} alt="Educatech" style={styles.image} />
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
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '50px',
  },
  textContent: {
    flex: 1,
    paddingRight: '50px',
    textAlign: 'left',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#FDF4D7',
    margin: '10px',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '400',
    marginBottom: '20px',
    color: '#FDF4D7',
    margin: '10px',
  },
  description: {
    fontSize: '20px',
    marginBottom: '40px',
    color: '#FDF4D7',
    margin: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'left',
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
    objectFit: 'cover',
  },
};

export default Home;
