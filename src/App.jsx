import React from 'react';

export default function App() {
  const planos = [
    { 
      nome: 'Start', 
      preco: '29,90', 
      desc: 'Ideal para quem está dando os primeiros passos no digital.',
      link: 'https://pay.cakto.com.br/3cc2ayg_849244', 
      cor: '#00FA9A'
    },
    { 
      nome: 'Pro', 
      preco: '79,90', 
      desc: 'Acesso completo às melhores ferramentas de conversão.', 
      destaque: true,
      link: 'https://pay.cakto.com.br/bua2g4g', 
      cor: '#FFD700'
    },
    { 
      nome: 'Black', 
      preco: '197,00', 
      desc: 'Mentoria, suporte prioritário e scripts exclusivos VIP.',
      link: 'https://pay.cakto.com.br/ty8w2u2', 
      cor: '#FFD700'
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', color: '#fff' }}>
      <h1 style={{ color: '#FFD700', fontSize: '2.5rem', marginBottom: '10px' }}>L5 - LUCROSCRIPT IA</h1>
      <p style={{ color: '#00FA9A', marginBottom: '40px', letterSpacing: '1px' }}>INTELIGÊNCIA EM VENDAS • ALTA CONVERSÃO</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {planos.map((plano) => (
          <div key={plano.nome} style={{ border: plano.destaque ? '2px solid #FFD700' : '1px solid #333', padding: '30px', borderRadius: '15px', width: '280px', background: '#111' }}>
            <h2 style={{ color: '#FFD700' }}>PLANO {plano.nome.toUpperCase()}</h2>
            <p style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>R$ {plano.preco}</p>
            <p>{plano.desc}</p>
            <a href={plano.link} target="_blank" rel="noopener noreferrer">
              <button style={{ backgroundColor: plano.cor, color: '#000', border: 'none', width: '100%', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}> 
                ADQUIRIR AGORA 
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
