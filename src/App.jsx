import { useState } from 'react';
import * as D from './data.js';

const Check = ({ c = '#C9A45C', s = 20 }) => (
  <svg aria-hidden="true" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nofl"><path d="M20 6 9 17l-5-5" /></svg>
);
const Cta = ({ href = '#inversion', children, cls = '' }) => <a href={href} className={`btn ${cls}`}>{children}</a>;
const Head = ({ eyebrow, title, children, light }) => (
  <div className="head">
    <p className={`eyebrow ${light ? 'acc' : ''}`}>{eyebrow}</p>
    <h2>{title}</h2>
    {children}
  </div>
);

function Nav() {
  return (
    <header className="bg-dark nav-wrap">
      <nav className="wrap nav">
        <a href="#top" className="logo">AUREO</a>
        <div className="nav-links">
          {D.nav.map(([id, t]) => <a key={id} href={`#${id}`}>{t}</a>)}
          <Cta cls="sm">Quiero mi cupo</Cta>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-dark">
      <div className="wrap hero">
        <div className="hero-copy">
          <p className="badge"><span className="dot pulse" />Cohorte #19 · Inicia el 18 de noviembre</p>
          <h1>Diseña tu ruta de inversión y haz tu primera inversión con criterio.</h1>
          <p className="lead">Un programa práctico y sin tecnicismos para tomar control de tus finanzas, entender las alternativas que existen en Colombia y el mundo, y empezar a construir patrimonio para dormir más tranquilo.</p>
          <div className="row">
            <Cta cls="lg">Quiero mi cupo →</Cta>
            <a href={D.WA} className="btn ghost lg">Hablar con el equipo</a>
          </div>
          <div className="row chips">
            {D.chips.map((c) => <span key={c} className="chip">{c}</span>)}
            <span className="chip gold">+4.000 personas capacitadas</span>
          </div>
        </div>
        <aside className="panel">
          <div className="between">
            <div>
              <p className="eyebrow acc">Tu ruta de inversión</p>
              <p className="panel-title">De tu primera inversión a tu cifra mágica</p>
            </div>
            <span className="tag">Ilustrativo</span>
          </div>
          <svg role="img" aria-label="Curva ascendente de patrimonio con tres hitos: primera inversión, plan de aportes y tu cifra mágica" viewBox="0 0 400 200" className="curve">
            {[50, 100, 150].map((y) => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#2A4C3D" strokeDasharray="3 5" />)}
            <path d="M12 172 C 80 168, 140 156, 200 124 S 320 46, 384 22 L 384 180 L 12 180 Z" fill="#C9A45C" fillOpacity="0.1" />
            <path d="M12 172 C 80 168, 140 156, 200 124 S 320 46, 384 22" fill="none" stroke="#C9A45C" strokeWidth="3" strokeLinecap="round" />
            {[[62, 167, '#C9A45C', 11, 5], [200, 124, '#C9A45C', 11, 5], [384, 22, '#9ED2B4', 14, 6]].map(([x, y, c, r1, r2]) => (
              <g key={x}><circle cx={x} cy={y} r={r1} fill={c} fillOpacity="0.22" /><circle cx={x} cy={y} r={r2} fill={c} /></g>
            ))}
            <g fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#F4EFE7">
              <text x="50" y="146">Primera inversión</text>
              <text x="212" y="140">Plan de aportes</text>
              <text x="366" y="27" textAnchor="end" fill="#9ED2B4" fontWeight="700">Tu cifra mágica</text>
            </g>
            <g fontFamily="Inter, sans-serif" fontSize="11" fill="#9FB5A9">
              <text x="12" y="197">Hoy</text>
              <text x="388" y="197" textAnchor="end">Libertad financiera</text>
            </g>
          </svg>
          <p className="mix-title">Un portafolio diversificado en 5 tipos de inversión</p>
          <div className="bar" aria-hidden="true">{D.mix.map(([c, w]) => <span key={c} style={{ flex: `${w} 1 0`, background: c }} />)}</div>
          <ul className="legend">
            {D.mix.map(([c, , t, d]) => (
              <li key={t}><span aria-hidden="true" className="sw" style={{ background: c }} /><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

const Stats = () => (
  <section className="bg-mid">
    <div className="wrap stats">
      <div className="stat"><strong>73%</strong><span>de los colombianos no saben dónde invertir</span></div>
      <div className="stat"><strong>1 de 10</strong><span>trabajadores formales invierte activamente</span></div>
      <p className="stat-text">El problema no es la falta de opciones. Es el ruido. Este programa te da una ruta clara y simple para tomar tus primeras decisiones.</p>
    </div>
  </section>
);

const ForYou = () => (
  <section id="para-quien" className="wrap sec">
    <Head eyebrow="Antes de inscribirte" title="Lo diseñamos para quien quiere tomar el control, no para quien busca atajos." />
    <div className="row stretch">
      <div className="card-lg white grow">
        <div className="between wrapflex">
          <h3 className="h3-lg">Es para ti si…</h3>
          <span className="pill-green">Te identificas con 2 o más</span>
        </div>
        <div className="row">
          {D.forYou.map(([h, d]) => (
            <div key={h} className="mini">
              <span aria-hidden="true" className="ico"><Check c="#2E7D5B" s={22} /></span>
              <strong>{h}</strong><span>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-lg dark side">
        <h3 className="h3-lg">No es para ti si…</h3>
        {D.notForYou.map((t) => (
          <div key={t} className="no">
            <span aria-hidden="true" className="x"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E08A7A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg></span>
            <span>{t}</span>
          </div>
        ))}
        <div className="callout"><p>Aquí no hay fórmulas mágicas: hay criterio, disciplina y tiempo.</p></div>
      </div>
    </div>
  </section>
);

const Transform = () => (
  <section className="tf-sec">
    <div className="wrap-box dark-box">
      <div className="between wrapflex end">
        <Head light eyebrow="La transformación" title="Del ruido a una ruta de inversión clara en 9 sesiones." />
        <div className="timeline"><span>Hoy</span><span aria-hidden="true" className="track"><span /></span><span className="acc">28 ene</span></div>
      </div>
      <div className="col">
        {D.transform.map(([b, a], i) => (
          <div key={i} className="tf-row">
            <div className="tf-before"><span className="num">{String(i + 1).padStart(2, '0')}</span><span>{b}</span></div>
            <span aria-hidden="true" className="arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E3B2F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            <div className="tf-after"><Check c="#2E7D5B" /><strong>{a}</strong></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Program = () => (
  <section id="programa" className="bg-sand">
    <div className="wrap sec">
      <div className="between wrapflex end">
        <Head eyebrow="Programa y fechas" title="9 sesiones hacia la tranquilidad financiera.">
          <p className="sub">Cubrimos todos los activos disponibles en Colombia y el mundo, en el orden en que los necesitas para armar tu portafolio.</p>
        </Head>
        <p className="range">18 nov 2026 → 28 ene 2027</p>
      </div>
      <div className="row">
        {D.sessions.map((s, i) => (
          <article key={s.title} className="session">
            <div className="between"><span className="sn">SESIÓN {String(i + 1).padStart(2, '0')}</span><span className="date">{s.date}</span></div>
            <div><h3>{s.title}</h3><p className="it">{s.sub}</p></div>
            <ul className="bul">
              {s.items.map(([k, v]) => <li key={k}><span aria-hidden="true" className="bd" /><span><strong>{k}</strong> · {v}</span></li>)}
            </ul>
            <p className="outcome">{s.outcome}</p>
          </article>
        ))}
      </div>
      <article className="workshop">
        <div className="w-col">
          <div className="row center"><span className="sn acc">SESIÓN 09</span><span className="date gold">28 ene</span></div>
          <h3 className="w-title">Taller: construyendo mi portafolio de inversión</h3>
          <p className="soft">De la teoría a la primera inversión real, paso a paso.</p>
        </div>
        <div className="w-col">
          <p className="eyebrow acc">Pasos del taller</p>
          {D.workshop.steps.map((t, i) => <div key={t} className="step"><strong>{i + 1}</strong><span>{t}</span></div>)}
        </div>
        <div className="w-col">
          <p className="eyebrow acc">Activos que trabajamos</p>
          {D.workshop.assets.map((t) => <span key={t} className="asset">{t}</span>)}
        </div>
        <div className="result">
          <p className="eyebrow acc">Resultado</p>
          <p>Terminas con tu portafolio diseñado, tu primera inversión ejecutada y un plan de aportes mensuales activado.</p>
        </div>
      </article>
    </div>
  </section>
);

const Includes = () => (
  <section id="incluye" className="wrap sec">
    <Head eyebrow="Qué incluye" title="Todo lo que necesitas para pasar de la teoría a la práctica." />
    <div className="row">
      {D.includes.map(([t, d], i) => (
        <div key={t} className="inc"><span className="sn">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div>
      ))}
    </div>
  </section>
);

const About = () => (
  <section className="wrap sec about-sec">
    <div className="about">
      <div className="photo">
        <img src="/luis-felipe.png" alt="Luis Felipe Giraldo hablando en un evento" />
        <span className="photo-tag">15 años enseñando a invertir</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">Quién te acompaña</p>
        <h2 className="name">Luis Felipe Giraldo</h2>
        <p className="role">Exbanquero de inversión e inversionista · Grandes Patrimonios</p>
        <p className="bio">Crecí en una familia de empresarios y me crié en Atlanta, donde empecé a trabajar en el mundo financiero. Pero lo que realmente me ha apasionado en los últimos 15 años ha sido ayudar a que cualquier persona pueda aprender, empezar a invertir y, como diría mi madre, “dormir tranquila”.</p>
        <p className="quote">“Cuando controlas tus números y aseguras tu futuro financiero, nada te robará el sueño.”</p>
        <div className="row center">
          <a href="https://www.linkedin.com/in/luisfelipegiraldo/" className="btn dark-btn sm">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>Ver LinkedIn
          </a>
          <span className="muted">Programa creado y operado por Grandes Patrimonios × Zetta Ventures</span>
        </div>
      </div>
    </div>
    <div className="numbers">
      {D.authorStats.map(([n, t]) => <div key={n} className="stat"><strong>{n}</strong><span>{t}</span></div>)}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-sand">
    <div className="wrap sec">
      <Head eyebrow="Impacto real" title="Lo que dicen quienes ya lo vivieron." />
      <div className="row">
        {D.testimonials.map(([ini, name, role, text]) => (
          <figure key={name} className="quote-card">
            <span aria-hidden="true" className="qm">“</span>
            <blockquote>{text}</blockquote>
            <figcaption><span aria-hidden="true" className="av">{ini}</span><span className="col2"><strong>{name}</strong><span>{role}</span></span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="inversion" className="wrap sec">
    <Head eyebrow="Inversión" title="La mejor primera inversión es entender dónde poner tu dinero." />
    <div className="row stretch">
      <div className="price card-lg dark">
        <div className="between wrapflex"><span className="eyebrow acc">Cohorte #19 · Aprende a invertir</span><span className="date gold">Pocos cupos disponibles</span></div>
        <div><strong className="amount">$1.500.000</strong><span className="soft block">COP · pago único</span></div>
        <div className="callout tight"><strong className="acc">$500.000 van a tus primeras inversiones</strong><span>No es solo teoría: parte de tu inscripción se destina a hacer tus primeras inversiones con nosotros, para que entiendas el proceso, las entidades y cómo hacerlo de principio a fin.</span></div>
        <div className="col">{D.priceList.map((p) => <div key={p} className="pl"><Check /><span>{p}</span></div>)}</div>
        <a href={D.WA} className="btn lg block">Quiero mi cupo →</a>
        <p className="note">Te respondemos por WhatsApp con los pasos de inscripción y pago.</p>
      </div>
      <div className="aside-cards">
        <div className="info"><h3>Por qué ahora</h3><p>Cada mes que tu dinero sigue quieto, el interés compuesto trabaja para alguien más. Empiezas en noviembre y en enero ya tienes tu portafolio y tu plan de aportes activo para arrancar el año.</p></div>
        <div className="info"><h3>¿Conoces a alguien que lo necesita?</h3><p>Si un amigo o familiar necesita tomar control de sus finanzas o empezar a construir patrimonio para dormir más tranquilo, lo diseñamos para él. Compártele esta página.</p></div>
      </div>
    </div>
  </section>
);

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="dudas" className="bg-sand">
      <div className="wrap narrow sec">
        <Head eyebrow="Dudas" title="Esto es lo que más nos preguntan." />
        <div className="col">
          {D.faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="faq">
                <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{q}</span><span aria-hidden="true" className="pm">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p id={`faq-${i}`}>{a}</p>}
              </div>
            );
          })}
        </div>
        <p className="muted-dark">¿Otra pregunta? <a href={D.WA}>Habla con el equipo por WhatsApp</a></p>
      </div>
    </section>
  );
}

const Closing = () => (
  <section className="bg-dark">
    <div className="wrap closing">
      <p className="eyebrow acc">Cohorte #19 · 18 nov 2026 — 28 ene 2027</p>
      <h2>El 28 de enero puedes tener tu portafolio diseñado y tu primera inversión hecha.</h2>
      <p className="lead center-t">O puedes seguir esperando a entender el mercado por tu cuenta. Nosotros te damos la ruta.</p>
      <a href={D.WA} className="btn lg">Quiero mi cupo →</a>
      <p className="note">$1.500.000 COP · incluye $500.000 para tus primeras inversiones · 9 sesiones en vivo y grabadas · sesiones personalizadas</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="foot">
    <div className="wrap foot-in">
      <div className="between wrapflex gap40">
        <div className="fcol"><span className="logo big">AUREO</span><span className="muted">Creado y operado por Grandes Patrimonios × Zetta Ventures</span><a href="https://aureocapital.co" className="acc-link">aureocapital.co</a></div>
        <div className="fcol"><strong>Luis Felipe Giraldo</strong><span className="muted">Grandes Patrimonios · +57 312 743 3687</span><a href="mailto:luis.giraldo@grandespatrimonios.co" className="mint">luis.giraldo@grandespatrimonios.co</a></div>
        <div className="fcol"><strong>Alejandra López de Mesa</strong><span className="muted">Zetta Ventures · +57 301 457 1041</span><a href="mailto:alejandra@zettaventures.co" className="mint">alejandra@zettaventures.co</a></div>
      </div>
      <p className="legal">Nuestro contenido es orientación educativa y no constituye una recomendación profesional para realizar inversiones. © 2026 Aureo. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <>
      <Nav /><Hero /><Stats /><ForYou /><Transform /><Program /><Includes /><About /><Testimonials /><Pricing /><Faq /><Closing /><Footer />
    </>
  );
}
