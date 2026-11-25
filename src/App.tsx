import { useRef, useState } from 'react'
import { ArrowDown, ArrowRight, Check, ChevronDown, Download, LockKeyhole, Menu, Printer, ShieldCheck, Sparkles, Zap, X } from 'lucide-react'

const checkoutUrl = 'https://pay.cakto.com.br/wcys8zr_1365256'
const activities = [
  { n: '01', title: '30 Atividades Completas', kind: 'KIT PRINCIPAL', color: 'coral', image: '/kit-principal.png', alt: 'Kit principal com 30 atividades' },
  { n: '02', title: 'Desafio dos 7 Dias Sem Tela', kind: 'DESAFIO', color: 'blue', image: '/desafio-7-dias.jpg', alt: 'Desafio dos 7 Dias Sem Tela' },
  { n: '03', title: '10 Frases para Convencer Seu Filho', kind: 'MATERIAL DE APOIO', color: 'yellow', image: '/frases.jpg', alt: '10 frases para convencer seu filho a largar a tela' },
  { n: '04', title: 'Jardim num Copo', kind: 'BÔNUS 01', color: 'green', image: '/jardim-num-copo.jpg', alt: 'Material Jardim num Copo' },
  { n: '05', title: 'Show de Talentos da Família', kind: 'BÔNUS 02', color: 'purple', image: '/show-talentos.jpg', alt: 'Material Show de Talentos da Família' },
  { n: '06', title: 'Guia Comece Aqui', kind: 'GUIA DE ORIENTAÇÃO', color: 'pink', image: '/guia-comece-aqui.jpg', alt: 'Guia Comece Aqui' },
]
const faqs = [
  ['O que é o BRINCATÓRIO?', 'É um kit digital com 30 atividades sem tela, pensado para transformar momentos do dia a dia em oportunidades de diversão, criatividade e conexão em família.'],
  ['Como vou receber o material?', 'Após a confirmação do pagamento e a liberação do acesso, você receberá as orientações para acessar os arquivos digitais pelo Google Drive.'],
  ['O produto é físico?', 'Não. O BRINCATÓRIO é 100% digital. Você acessa os arquivos e pode imprimir as atividades que quiser.'],
  ['Preciso imprimir todas as atividades?', 'Não! Você escolhe o que faz sentido para cada momento. Pode imprimir aos poucos, conforme a vontade e a rotina da família.'],
  ['Posso imprimir novamente?', 'Sim. Você pode guardar os arquivos e imprimir novamente para uso da sua família, respeitando os termos de uso do material.'],
  ['O pagamento é único?', 'Sim. O investimento é de R$ 27,00, pago uma única vez.'],
  ['E se eu não gostar?', 'Você conta com garantia de 7 dias, conforme as condições aplicáveis à compra.'],
  ['Quando posso começar?', 'Assim que o pagamento for aprovado e o acesso for liberado, você já poderá abrir os materiais e escolher a primeira atividade.'],
]
export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ startX: number; startScroll: number; active: boolean }>({ startX: 0, startScroll: 0, active: false })
  const handleCarouselPointerDown = (event: React.PointerEvent<HTMLDivElement>) => { dragRef.current = { startX: event.clientX, startScroll: event.currentTarget.scrollLeft, active: true }; event.currentTarget.setPointerCapture(event.pointerId) }
  const handleCarouselPointerMove = (event: React.PointerEvent<HTMLDivElement>) => { if (dragRef.current.active) event.currentTarget.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX) }
  const stopCarouselDrag = () => { dragRef.current.active = false }
  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  return <main>
    <div className="top-note"><Sparkles size={15}/> MAIS BRINCADEIRAS, MENOS TEMPO NAS TELAS <Sparkles size={15}/></div>
    <header className="site-header">
      <a className="brand" href="#inicio"><span className="brand-mark">B<span>!</span></span><span>BRINCA<span>TÓRIO</span></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <button onClick={() => goTo('como-funciona')}>Como funciona</button><button onClick={() => goTo('atividades')}>O que vem no kit</button><button onClick={() => goTo('duvidas')}>Dúvidas</button><button className="nav-cta" onClick={() => goTo('oferta')}>Quero conhecer <ArrowRight size={16}/></button>
      </nav>
    </header>
    <section className="hero section-wrap" id="inicio">
      <div className="hero-copy">
        <h1>Seu filho larga o celular <span>sem briga</span> quando você tem a resposta certa na mão.</h1>
        <p className="hero-lead">30 atividades sem tela, prontas para usar hoje. Em menos de 5 minutos você já tem uma atividade no ar e a tela fora de cena — hoje mesmo.</p>
        <p className="hero-prompt">Você abre, escolhe uma e começa agora.</p>
        <button className="button button-primary hero-button" onClick={() => goTo('atividades')}>Quero ver as atividades <ArrowDown size={18}/></button>
        <div className="hero-assurance"><LockKeyhole size={16}/> Compra segura <i/><Zap size={16}/> Acesso imediato <i/><ShieldCheck size={16}/> Garantia 7 dias</div>
      </div>
      <div className="hero-art" aria-label="Mockup do kit BRINCATÓRIO"><img className="hero-mockup-image" src="/Mockup%20hero%20-%202.png" alt="Mockup dos materiais do BRINCATÓRIO"/></div>
    </section>
    <section className="ticker"><div className="ticker-track"><span>✳ MENOS TELAS</span><span>✳ MAIS IMAGINAÇÃO</span><span>✳ TEMPO DE QUALIDADE</span><span>✳ DIVERSÃO EM FAMÍLIA</span><span>✳ MENOS TELAS</span><span>✳ MAIS IMAGINAÇÃO</span><span>✳ TEMPO DE QUALIDADE</span><span>✳ DIVERSÃO EM FAMÍLIA</span></div></section>
    <section className="intro-section section-wrap" id="como-funciona">
      <div className="section-kicker">A INFÂNCIA ACONTECE AGORA</div><h2>Não precisa de muito.<br/><span>Só precisa começar.</span></h2>
      <p>Você não precisa inventar uma brincadeira nova todo dia. O BRINCATÓRIO reúne ideias simples e guiadas para ajudar a transformar aquele “não tenho o que fazer” em um convite para explorar, imaginar e brincar.</p>
      <div className="three-benefits"><article><div className="benefit-icon coral-bg">🧡</div><h3>Escolha uma ideia</h3><p>Encontre uma atividade que combine com o momento de vocês.</p></article><article><div className="benefit-icon yellow-bg">✂️</div><h3>Prepare rapidinho</h3><p>Separe os materiais indicados e siga as orientações simples.</p></article><article><div className="benefit-icon green-bg">🎉</div><h3>Divirtam-se juntos</h3><p>Deixe a curiosidade guiar e aproveite o tempo em família.</p></article></div>
    </section>
