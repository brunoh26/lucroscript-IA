import React from 'react';

// Estilos Reutilizáveis baseados nos prints da Kiwify
const styles = {
  container: {
    backgroundColor: '#F3F4F6', // Cinza claro de fundo (igual image_4)
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    color: '#333',
  },
  header: {
    backgroundColor: '#07834C', // Verde Kiwify (igual image_4)
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  goalBarContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  goalBar: {
    width: '150px',
    height: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  goalProgress: {
    width: '10%', // Simulação do progresso (0K)
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '3px',
  },
  main: {
    padding: '20px',
    paddingBottom: '80px', // Espaço para o menu inferior
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1F2937', // Preto/Cinza escuro
  },
  filtersContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  filter: {
    backgroundColor: '#fff',
    padding: '12px 15px',
    borderRadius: '10px',
    border: '1px solid #E5E7EB',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '0.9rem',
    color: '#4B5563',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)', // Sombra leve
  },
  cardIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#E6F3EC', // Verde claro de fundo dos ícones
    color: '#07834C', // Verde ícone
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
  },
  cardTitle: {
    fontSize: '0.85rem',
    color: '#6B7280', // Cinza texto (igual image_4)
    marginBottom: '5px',
  },
  cardValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1F2937',
  },
  // Menu Inferior (Bottom Navigation)
  bottomNav: {
    position: 'fixed',
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
