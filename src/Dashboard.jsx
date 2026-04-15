import React, { useState } from 'react';

export default function Dashboard() {
  // Simulação de limites conforme os planos que você definiu
  const [plano, setPlano] = useState('Black'); // Pode ser 'Start', 'Pro' ou 'Black'
  
  const limites = {
    Start: { videos: 25, scripts: 30, bios: 15, modo: 'Estrategista' },
    Pro: { videos: 80, scripts: 100, bios: 50, modo: 'Estrategista' },
    Black: { videos: 150, scripts: 'Ilimitado', bios: 'Ilimitado', modo: 'CEO VIP 👑' }
  };

  const [uso, setUso] = useState({ videos: 12, scripts: 8, bios: 5 });

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* BARRA LATERAL (SIDEBAR) */}
      <div style={{ width: '260px', background: '#0a0a0a', borderRight: '1px solid #FFD700', padding: '20px' }}>
        <h2 style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '40px' }}>L5 LUCROSCRIPT</h2>
        
        <nav>
          <div style={navItem}>📊 Dashboard</div>
          <div style={navItem}>🔥 Infoprodutos em Alta</div>
          <div style={navItem}>🎬 Vídeos Virais IA</div>
          <div style={navItem}>✍️ Scripts de Elite</div>
          <div style={navItem}>📱 Bio Persuasiva</div>
          <div style={navItem}>💬 Área de Membros</div>
          <div style={{ ...navItem, marginTop: '50px', color: '#888' }}>⚙️ Configurações</div>
        </nav>
      </div>

      {/* ÁREA PRINCIPAL */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem' }}>Painel do {limites[plano].modo}</h1>
            <p style={{ color: '#FFD700' }}>Plano {plano} Ativo</p>
          </div>
          <button style={btnBusca}>🔍 BUSCAR TENDÊNCIAS MUNDIAIS</button>
        </header>

        {/* GRÁFICOS DE CONSUMO REAL */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
          <div style={cardStyle}>
            <h3>Consumo de Vídeos Virais</h3>
            <p style={{ fontSize: '0.8rem', color: '#888' }}>{uso.videos} de {limites[plano].videos} vídeos usados</p>
            <div style={progressBg}><div style={{ ...progressFill, width: `${(uso.videos / limites[plano].videos) * 100}%`, backgroundColor: '#FFD700' }}></div></div>
          </div>

          <div style={cardStyle}>
            <h3>Scripts & Bios</h3>
            <p style={{ fontSize: '0.8rem', color: '#888' }}>Uso atual: {uso.scripts} gerados</p>
            <div style={progressBg}><div style={{ ...progressFill, width: '30%', backgroundColor: '#00FA9A' }}></div></div>
          </div>
        </div>

        {/* O COPILOTO DO MILHÃO (Boas-vindas inteligente) */}
        <div style={{ background: 'linear-gradient(145deg, #111, #000)', padding: '30px', borderRadius: '15px', border: '1px solid #FFD700', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <div style={{ fontSize: '40px' }}>🤖🖋️</div>
            <div>
              <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Copiloto do Milhão diz:</h3>
              <p style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
                "Seja bem-vindo ao império, sócio! O mercado não espera por ninguém. 
                Seu plano <b>{plano}</b> te dá o poder do <b>Modo {limites[plano].modo}</b>. 
                Analisei os gráficos e você tem {limites[plano].videos - uso.videos} vídeos virais prontos para serem criados. 
                Qual nicho vamos dominar hoje?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ESTILOS RÁPIDOS
const navItem = { padding: '15px 10px', cursor: 'pointer', borderBottom: '1px solid #111', transition: '0.3s', fontSize: '0.9rem' };
const btnBusca = { background: '#FFD700', color: '#000', border: 'none', padding: '12px 20px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' };
const cardStyle = { background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #222' };
const progressBg = { background: '#222', height: '8px', borderRadius: '4px', marginTop: '15px' };
const progressFill = { height: '100%', borderRadius: '4px', transition: '0.5s' };
bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #E5E7EB',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    color: '#9CA3AF', // Cinza inativo
    cursor: 'pointer',
    fontSize: '0.75rem',
  },
  navItemActive: {
    color: '#07834C', // Verde ativo
  },
  // Ícones do Menu Inferior
  navIcon: {
    fontSize: '1.4rem',
  },
  // Balão de Chat (Suporte)
  chatButton: {
    position: 'fixed',
    bottom: '70px',
    right: '20px',
    backgroundColor: '#000',
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
};

export default function DashboardKiwifyStyle() {
  return (
    <div style={styles.container}>
      
      {/* HEADER (Barra Superior Verde) */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span>&#9776;</span> {/* Ícone do Menu Hamburguer */}
          <span style={styles.logo}>LucroScript IA</span>
        </div>
        <div style={styles.goalBarContainer}>
          <div style={{ ...styles.goalBarContainer, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
            <span style={{ fontSize: '0.8rem' }}>R$ 0K / R$ 10K</span>
            <div style={styles.goalBar}>
              <div style={styles.goalProgress}></div>
            </div>
          </div>
          <span style={{ fontSize: '1.2rem' }}>💎</span> {/* Ícone do Diamante */}
        </div>
      </header>

      {/* ÁREA PRINCIPAL */}
      <main style={styles.main}>
        <h1 style={styles.title}>Dashboard</h1>

        {/* FILTROS (Igual image_4) */}
        <div style={styles.filtersContainer}>
          <div style={styles.filter}>
            <span>Hoje</span>
            <span style={{ color: '#9CA3AF' }}>&#9660;</span>
          </div>
          <div style={styles.filter}>
            <span>Todos os produtos</span>
            <span style={{ color: '#9CA3AF' }}>&#9660;</span>
          </div>
          <div style={styles.filter}>
            <span>Todas as moedas</span>
            <span style={{ color: '#9CA3AF' }}>&#9660;</span>
          </div>
        </div>

        {/* CARTÕES DE MÉTRICAS */}
        {/* Valor Líquido (Igual image_4) */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>$</div>
          <div>
            <div style={styles.cardTitle}>Valor líquido</div>
            <div style={styles.cardValue}>R$ 0,00</div>
          </div>
        </div>

        {/* Vendas (Igual image_4) */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>&#128200;</div>
          <div>
            <div style={styles.cardTitle}>Vendas</div>
            <div style={styles.cardValue}>0</div>
          </div>
        </div>

        {/* Aprovação cartão (Igual image_5) */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>&#128179;</div>
          <div>
            <div style={styles.cardTitle}>Aprovação cartão</div>
            <div style={styles.cardValue}>0 %</div>
          </div>
        </div>

        {/* Chargeback (Igual image_5) */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>&#128711;</div>
          <div>
            <div style={styles.cardTitle}>Chargeback</div>
            <div style={styles.cardValue}>0 %</div>
          </div>
        </div>
      </main>

      {/* BALÃO DE CHAT (SUPORTE) */}
      <div style={styles.chatButton}>
        <span>&#128172;</span>
      </div>

      {/* MENU INFERIOR (Bottom Navigation - Igual prints) */}
      <footer style={styles.bottomNav}>
        <div style={{ ...styles.navItem, ...styles.navItemActive }}>
          <span style={styles.navIcon}>🏠</span>
          <span>Home</span>
        </div>
        <div style={styles.navItem}>
          <span style={styles.navIcon}>&#128270;</span> {/* Ícone de Pesquisa/Lupa */}
          <span>Mercado</span>
        </div>
        <div style={styles.navItem}>
          <span style={styles.navIcon}>&#128202;</span> {/* Ícone de Gráfico/Receita */}
          <span>Receita</span>
        </div>
        <div style={styles.navItem}>
          <span style={styles.navIcon}>&#128100;</span> {/* Ícone de Usuário */}
          <span>Perfil</span>
        </div>
      </footer>
    </div>
  );
  }
