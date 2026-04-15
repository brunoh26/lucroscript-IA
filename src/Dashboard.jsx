import React, { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#000', // Fundo Preto Total
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    color: '#fff',
  },
  header: {
    backgroundColor: '#0a0a0a',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #FFD700', // Linha Ouro
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    color: '#FFD700',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  goalArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  progressBar: {
    width: '120px',
    height: '8px',
    backgroundColor: '#222',
    borderRadius: '4px',
    overflow: 'hidden',
    border: '0.5px solid #FFD700'
  },
  progressFill: {
    width: '15%', // Simulação de progresso real
    height: '100%',
    backgroundColor: '#00FA9A', // Verde Neon para destaque
  },
  main: {
    padding: '20px',
    paddingBottom: '100px',
  },
  card: {
    backgroundColor: '#0a0a0a',
    padding: '20px',
    borderRadius: '15px',
    border: '1px solid #1a1a1a',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
  },
  iconBox: {
    width: '45px',
    height: '45px',
    borderRadius: '10px',
    backgroundColor: '#111',
    border: '1px solid #FFD700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFD700',
    fontSize: '1.3rem',
  },
  cardLabel: {
    fontSize: '0.8rem',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  cardValue: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  // Menu Inferior Funcional
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0a0a0a',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px 0',
    borderTop: '1px solid #FFD700',
  },
  navBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: '#888',
    fontSize: '0.7rem',
    transition: '0.3s'
  },
  navActive: {
    color: '#FFD700', // Botão ativo fica Ouro
  }
};

export default function DashboardPremium() {
  const [tab, setTab] = useState('home');

  return (
    <div style={styles.container}>
      
      {/* HEADER TOP */}
      <header style={styles.header}>
        <div style={styles.logo}>L5 LUCROSCRIPT IA</div>
        <div style={styles.goalArea}>
          <div style={{textAlign: 'right'}}>
            <div style={{fontSize: '0.7rem', color: '#FFD700'}}>META: R$ 10K</div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
          </div>
          <span style={{fontSize: '1.2rem'}}>💎</span>
        </div>
      </header>

      {/* CONTEÚDO DINÂMICO */}
      <main style={styles.main}>
        {tab === 'home' && (
          <>
            <h2 style={{marginBottom: '20px', fontSize: '1.2rem'}}>Visão Geral</h2>
            
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
                <div style={styles.cardLabel}>Aprovação de Cartão</div>
                <div style={styles.cardValue}>0%</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.iconBox}>🔄</div>
              <div>
                <div style={styles.cardLabel}>Chargeback</div>
                <div style={styles.cardValue}>0%</div>
              </div>
            </div>
          </>
        )}

        {tab === 'mercado' && (
          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2 style={{color: '#FFD700'}}>🔥 Infoprodutos em Alta</h2>
            <p style={{color: '#888'}}>Escaneando o mercado mundial...</p>
          </div>
        )}

        {tab === 'receita' && (
          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2 style={{color: '#00FA9A'}}>📊 Gráficos de Escala</h2>
            <p style={{color: '#888'}}>Seus dados de lucro aparecerão aqui.</p>
          </div>
        )}
      </main>

      {/* BOTÃO DO COPILOTO (ROBÔ) */}
      <div style={{
        position: 'fixed', bottom: '90px', right: '20px', 
        backgroundColor: '#FFD700', width: '55px', height: '55px', 
        borderRadius: '50%', display: 'flex', alignItems: 'center', 
        justifyContent: 'center', fontSize: '1.5rem', boxShadow: '0 0 15px #FFD700'
      }}>
        🤖
      </div>

      {/* MENU INFERIOR FUNCIONAL */}
      <footer style={styles.bottomNav}>
        <button 
          style={tab === 'home' ? {...styles.navBtn, ...styles.navActive} : styles.navBtn}
          onClick={() => setTab('home')}
        >
          <span style={{fontSize: '1.2rem'}}>🏠</span>
          <span>HOME</span>
        </button>

        <button 
          style={tab === 'mercado' ? {...styles.navBtn, ...styles.navActive} : styles.navBtn}
          onClick={() => setTab('mercado')}
        >
          <span style={{fontSize: '1.2rem'}}>🔍</span>
          <span>MERCADO</span>
        </button>

        <button 
          style={tab === 'receita' ? {...styles.navBtn, ...styles.navActive} : styles.navBtn}
          onClick={() => setTab('receita')}
        >
          <span style={{fontSize: '1.2rem'}}>📈</span>
          <span>RECEITA</span>
        </button>

        <button 
          style={tab === 'perfil' ? {...styles.navBtn, ...styles.navActive} : styles.navBtn}
          onClick={() => setTab('perfil')}
        >
          <span style={{fontSize: '1.2rem'}}>👤</span>
          <span>PERFIL</span>
        </button>
      </footer>
    </div>
  );
}
