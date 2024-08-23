import React from 'react';
import Footer from "../../componentes/Footer/Footer"

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%)',
        margin: '0 auto',
      }}
    >
      <header
        style={{
          width: '100%',
          height: '80px',
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          padding: '0 100px',
        }}
      >
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', color: '#C92071' }}>
          Digital Store
        </h1>
      </header>
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center', // Ajuste para centralizar o conteúdo
          alignItems: 'flex-start',
          padding: '50px 100px',
        }}
      >
        <div
          style={{
            display: 'flex', // Usar flexbox para o layout
            alignItems: 'flex-start',
            gap: '50px', // Espaço entre o formulário e a imagem
          }}
        >
          <div
            style={{
              width: '583px',
              background: '#FFFFFF',
              borderRadius: '4px',
              padding: '30px',
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '32px', color: '#1F1F1F' }}>
              Login
            </h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#474747' }}>
                Usuário
              </label>
              <input
                style={{
                  height: '60px',
                  padding: '0 15px',
                  borderRadius: '8px',
                  border: '1px solid #474747',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                }}
                placeholder="insira seu login ou email"
              />
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#474747' }}>
                Senha
              </label>
              <input
                style={{
                  height: '60px',
                  padding: '0 15px',
                  borderRadius: '8px',
                  border: '1px solid #474747',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                }}
                placeholder="insira sua senha"
                type="password"
              />
              <button
                style={{
                  height: '48px',
                  background: '#C92071',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F5F5F5',
                  fontSize: '16px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                Acesse sua conta
              </button>
            </form>
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ST1p064uPNi7Ik8mX4sHzBpWk9kdVpV0RlGkhha5OYzTI3-eKkdCDo2XHRA7KoMXSLOFTysVzdoJL1Lj3vtCIAs3TWohixhlLGBopWkP5gTrCHnQfFzFa7WiRjqPxwXGhks30oNQy9IiYVhlYtnfCyQhfAdcpxYeqcAeLrTLh0EnHmK08T9V40sH8cO0sZCV5IgsEJk7Rkhs~-AeDN9XhRIYbWlms7qRZsUxwNeV0utPiAhPyc7lVVqMkzcvu4UEiJsavT17ej~LcuvP5GDxfuqcnI2T1dNC0m3hnNc9LFPDuXvXV-NZjlUNVk7~lcj79QquA3ePhtDVAQq~FGH3Xg__"
              alt="Par de sapatos"
              style={{ maxWidth: '100%', height: 'auto' }} // Ajuste para responsividade
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