<section className="activities-section" id="atividades"><div className="section-wrap">
      <div className="activities-heading"><div><div className="section-kicker">UM GOSTINHO DO QUE VEM AÍ</div><h2>Ideias que viram<br/><span>momentos especiais.</span></h2></div><p>Um universo de propostas para estimular a criatividade, a observação e a interação — com leveza e diversão.</p></div>
      <div className="activity-carousel" ref={carouselRef} onPointerDown={handleCarouselPointerDown} onPointerMove={handleCarouselPointerMove} onPointerUp={stopCarouselDrag} onPointerCancel={stopCarouselDrag}><div className="activity-track">{[...activities, ...activities].map((item, index) => <article className={'activity-card ' + item.color} key={item.n + '-' + index}><div className="activity-image"><img src={item.image} alt={item.alt} loading="lazy"/></div></article>)}</div></div>
      <div className="activity-note"><Sparkles size={17}/> Estas são apenas algumas ideias para você conhecer a proposta. O kit completo reúne 30 atividades.</div>
    </div></section>
    <section className="connection-section section-wrap"><div className="connection-art"><img className="connection-photo" src="/Ma%CC%83e%20e%20filho%20fazendo%20atividade%20do%20Brincato%CC%81rio.png" alt="Mãe e filho fazendo uma atividade criativa do BRINCATÓRIO" loading="lazy"/></div><div className="connection-copy"><div className="section-kicker">MAIS DO QUE PASSAR O TEMPO</div><h2>O melhor presente<br/>é a sua <span>presença.</span></h2><p>Entre uma tarefa e outra, existe espaço para uma pausa, uma risada e uma descoberta. As atividades são um ponto de partida para criar esses momentos — sem complicar a rotina.</p><div className="connection-quote">“A brincadeira começa com uma ideia. A lembrança fica para sempre.”</div></div></section>
    <section className="pain-section"><div className="section-wrap pain-wrap"><div className="section-kicker">VOCÊ NÃO ESTÁ SOZINHA NESSA</div><h2>Você já passou por <span>isso?</span></h2><p className="pain-intro">Você tira o celular e ouve: <strong>“Mas o que eu vou fazer então?”</strong></p><div className="pain-list">
      <article><span>😰</span><p><strong>Birra toda vez que tira a tela</strong> — e você acaba devolvendo por cansaço.</p></article>
      <article><span>😔</span><p><strong>A culpa de entregar o celular bate todo dia</strong>, mas você não sabe o que oferecer no lugar.</p></article>
      <article><span>🤯</span><p><strong>Você até tenta atividades</strong>, mas a criança perde o interesse em 5 minutos e volta para a tela.</p></article>
      <article><span>😩</span><p><strong>Dias de chuva, férias e fins de semana</strong> viram um campo de batalha em casa.</p></article>
    </div><div className="pain-conclusion"><p><strong>A culpa não é sua.</strong> Ninguém ensina as mães a terem uma alternativa pronta na hora da crise.</p><b>O BRINCATÓRIO resolve isso.</b></div></div></section>
    <section className="offer-section" id="oferta"><div className="section-wrap offer-wrap"><div className="offer-copy"><img className="offer-family-photo" src="/Ma%CC%83e%20e%20filha%20em%20atividade%20criativa.png" alt="Mãe e filha em atividade criativa com o BRINCATÓRIO" loading="lazy"/><div className="section-kicker">TUDO O QUE VOCÊ VAI RECEBER</div><h2>Um kit completo para<br/><span>brincar mais em família.</span></h2><p>Ao garantir o BRINCATÓRIO, você recebe todos estes materiais digitais para acessar e aproveitar no seu ritmo:</p></div>
      <div className="price-card"><div className="price-tag"><Sparkles size={15}/> KIT DIGITAL COMPLETO</div><div className="price-title">BRINCATÓRIO</div><div className="price-includes">
          <div><Check size={15}/><span><b>Kit Principal:</b> 30 atividades completas com passo a passo</span></div>
          <div><Check size={15}/><span>Desafio dos 7 Dias Sem Tela depois do jantar</span></div>
          <div><Check size={15}/><span>10 Frases para Convencer Seu Filho a Largar a Tela</span></div>
          <div><Check size={15}/><span><b>Bônus 01</b> — Jardim num Copo</span></div>
          <div><Check size={15}/><span><b>Bônus 02</b> — Show de Talentos da Família</span></div>
          <div><Check size={15}/><span><b>Guia Comece Aqui:</b> orientações para começar</span></div>
        </div><div className="price-old-label">INVESTIMENTO ÚNICO</div><div className="price"><small>R$</small>27<span>,00</span></div><div className="price-payment">Pagamento único. Sem mensalidade.</div><a className="button button-primary price-button" href={checkoutUrl} target="_blank" rel="noreferrer">QUERO MEU BRINCATÓRIO <ArrowRight size={18}/></a><div className="secure-points"><span><LockKeyhole/> Compra protegida</span><span><Download/> Acesso digital após aprovação</span><span><ShieldCheck/> Garantia de 7 dias</span></div></div>
    </div></section>
    <section className="delivery-section section-wrap"><div className="delivery-icon"><Printer size={30}/></div><div><div className="section-kicker">SIMPLES ASSIM</div><h2>Do digital para a<br/><span>brincadeira de verdade.</span></h2><p>Após a confirmação do pagamento e a liberação do acesso, você recebe as orientações para acessar os arquivos pelo Google Drive. Escolha o que deseja usar, imprima quando quiser e comece a brincar.</p></div><div className="delivery-steps"><div><span>01</span><b>Faça sua compra</b><small>Pagamento único e protegido.</small></div><div><span>02</span><b>Receba o acesso</b><small>Orientações após a aprovação.</small></div><div><span>03</span><b>Escolha e imprima</b><small>Use as atividades no seu ritmo.</small></div></div></section>
    <section className="guarantee-section"><div className="guarantee-seal"><ShieldCheck size={38}/><span>7 DIAS</span><small>DE GARANTIA</small></div><div><div className="section-kicker">SUA COMPRA COM TRANQUILIDADE</div><h2>Você tem 7 dias<br/><span>de garantia.</span></h2><p>Você pode conhecer o material com tranquilidade. A compra conta com garantia de 7 dias, conforme as condições aplicáveis.</p></div></section>
    <section className="faq-section section-wrap" id="duvidas"><div className="section-kicker">AINDA TEM DÚVIDAS?</div><h2>Perguntas <span>frequentes.</span></h2><div className="faq-list">{faqs.map(([q,a],i) => <article className={openFaq===i?'faq-item faq-active':'faq-item'} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={19}/></button>{openFaq===i && <p>{a}</p>}</article>)}</div></section>
    <section className="final-cta"><div className="final-spark">✳</div><h2>Sua criança merece brincar de verdade.<br/><span>E você merece uma tarde sem culpa.</span></h2><p className="final-cta-lead">Junte-se às mães que já têm a resposta certa na mão — sem briga, sem tela, sem culpa.</p><a className="button button-dark" href="https://33e6a400-0935-4772-b839-7d12dc0daf82.frame.claudeusercontent.com/_f/1795566618-596a/#comprar" target="_blank" rel="noreferrer">Quero o BRINCATÓRIO agora — R$27 <ArrowRight size={18}/></a></section>
    <footer className="site-footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">B<span>!</span></span><span>BRINCA<span>TÓRIO</span></span></a><p>Brincar junto é criar lembranças.</p><div className="footer-legal">Produto digital. Acesso disponibilizado após confirmação do pagamento e liberação pela plataforma de entrega.</div><small>© {new Date().getFullYear()} BRINCATÓRIO. Todos os direitos reservados.</small></footer>
  </main>
}