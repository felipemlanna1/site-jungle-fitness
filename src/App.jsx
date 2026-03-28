import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, InstagramLogo, MapPin, Star, Clock, Barbell, Lightning, Users, Fire, ArrowUp, List, X, Phone, Timer } from '@phosphor-icons/react'

const WHATSAPP = "5548991981122"
const INSTAGRAM = "https://instagram.com/junglefitnesspremium"
const PHONE = "(48) 99198-1122"
const ADDRESS = "R. Prefeito Leopoldo Freiberger, 239 - Centro, Biguacu - SC"

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="text-2xl font-black tracking-tight text-white">JUNGLE<span className="text-green-500">FITNESS</span></a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-green-400 transition font-medium">{l.label}</a>
          ))}
        </div>
        <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero agendar minha aula experimental gratis!`} target="_blank" rel="noopener" className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition">
          <WhatsappLogo size={18} weight="duotone" /> Aula Gratis
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black/95 backdrop-blur-xl border-t border-green-900/30">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-green-400 transition font-medium text-sm">{l.label}</a>
              ))}
              <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero minha aula gratis!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg font-bold">
                <WhatsappLogo size={18} weight="duotone" /> Aula Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="./images/hero.jpg" alt="Jungle Fitness Premium" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>
      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Lightning size={16} weight="duotone" /> Academia Premium com Preco Popular
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
          JUNGLE <span className="text-green-500">FITNESS</span><br />PREMIUM
        </motion.h1>
        <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          A melhor academia de Biguacu com equipamentos de ultima geracao, professores qualificados e ambiente motivador. Nota 4.9 no Google!
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero agendar minha aula experimental gratuita na Jungle Fitness!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-green-600/30">
            <WhatsappLogo size={24} weight="duotone" /> Aula Experimental Gratis
          </a>
          <a href="#modalidades" className="flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-green-500 text-white px-8 py-4 rounded-lg text-lg transition hover:text-green-400">
            <Barbell size={24} weight="duotone" /> Modalidades
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-1 items-center">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" className="text-yellow-500" />)}
          <span className="text-gray-400 ml-2 text-sm">4.9 estrelas no Google</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/musculacao.jpg" alt="Sala de musculacao Jungle Fitness" className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.span variants={fadeUp} className="text-green-500 uppercase tracking-widest text-sm font-bold">Sobre Nos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white leading-tight">EXPERIENCIA <span className="text-green-500">PREMIUM</span> ACESSIVEL</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            A Jungle Fitness Premium nasceu em 2022 com a missao de levar uma experiencia de academia premium a um preco acessivel para Biguacu. Ambiente moderno, equipamentos de ponta e profissionais qualificados.
          </motion.p>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            Com diversas modalidades como Musculacao, Cross Training, Spinning, Ritmos e FitDance, temos opcoes para todos os gostos e objetivos.
          </motion.p>
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            {[
              { num: '4.9', label: 'Estrelas' },
              { num: '6+', label: 'Modalidades' },
              { num: '17h', label: 'Aberta/dia' },
              { num: '3k+', label: 'Seguidores' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-green-500">{s.num}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Modalidades() {
  const mods = [
    { icon: <Barbell size={40} weight="duotone" />, title: 'Musculacao', desc: 'Equipamentos modernos, ambiente climatizado e orientacao profissional para seu treino.' },
    { icon: <Fire size={40} weight="duotone" />, title: 'Cross Training', desc: 'Treinos intensos e funcionais para quem busca resultado rapido e superacao.' },
    { icon: <Timer size={40} weight="duotone" />, title: 'Spinning', desc: 'Aulas de ciclismo indoor com musica e energia para queimar calorias.' },
    { icon: <Users size={40} weight="duotone" />, title: 'Ritmos e FitDance', desc: 'Dance e se divirta enquanto queima calorias. Aulas animadas para todos os niveis.' },
    { icon: <Lightning size={40} weight="duotone" />, title: 'G.A.P.', desc: 'Gluteos, Abdomen e Pernas. Treino localizado para definicao e tonificacao.' },
    { icon: <Star size={40} weight="duotone" />, title: 'Funcional', desc: 'Exercicios que melhoram forca, equilibrio e flexibilidade do corpo todo.' },
  ]
  return (
    <section id="modalidades" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-green-500 uppercase tracking-widest text-sm font-bold">Atividades</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mt-3">NOSSAS <span className="text-green-500">MODALIDADES</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mods.map(m => (
            <motion.div key={m.title} variants={fadeUp} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 hover:border-green-500/50 transition group">
              <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform">{m.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Galeria() {
  const fotos = [
    { src: './images/crossfit.jpg', title: 'Cross Training' },
    { src: './images/musculacao.jpg', title: 'Musculacao' },
    { src: './images/spinning.jpg', title: 'Spinning' },
    { src: './images/fitdance.jpg', title: 'FitDance' },
  ]
  return (
    <section id="galeria" className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-green-500 uppercase tracking-widest text-sm font-bold">Galeria</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mt-3">NOSSO <span className="text-green-500">ESPACO</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
          {fotos.map(f => (
            <motion.div key={f.title} variants={fadeUp} className="group relative overflow-hidden rounded-2xl aspect-[16/10]">
              <img src={f.src} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{f.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Planos() {
  return (
    <section id="planos" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-green-500 uppercase tracking-widest text-sm font-bold">Planos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mt-3">ESCOLHA SEU <span className="text-green-500">PLANO</span></motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mt-4">Entre em contato para conhecer nossos valores e promocoes especiais.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Mensal', desc: 'Acesso a todas as modalidades', highlight: false },
            { name: 'Trimestral', desc: 'Economia de ate 15%', highlight: true },
            { name: 'Semestral', desc: 'Melhor custo-beneficio', highlight: false },
          ].map(p => (
            <motion.div key={p.name} variants={fadeUp} className={`rounded-2xl p-8 text-center ${p.highlight ? 'bg-green-600 text-white ring-2 ring-green-400 scale-105' : 'bg-zinc-900 border border-zinc-800 text-white'}`}>
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className={`text-sm mb-6 ${p.highlight ? 'text-green-100' : 'text-gray-400'}`}>{p.desc}</p>
              <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero saber o valor do plano ${p.name} da Jungle Fitness!`} target="_blank" rel="noopener" className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition ${p.highlight ? 'bg-white text-green-700 hover:bg-green-50' : 'bg-green-600 hover:bg-green-500 text-white'}`}>
                <WhatsappLogo size={18} weight="duotone" /> Consultar Valor
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Depoimentos() {
  const reviews = [
    { name: 'Thiago R.', text: 'Melhor academia de Biguacu! Equipamentos novos, professores excelentes e o preco e muito justo. Recomendo demais!', stars: 5 },
    { name: 'Julia P.', text: 'Amo as aulas de FitDance e Spinning! O ambiente e super motivador e a galera e muito gente boa. Melhor investimento.', stars: 5 },
    { name: 'Carlos A.', text: 'Fazia tempo que procurava uma academia boa em Biguacu. A Jungle superou todas as expectativas. Estrutura top!', stars: 5 },
  ]
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-green-500 uppercase tracking-widest text-sm font-bold">Depoimentos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mt-3">NOSSOS <span className="text-green-500">ALUNOS</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <motion.div key={r.name} variants={fadeUp} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={18} weight="fill" className="text-yellow-500" />)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{r.text}"</p>
              <p className="text-white font-bold">{r.name}</p>
              <p className="text-gray-500 text-sm">Google Reviews</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-green-900/30 via-black to-green-900/30">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">SUA <span className="text-green-500">TRANSFORMACAO</span> COMECA AQUI</motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10">
          Agende sua aula experimental gratuita e descubra por que somos a academia mais bem avaliada de Biguacu.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero minha aula experimental gratuita na Jungle Fitness Premium!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-green-600/30">
            <WhatsappLogo size={24} weight="duotone" /> Aula Gratis pelo WhatsApp
          </a>
          <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-green-500 text-white px-8 py-4 rounded-lg text-lg transition hover:text-green-400">
            <Phone size={24} weight="duotone" /> Ligar Agora
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
          <motion.span variants={fadeUp} className="text-green-500 uppercase tracking-widest text-sm font-bold">Contato</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white leading-tight">VENHA <span className="text-green-500">TREINAR</span></motion.h2>
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={28} weight="duotone" className="text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Endereco</h4>
                <p className="text-gray-400">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <WhatsappLogo size={28} weight="duotone" className="text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">WhatsApp</h4>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-gray-400 hover:text-green-400 transition">{PHONE}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <InstagramLogo size={28} weight="duotone" className="text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Instagram</h4>
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-gray-400 hover:text-green-400 transition">@junglefitnesspremium</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={28} weight="duotone" className="text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Horario</h4>
                <p className="text-gray-400">Seg - Sex: 6h as 23h</p>
                <p className="text-gray-400">Sab: 8h as 12h | Dom: 15h as 19h</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/crossfit.jpg" alt="Cross Training Jungle Fitness" className="rounded-2xl w-full aspect-square object-cover shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xl font-black text-white">JUNGLE<span className="text-green-500">FITNESS</span></p>
        <p className="text-gray-500 text-sm">&copy; 2026 Jungle Fitness Premium. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-gray-500 hover:text-green-400 transition"><InstagramLogo size={24} weight="duotone" /></a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-gray-500 hover:text-green-400 transition"><WhatsappLogo size={24} weight="duotone" /></a>
        </div>
      </div>
    </footer>
  )
}

function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-3 rounded-full shadow-lg transition">
      <ArrowUp size={24} />
    </button>
  )
}

function WhatsAppFloat() {
  return (
    <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero saber mais sobre a Jungle Fitness Premium.`} target="_blank" rel="noopener" className="fixed bottom-6 left-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Modalidades />
      <Galeria />
      <Planos />
      <Depoimentos />
      <CTA />
      <Contato />
      <Footer />
      <ScrollTop />
      <WhatsAppFloat />
    </div>
  )
}
