import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Educatech. Todos os direitos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    width: '100%',
    height: '50px',
    backgroundColor: '#F4D19B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  text: {
    fontSize: '16px',
    color: '#4C3327',
    margin: '0',
  },
};

export default Footer;
