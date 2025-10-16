import React from 'react';
import styles from './Header.module.css';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="large">
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>
            Lic. Dahiana Charles, CPA
          </a>
          <nav className={styles.nav}>
            <a href="/">Inicio</a>
            <a href="/servicios/igualas-contables">Igualas Contables</a>
            <a href="/herramientas">Herramientas</a>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
