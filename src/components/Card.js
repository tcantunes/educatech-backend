import React from 'react';
import Button from '../components/Button'; 

const Card = ({ icon, title, description }) => {
    return (
      <div style={styles.card}>
        <div style={styles.cardIcon}>{icon}</div>
        <div style={styles.cardContent}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>
          <Button text="Acessar" />
        </div>
      </div>
    );
  };
  
  const styles = {
    card: {
      backgroundColor: '#f5d29f',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      width: '250px', 
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '350px',      
    },
    cardIcon: {
      fontSize: '50px',
      marginBottom: '20px',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '20px',
      color: '#6c3b2a',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
      color: '#6c3b2a',
      marginBottom: '20px',
    },
  };
  
  export default Card;

