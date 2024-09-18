import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>EDUCATECH</div>
      <div style={styles.buttonContainer}>
        <Button text="Nos Contate" />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    width: '100%',
    height: '75px',
    backgroundColor: '#F4D19B',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4C3327',
    marginLeft: '10px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default Navbar;
