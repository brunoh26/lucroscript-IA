import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return user ? (
    <Dashboard user={user} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
    }
    import { useState } from "react";

export default function Login({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", birthdate: "", password: "", confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (mode === "register" && form.password !== form.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({ name: form.name || "Usuário", email: form.email });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#a8862a] flex items-center justify-center shadow-lg shadow-[#d4af37]/20 mb-4">
            <span className="text-3xl font-black text-[#121212] tracking-tighter font-mono">L5</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">LucroScript <span className="text-[#d4af37]">IA</span></h1>
          <p className="text-sm text-gray-500 mt-1">Plataforma de Inteligência em Vendas</p>
        </div>

        {/* Card */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 shadow-2xl">
          {/* Tab switcher */}
          <div className="flex bg-[#121212] rounded-xl p-1 mb-7 border border-[#2a2a2a]">
            {["login", "register"].map((tab) => (
              <button
                key={tab}
                onClick={() => { setMode(tab); setError(""); }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  mode === tab
                    ? "bg-gradient-to-r from-[#d4af37] to-[#a8862a] text-[#121212] shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "login" ? "Entrar" : "Cadastrar"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <>
                <InputField label="Nome completo" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Seu nome" />
                <InputField label="WhatsApp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} placeholder="(xx) 9xxxx-xxxx" />
                <InputField label="Data de Nascimento" name="birthdate" type="date" value={form.birthdate} onChange={handleChange} />
              </>
            )}
            <InputField label="E-mail" name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" />
            <InputField label="Senha" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
            {mode === "register" && (
              <InputField label="Confirmar Senha" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="••••••••" />
            )}

            {error && (
              <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 rounded-xl font-bold text-[#121212] bg-gradient-to-r from-[#d4af37] to-[#a8862a] hover:from-[#e5c24a] hover:to-[#b8962f] transition-all duration-200 shadow-lg shadow-[#d4af37]/20 disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Processando...
                </span>
              ) : mode === "login" ? "Acessar Plataforma" : "Criar Conta"}
            </button>
          </form>

          {/* Support */}
          <div className="mt-6 pt-5 border-t border-[#2a2a2a] text-center">
            <p className="text-xs text-gray-600">Suporte CEO Bruno Henrique</p>
            <a href="https://wa.me/5512988473161" target="_blank" rel="noreferrer"
              className="text-xs text-[#22c55e] hover:text-[#4ade80] transition-colors font-medium">
              (12) 98847-3161
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-700 mt-6">© 2025 LucroScript IA · Todos os direitos reservados</p>
      </div>
    </div>
  );
}

function InputField({ label, name, type, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-[#121212] border border-[#2f2f2f] focus:border-[#22c55e] text-white rounded-xl px-4 py-2.5 text-sm outline-none transition-colors placeholder-gray-700 focus:ring-1 focus:ring-[#22c55e]/30"
      />
    </div>
  );
}import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "⊞" },
  { id: "produtos", label: "Radar Elite", icon: "◈" },
  { id: "vendas", label: "Minhas Vendas", icon: "◎" },
  { id: "colaboradores", label: "Colaboradores", icon: "◉" },
  { id: "relatorios", label: "Relatórios", icon: "▦" },
  { id: "financeiro", label: "Financeiro", icon: "◆" },
  { id: "assinatura", label: "Assinatura", icon: "✦" },
  { id: "suporte", label: "Suporte", icon: "◐" },
];

const EMPTY_DATA = [
  { name: "Seg", vendas: 0, receita: 0 },
  { name: "Ter", vendas: 0, receita: 0 },
  { name: "Qua", vendas: 0, receita: 0 },
  { name: "Qui", vendas: 0, receita: 0 },
  { name: "Sex", vendas: 0, receita: 0 },
  { name: "Sáb", vendas: 0, receita: 0 },
  { name: "Dom", vendas: 0, receita: 0 },
];

const METRIC_CARDS = [
  { label: "Receita Total", value: "R$ 0,00", sub: "Sem dados", color: "#d4af37", icon: "◆" },
  { label: "Total de Vendas", value: "0", sub: "Sem dados", color: "#22c55e", icon: "◎" },
  { label: "Ticket Médio", value: "R$ 0,00", sub: "Sem dados", color: "#3b82f6", icon: "◈" },
  { label: "Taxa de Conversão", value: "0%", sub: "Sem dados", color: "#a855f7", icon: "◉" },
];

export default function Dashboard({ user, onLogout }) {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [chartType, setChartType] = useState("bar");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex font-mono text-white">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#121212] border-r border-[#1e1e1e] flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-[#1e1e1e]">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#a8862a] flex items-center justify-center shadow shadow-[#d4af37]/20">
            <span className="text-base font-black text-[#121212]">L5</span>
          </div>
          <div>
            <div className="text-sm font-bold text-white">LucroScript</div>
            <div className="text-[10px] text-[#d4af37] font-semibold tracking-wider">IA PLATFORM</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-all duration-150 group ${
                activeNav === item.id
                  ? "bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20"
                  : "text-gray-500 hover:text-gray-300 hover:bg-[#1a1a1a]"
              }`}
            >
              <span className="text-base w-5 text-center">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {activeNav === item.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#22c55e]" />}
            </button>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="border-t border-[#1e1e1e] px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#a8862a] flex items-center justify-center text-xs font-black text-[#121212]">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">{user?.name || "Usuário"}</div>
              <div className="text-[10px] text-gray-600 truncate">{user?.email}</div>
            </div>
          </div>
          <button onClick={onLogout} className="w-full text-xs text-gray-600 hover:text-red-400 transition-colors text-left py-1">
            ⏏ Sair da conta
          </button>
          <div className="mt-3 pt-3 border-t border-[#1e1e1e] text-center">
            <p className="text-[10px] text-gray-700">Suporte · CEO Bruno Henrique</p>
            <a href="https://wa.me/5512988473161" target="_blank" rel="noreferrer" className="text-[10px] text-[#22c55e] hover:text-[#4ade80]">(12) 98847-3161</a>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-14 bg-[#121212] border-b border-[#1e1e1e] flex items-center justify-between px-4 lg:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h2 className="text-sm font-bold text-white capitalize">{activeNav}</h2>
              <p className="text-[10px] text-gray-600 hidden sm:block">Bem-vindo de volta, {user?.name?.split(" ")[0] || "Usuário"}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-600 bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-1 rounded-lg hidden sm:block">Zero Fake · Dados Reais</span>
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">

          {/* Metric cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {METRIC_CARDS.map((card, i) => (
              <div key={i} className="bg-[#121212] border border-[#1e1e1e] rounded-2xl p-4 relative overflow-hidden group hover:border-[#2a2a2a] transition-colors">
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-10" style={{ background: card.color }} />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">{card.label}</span>
                  <span style={{ color: card.color }} className="text-base">{card.icon}</span>
                </div>
                <div className="text-xl font-black text-white mb-0.5">{card.value}</div>
                <div className="text-[10px] text-gray-700 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-700 inline-block" />
                  {card.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Charts + Copiloto row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Chart */}
            <div className="lg:col-span-2 bg-[#121212] border border-[#1e1e1e] rounded-2xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-sm font-bold text-white">Performance Semanal</h3>
                  <p className="text-[11px] text-gray-600 mt-0.5">Sem dados · Aguardando primeira venda</p>
                </div>
                <div className="flex gap-2">
                  {["bar", "line"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setChartType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        chartType === type
                          ? "bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30"
                          : "bg-[#1a1a1a] text-gray-500 border border-[#2a2a2a] hover:text-gray-300"
                      }`}
                    >
                      {type === "bar" ? "▦ Barras" : "⌇ Linhas"}
                    </button>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={220}>
                {chartType === "bar" ? (
                  <BarChart data={EMPTY_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e1e1e" />
                    <XAxis dataKey="name" tick={{ fill: "#444", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#444", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                      cursor={{ fill: "#22c55e10" }}
                    />
                    <Legend wrapperStyle={{ fontSize: "11px", color: "#666" }} />
                    <Bar dataKey="vendas" name="Vendas" fill="#22c55e" radius={[4, 4, 0, 0]} fillOpacity={0.7} />
                    <Bar dataKey="receita" name="Receita" fill="#d4af37" radius={[4, 4, 0, 0]} fillOpacity={0.7} />
                  </BarChart>
                ) : (
                  <LineChart data={EMPTY_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e1e1e" />
                    <XAxis dataKey="name" tick={{ fill: "#444", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#444", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                    />
                    <Legend wrapperStyle={{ fontSize: "11px", color: "#666" }} />
                    <Line type="monotone" dataKey="vendas" name="Vendas" stroke="#22c55e" strokeWidth={2} dot={{ fill: "#22c55e", r: 3 }} />
                    <Line type="monotone" dataKey="receita" name="Receita" stroke="#d4af37" strokeWidth={2} dot={{ fill: "#d4af37", r: 3 }} />
                  </LineChart>
                )}
              </ResponsiveContainer>

              {/* Empty state overlay */}
              <div className="flex items-center justify-center mt-2">
                <span className="text-[11px] text-gray-700 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-3 py-1">
                  ◎ Realize sua primeira venda para ativar os gráficos
                </span>
              </div>
            </div>

            {/* Copiloto do Milhão */}
            <div className="bg-[#121212] border border-[#d4af37]/20 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#22c55e]/5 rounded-full blur-2xl" />

              <div className="relative">
                {/* Robot illustration */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#0e0e0e] border-2 border-[#d4af37]/30 flex items-center justify-center shadow-lg shadow-[#d4af37]/10">
                      <div className="relative flex flex-col items-center">
                        {/* Robot face */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/30 flex flex-col items-center justify-center gap-1 relative">
                          {/* Eyes */}
                          <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" style={{ animationDelay: "0.3s" }} />
                          </div>
                          {/* Mouth bar */}
                          <div className="w-5 h-0.5 bg-[#d4af37]/50 rounded-full" />
                        </div>
                      </div>
                    </div>
                    {/* Pen accessory */}
                    <div className="absolute -right-2 -bottom-1 text-[#d4af37] text-lg transform rotate-[-30deg]">✒</div>
                    {/* Status badge */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#22c55e] border-2 border-[#121212] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-sm font-black text-[#d4af37] tracking-wide">COPILOTO DO MILHÃO</h3>
                  <p className="text-[10px] text-gray-600 mt-0.5">IA Consultora Especializada</p>
                </div>

                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-3 mb-4">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="text-[#d4af37] font-semibold">Olá!</span> Estou pronto para analisar suas vendas e gerar insights personalizados.
                  </p>
                  <p className="text-[10px] text-gray-700 mt-2">· Aguardando seus primeiros dados...</p>
                </div>

                <div className="space-y-2">
                  {["Analisar Performance", "Gerar Relatório IA", "Dicas de Conversão"].map((action, i) => (
                    <button
                      key={i}
                      className="w-full text-left text-xs text-gray-500 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#d4af37]/30 hover:text-gray-300 rounded-lg px-3 py-2 transition-all flex items-center gap-2"
                    >
                      <span className="text-[#d4af37]/40">✦</span> {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Recent sales */}
            <div className="sm:col-span-2 bg-[#121212] border border-[#1e1e1e] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white">Últimas Vendas</h3>
                <span className="text-[10px] text-gray-600 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-2 py-1">Sem dados</span>
              </div>
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-3 text-2xl text-gray-700">◎</div>
                <p className="text-xs text-gray-600">Nenhuma venda registrada ainda</p>
                <p className="text-[10px] text-gray-700 mt-1">Suas vendas aparecerão aqui em tempo real</p>
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-[#121212] border border-[#1e1e1e] rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-2.5">
                {[
                  { label: "Nova Venda", color: "#22c55e", icon: "◎" },
                  { label: "Adicionar Produto", color: "#d4af37", icon: "◈" },
                  { label: "Ver Relatório", color: "#3b82f6", icon: "▦" },
                  { label: "Suporte", color: "#a855f7", icon: "◐" },
                ].map((a, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] text-left transition-all group"
                  >
                    <span style={{ color: a.color }} className="text-base">{a.icon}</span>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">{a.label}</span>
                    <span className="ml-auto text-gray-700 text-xs">›</span>
                  </button>
                ))}
              </div>

              {/* Radar Elite banner */}
              <div className="mt-4 p-3 bg-gradient-to-r from-[#d4af37]/10 to-[#a8862a]/5 border border-[#d4af37]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#d4af37] text-sm">◈</span>
                  <span className="text-xs font-bold text-[#d4af37]">Radar Elite</span>
                </div>
                <p className="text-[10px] text-gray-600">Encontre os melhores produtos para vender agora.</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d4af37",
          dark: "#a8862a",
          light: "#e5c24a",
        },
        brand: {
          bg: "#0e0e0e",
          card: "#121212",
          surface: "#1a1a1a",
          border: "#1e1e1e",
          border2: "#2a2a2a",
        }
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        gold: "0 4px 24px rgba(212, 175, 55, 0.15)",
        green: "0 4px 24px rgba(34, 197, 94, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      }
    },
  },
  plugins: [],
}


@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

body {
  background: #0e0e0e;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background: #0e0e0e;
}
::-webkit-scrollbar-thumb {
  background: #2a2a2a;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3a3a3a;
}

/* Input date picker dark */
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
  cursor: pointer;
}import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
                {
  "name": "lucroscript-ia",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.10.3"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.4"
  }
}import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  }{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
    }
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LucroScript IA – Plataforma de Inteligência em Vendas</title>
    <meta name="description" content="LucroScript IA – Plataforma de inteligência em vendas com dados reais e zero fake." />
    <meta name="theme-color" content="#121212" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
    # LucroScript IA 🚀

Plataforma de Inteligência em Vendas — Dark Mode · Zero Fake · IA Integrada

## Stack
- **React 18** + Vite
- **Tailwind CSS 3**
- **Recharts** (gráficos)
- Deploy: **Vercel**

## Estrutura de Arquivos

```
LucroScript/
├── src/
│   ├── App.jsx          ← Roteamento Login/Dashboard
│   ├── Login.jsx        ← Tela de acesso (Login & Cadastro)
│   ├── Dashboard.jsx    ← Painel principal com sidebar e gráficos
│   ├── main.jsx         ← Entry point
│   └── index.css        ← Tailwind + fontes
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json          ← SPA routing para Vercel
```

## Deploy Local

```bash
npm install
npm run dev
```

## Deploy Vercel (GitHub)

1. Faça push deste projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) → "New Project"
3. Importe o repositório
4. Configurações automáticas detectadas pelo Vite:
   - **Framework**: Vite
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
5. Clique em **Deploy** ✅

## Identidade Visual

| Token | Valor |
|-------|-------|
| Background | `#0e0e0e` / `#121212` |
| Dourado | `#d4af37` |
| Verde | `#22c55e` |
| Fonte | JetBrains Mono |

## Suporte
CEO Bruno Henrique — (12) 98847-3161
      
    

