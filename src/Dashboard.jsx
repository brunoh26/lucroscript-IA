import React, { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#000',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#0a0a0a',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #FFD700',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    color: '#FFD700',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '2px'
  },
  main: {
    flex: 1,
    padding: '20px',
    paddingBottom: '100px',
    maxWidth: '600px',
    margin: '0 auto',
    width: '100%'
  },
  card: {
    backgroundColor: '#0d0d0d',
    padding: '20px',
    borderRadius: '15px',
    border: '1px solid #1a1a1a',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
  },
  iconBox: {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    backgroundColor: '#000',
    border: '1px solid #FFD700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFD700',
    fontSize: '1.4rem',
  },
  cardLabel: {
    fontSize: '0.75rem',
    color: '#666',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  cardValue: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  copilotoBox: {
    background: 'linear-gradient(145deg, #111, #000)',
    border: '1px solid #FFD700',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '20px',
    position: 'relative'
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0a0a0a',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '12px 0',
    borderTop: '1px solid #333',
  },
  navBtn: {
    background: 'none',
    border: 'none',
    color: '#555',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    fontSize: '0.7rem'
  },
  activeBtn: {
    color: '#FFD700'
  }
};

export default function Dashboard() {
  const [tab, setTab] = useState('home');
  const [userPlan] = useState('Black'); // Simula plano ativo

  return (
    <div style={styles.container}>
      
      {/* HEADER PROFISSIONAL */}
      <header style={styles.header}>
        <div style={styles.logo}>L5 LUCROSCRIPT</div>
        <div style={{textAlign: 'right'}}>
          <span style={{fontSize: '0.7rem', color: '#00FA9A'}}>META: R$ 10K</span>
          <div style={{width: '100px', height: '6px', background: '#222', borderRadius: '3px', marginTop: '4px'}}>
             <div style={{width: '15%', height: '100%', background: '#00FA9A', borderRadius: '3px'}}></div>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        {tab === 'home' && (
          <>
            <h2 style={{fontSize: '1.1rem', marginBottom: '20px', color: '#FFD700'}}>VISÃO GERAL DO IMPÉRIO</h2>
            
            <div style={styles.card}>
              <div style={styles.iconBox}>💰</div>
              <div>
                <div style={styles.cardLabel}>Valor Líquido</div>
                <div style={styles.cardValue}>R$ 0,00</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.iconBox}>📈</div>
              <div>
                <div style={styles.cardLabel}>Vendas Realizadas</div>
                <div style={styles.cardValue}>0</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={{...styles.iconBox, borderColor: '#00FA9A', color: '#00FA9A'}}>💳</div>
              <div>
                <div style={styles.cardLabel}>Aprovação Cartão</div>
                <div style={styles.cardValue}>0 %</div>
              </div>
            </div>

            {/* MENSAGEM DO COPILOTO */}
            <div style={styles.copilotoBox}>
              <div style={{display: 'flex', gap: '15px'}}>
                <span style={{fontSize: '2rem'}}>🤖🖋️</span>
                <div>
                  <h4 style={{color: '#FFD700', margin: '0 0 10px 0'}}>Copiloto do Milhão</h4>
                  <p style={{fontSize: '0.85rem', color: '#ccc', lineHeight: '1.4'}}>
                    "Seja bem-vindo, sócio! O painel está zerado, mas a ferramenta está pronta. 
                    No modo <b>{userPlan === 'Black' ? 'CEO VIP' : 'Estrategista'}</b>, 
                    eu cuido da copy e você cuida do lucro. Qual o nicho de hoje?"
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {tab === 'mercado' && (
          <div style={{textAlign: 'center', padding: '40px'}}>
            <h2 style={{color: '#FFD700'}}>INFOPRODUTOS EM ALTA</h2>
            <p style={{color: '#666', marginTop: '10px'}}>Escaneando tendências mundiais...</p>
            <div style={{marginTop: '30px', padding: '20px', border: '1px dashed #333', borderRadius: '10px'}}>
               Nicho sugerido: <b>Finanças / IA</b>
            </div>
          </div>
        )}
      </main>

      {/* MENU INFERIOR (BOTTOM NAV) */}
      <footer style={styles.bottomNav}>
        <button onClick={() => setTab('home')} style={tab === 'home' ? {...styles.navBtn, ...styles.activeBtn} : styles.navBtn}>
          <span style={{fontSize: '1.4rem'}}>🏠</span>
          <span>HOME</span>
        </button>
        <button onClick={() => setTab('mercado')} style={tab === 'mercado' ? {...styles.navBtn, ...styles.activeBtn} : styles.navBtn}>
          <span style={{fontSize: '1.4rem'}}>🔍</span>
          <span>MERCADO</span>
        </button>
        <button onClick={() => setTab('receita')} style={tab === 'receita' ? {...styles.navBtn, ...styles.activeBtn} : styles.navBtn}>
          <span style={{fontSize: '1.4rem'}}>📊</span>
          <span>RECEITA</span>
        </button>
        <button onClick={() => setTab('perfil')} style={tab === 'perfil' ? {...styles.navBtn, ...styles.activeBtn} : styles.navBtn}>
          <span style={{fontSize: '1.4rem'}}>👤</span>
          <span>PERFIL</span>
        </button>
      </footer>
    </div>
  );
}
