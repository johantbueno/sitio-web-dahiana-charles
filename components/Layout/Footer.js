import React from 'react';
import styles from './Footer.module.css';
import Container from '../Container/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container size="large">
        <p>
          &copy; {currentYear} Lic. Dahiana Charles, CPA. Todos los derechos reservados.
        </p>
        <p>Sitio web desarrollado con asistencia de IA.</p>
      </Container>
    </footer>
  );
};

export default Footer;
