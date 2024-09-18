import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button'; 
import image from '../assets/login.png';

const Login = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.contentContainer}>
        <div style={styles.imageContainer}>
          <img src={image} alt="Casal sorrindo" style={styles.image} />
        </div>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>BEM-VINDO DE VOLTA!</h1>
          <p style={styles.subtitle}>INSIRA SUAS INFORMAÇÕES PARA CONTINUAR</p>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>EMAIL</label>
            <input type="email" id="email" placeholder="DIGITE SEU EMAIL AQUI" style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>SENHA</label>
            <input type="password" id="password" placeholder="DIGITE SUA SENHA AQUI" style={styles.input} />
          </div>
          <div style={styles.containerButton}>

          <Button text="ENTRAR" style={styles.loginButton} />

          <p style={styles.registerText}>SE AINDA NÃO POSSUIR UMA CONTA:</p>
          <Button text="CADASTRE-SE" style={styles.registerButton} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    backgroundColor: '#D9633F',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: '20%',
    width: '400px',
    height: 'auto',
  },
  formContainer: {
    flex: 1,
    marginLeft: '50px',
    textAlign: 'left',
    color: '#FDF4D7',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: '400',
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '2px solid #F4D19B',
    backgroundColor: '#D9633F',
    color: '#FDF4D7',
    marginBottom: '20px',
  },
  containerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  registerText: {
    fontSize: '14px',
    fontWeight: '400',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#FDF4D7',
  },
  registerButton: {
    padding: '15px 10px',
  },
};

export default Login;
