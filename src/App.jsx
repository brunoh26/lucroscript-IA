import React from 'react';

export default function App() {
  const planos = [
    { 
      nome: 'Start', 
      preco: '29,90', 
      desc: 'Ideal para quem está dando os primeiros passos no digital.',
      link: 'https://pay.cakto.com.br/3cc2ayg_849244', // LINK DE 29,90 (START)
      cor: '#00FA9A'
    },
    { 
      nome: 'Pro', 
      preco: '79,90', 
      desc: 'Acesso completo às melhores ferramentas de conversão.', 
      destaque: true,
      link: 'https://pay.cakto.com.br/bua2g4g', // LINK DE 79,90 (PRO)
      cor: '#FFD700'
    },
    { 
      nome: 'Black', 
      preco: '197,00', 
      desc: 'Mentoria, suporte prioritário e scripts exclusivos VIP.',
      link: 'https://pay.cakto.com.br/ty8w2u2', // LINK DE 197,00 (BLACK)
      cor: '#FFD700'
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', color: '#fff' }}>
      <h1 style={{ color: '#FFD700', fontSize: '2.5rem', marginBottom: '10px' }}>L5 - LUCROSCRIPT IA</h1>
      <p style={{ color: '#00FA9A', marginBottom: '40px', letterSpacing: '1px' }}>INTELIGÊNCIA EM VENDAS • ALTA CONVERSÃO</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {planos.map((plano) => (
          <div key={plano.nome} style={{ 
            border: plano.destaque ? '2px solid #FFD700' : '1px solid #333',
            padding: '30px', borderRadius: '15px', width: '280px', background: '#111',
            boxShadow: plano.destaque ? '0 0 20px rgba(255, 215, 0, 0.2)' : 'none'
          }}>
            <h2 style={{ color: '#FFD700', fontSize: '1.2rem' }}>PLANO {plano.nome.toUpperCase()}</h2>
            <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '15px 0' }}>
              <span style={{ fontSize: '1rem' }}>R$</span> {plano.preco}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#ccc', minHeight: '60px', lineHeight: '1.4' }}>{plano.desc}</p>
            
            <a href={plano.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ 
                backgroundColor: plano.cor, 
                color: '#000', border: 'none', width: '100%',
                padding: '15px', borderRadius: '8px', marginTop: '20px', 
                fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem',
                textTransform: 'uppercase'
              }}> 
                ADQUIRIR AGORA 
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
