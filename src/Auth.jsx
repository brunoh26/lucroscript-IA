import React, { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#000',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    padding: '20px'
  },
  card: {
    backgroundColor: '#0a0a0a',
    padding: '40px',
    borderRadius: '16px',
    border: '1px solid #FFD700',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 0 30px rgba(255, 215, 0, 0.1)',
    textAlign: 'center'
  },
  logo: {
    color: '#FFD700',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    letterSpacing: '2px'
  },
  subtitle: {
    color: '#888',
    marginBottom: '30px',
    fontSize: '0.9rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    textAlign: 'left'
  },
  label: {
    color: '#FFD700',
    fontSize: '0.75rem',
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#111',
    border: '1px solid #333',
    borderRadius: '8px',
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    padding: '15px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
    transition: '0.3s'
  },
  switchText: {
    color: '#ccc',
    marginTop: '20px',
    fontSize: '0.9rem'
  },
  link: {
    color: '#FFD700',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginLeft: '5px'
  }
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>L5</div>
        <div style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '5px' }}>LUCROSCRIPT IA</div>
        <p style={styles.subtitle}>
          {isLogin ? 'Entre na sua conta de CEO' : 'Crie seu cadastro no Império'}
        </p>

        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <>
              <div style={styles.inputGroup}>
                <label style={styles.label}>NOME COMPLETO</label>
                <input type="text" placeholder="Como quer ser chamado?" style={styles.input} />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ ...styles.inputGroup, flex: 1 }}>
                  <label style={styles.label}>IDADE</label>
                  <input type="number" placeholder="Sua idade" style={styles.input} />
                </div>
                <div style={{ ...styles.inputGroup, flex: 2 }}>
                  <label style={styles.label}>DATA DE NASCIMENTO</label>
                  <input type="date" style={styles.input} />
                </div>
              </div>
            </>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>E-MAIL</label>
            <input type="email" placeholder="seu@email.com" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>SENHA</label>
            <input type="password" placeholder="••••••••" style={styles.input} />
          </div>

          <button style={styles.button}>
            {isLogin ? 'ACESSAR PLATAFORMA' : 'CRIAR MINHA CONTA AGORA'}
          </button>
        </form>

        <p style={styles.switchText}>
          {isLogin ? 'Ainda não é membro?' : 'Já possui acesso?'}
          <span style={styles.link} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Cadastre-se' : 'Fazer Login'}
          </span>
        </p>
      </div>
    </div>
  );
}
