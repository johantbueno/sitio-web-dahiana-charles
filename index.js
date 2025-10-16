import React from 'react';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';

// Pequeño componente de botón para el CTA
const Button = ({ href, children, variant = 'primary' }) => (
  <a href={href} className={`button ${variant}`}>
    {children}
    <style jsx>{`
      .button {
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        transition: all 0.2s ease;
      }
      .primary {
        background-color: var(--azul-principal);
        color: var(--blanco);
        border: 1px solid var(--azul-principal);
      }
      .primary:hover {
        background-color: #1a2b6c;
      }
      .secondary {
        background-color: var(--blanco);
        color: var(--azul-principal);
        border: 1px solid var(--azul-principal);
      }
      .secondary:hover {
        background-color: #f0f4ff;
      }
    `}</style>
  </a>
);

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>
            Bienvenido al sitio de la Lic. Dahiana Charles, CPA
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--gris-texto)', maxWidth: '600px', margin: '0 auto 32px' }}>
            Soluciones contables y fiscales claras, precisas y alineadas con la normativa dominicana.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <Button href="/servicios/igualas-contables" variant="primary">
              Ver Servicios de Igualas
            </Button>
            <Button href="/herramientas" variant="secondary">
              Usar Herramientas
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
