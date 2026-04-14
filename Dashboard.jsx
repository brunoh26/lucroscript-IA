import React, { useState } from 'react';

export default function Dashboard() {
  const [input, setInput] = useState('');
  const [gerando, setGerando] = useState(false);
  const [script, setScript] = useState('');

  const gerarScript = () => {
    if(!input) return alert("Digite o que você vende!");
    setGerando(true);
    // Simulando o processamento da IA L5
    setTimeout(() => {
      setScript(`🔥 SCRIPT GERADO PELA IA L5 PARA: ${input.toUpperCase()}\n\n[Gatilho de Atenção]: Você já percebeu que o mercado mudou?\n[Problema]: Muitos tentam vender, mas poucos dominam a técnica...\n[Solução]: Com o LucroScript IA, você tem o segredo nas mãos.\n[Chamada]: Clique abaixo e garanta sua vaga agora!`);
      setGerando(false);
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', padding: '20px' }}>
      {/* Header do Painel */}
      <header style={{ borderBottom: '1px solid #333', paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>L5 - PAINEL VIP</h2>
        <span style={{ color: '#00FA9A', fontSize: '0.8rem' }}>● SISTEMA OPERACIONAL</span>
      </header>

      <main style={{ maxWidth: '800px', margin: '40px auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Gerador de Scripts de Alta Conversão</h1>
        
        <div style={{ background: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
          <label style={{ display: 'block', marginBottom: '10px', color: '#ccc' }}>O que você quer vender hoje?</label>
          <input 
            type="text" 
            placeholder="Ex: Curso de Marketing, Carros, Imóveis..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #444', background: '#000', color: '#fff', marginBottom: '20px' }}
          />
          
          <button 
            onClick={gerarScript}
            disabled={gerando}
            style={{ width: '100%', padding: '15px', background: '#FFD700', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {gerando ? 'PROCESSANDO IA L5...' : 'GERAR SCRIPT AGORA'}
          </button>
        </div>

        {script && (
          <div style={{ marginTop: '30px', background: '#002b1b', border: '1px solid #00FA9A', padding: '20px', borderRadius: '10px', whiteSpace: 'pre-wrap' }}>
            <h3 style={{ color: '#00FA9A', marginTop: 0 }}>✔ Script Pronto:</h3>
            {script}
          </div>
        )}
      </main>
    </div>
  );
                    }
