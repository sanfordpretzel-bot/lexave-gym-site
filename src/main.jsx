import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, CheckCircle2, Dumbbell, Shield, HeartPulse, Users, Search, CalendarDays, ChevronRight, Star, Menu, X } from 'lucide-react';
import './styles.css';

const services = [
  { title: 'One-on-One Personal Training', badge: 'Private coaching', description: 'Personalized 30, 45, or 60-minute sessions built around your goals, body, schedule, and experience level.', bullets: ['Strength, mobility, conditioning', 'Certified, experienced trainers', 'No membership required'], icon: Dumbbell },
  { title: 'Boxing for Fitness', badge: 'Technique + conditioning', description: 'Learn real boxing fundamentals while building confidence, athleticism, agility, and cardio fitness.', bullets: ['Beginner-friendly', 'Access to a pro boxing ring', 'Great for stress relief and conditioning'], icon: Shield },
  { title: "Rock Steady Boxing for Parkinson’s", badge: 'Specialized program', description: 'A non-contact boxing-based fitness curriculum designed to help people with Parkinson’s improve quality of life.', bullets: ['1-hour assessment required', '$100 assessment fee', 'Caregiver support welcomed when needed'], icon: HeartPulse },
  { title: 'Partner & Small Group Training', badge: 'Train together', description: 'Train with a partner or small group for accountability, motivation, and a lower per-person session cost.', bullets: ['Partner pricing available', 'Shared goals and energy', 'Structured sessions'], icon: Users }
];

const pricing = [
  { type: 'Individual', duration: '30 min', price: '$65' }, { type: 'Individual', duration: '45 min', price: '$95' }, { type: 'Individual', duration: '60 min', price: '$120' },
  { type: 'Partner', duration: '30 min', price: '$85' }, { type: 'Partner', duration: '45 min', price: '$124' }, { type: 'Partner', duration: '60 min', price: '$156' }
];

const trainers = [
  {
    name: 'Nina Preizler', role: 'Owner Operator', initials: 'NP', url: 'https://lexavegym.com/team/nina-preizler/',
    summary: 'Owner of Lexington Avenue Gym and Rock Steady Boxing Westchester; 25+ years in fitness, former NCAA track and cross-country athlete, and certified Parkinson’s fitness specialist.',
    tags: ['Owner', 'Rock Steady Boxing', 'Parkinson’s fitness']
  },
  {
    name: 'Percy Thomas', role: 'Personal Trainer', initials: 'PT', url: 'https://lexavegym.com/team/percy-thomas/',
    summary: 'ACE-certified trainer with 30 years of experience across personal training, boxing, martial arts, flexibility, and Rock Steady Boxing.',
    tags: ['Boxing', 'Martial arts', 'Flexibility']
  },
  {
    name: 'Dr. Scott Schaeffer', role: 'Personal Trainer, Strength & Conditioning Specialist', initials: 'SS', url: 'https://lexavegym.com/team/scott-schaeffer/',
    summary: 'Doctor of Chiropractic and CSCS with 31 years of experience training athletes, beginners, and post-rehabilitation clients using biomechanics-driven programming.',
    tags: ['CSCS', 'Corrective exercise', 'Post-rehab']
  },
  {
    name: 'Mark McPherson', role: 'Boxing Trainer', initials: 'MM', url: 'https://lexavegym.com/team/mark-mcpherson/',
    summary: 'Professional boxing veteran with 30 years of experience, a 20–3 record, Golden Gloves and Spanish Gloves finalist credentials, and major-event experience.',
    tags: ['Pro boxing', 'Technique', 'Conditioning']
  },
  {
    name: 'Tommy LaMotta', role: 'Boxing Trainer', initials: 'TL', url: 'https://lexavegym.com/team/tommy-lamotta/',
    summary: 'Former amateur boxer with 20+ years in boxing, strength and conditioning, speed and agility, personal training, and Parkinson’s-focused fitness.',
    tags: ['Boxing', 'Speed & agility', 'Parkinson’s']
  },
  {
    name: 'Kris Geier', role: 'Personal Trainer', initials: 'KG', url: 'https://lexavegym.com/team/kris-geier/',
    summary: 'Exercise Science graduate and ACSM-certified Exercise Physiologist with nearly two decades of experience in stability, weight management, sports conditioning, and Rock Steady Boxing.',
    tags: ['ACSM', 'Strength', 'Rock Steady']
  },
  {
    name: 'Ernie Biele', role: 'Personal Trainer', initials: 'EB', url: 'https://lexavegym.com/team/ernie-biele/',
    summary: 'IFA-certified personal trainer and longtime coach with experience across football, softball, tennis, Krav Maga, boxing, weightlifting, and full-body training.',
    tags: ['IFA certified', 'Coaching', 'Full-body training']
  },
  {
    name: 'Daniel Linden', role: 'Personal Trainer', initials: 'DL', url: 'https://lexavegym.com/team/wesley-nyambi/',
    summary: 'NASM-certified personal trainer and corrective exercise specialist who blends evidence-based strength training with endurance, outdoor fitness, and Rock Steady Boxing support.',
    tags: ['NASM', 'Corrective exercise', 'Endurance']
  },
  {
    name: 'Julio Hernández', role: 'Boxing Trainer', initials: 'JH', url: 'https://lexavegym.com/team/julio-hernandez/',
    summary: 'Technical boxing coach with 10+ years in the sport, amateur boxing experience in NYC, 2012 New York Golden Gloves experience, and fluency in Spanish.',
    tags: ['Technical boxing', 'Golden Gloves', 'Spanish speaking']
  },
  {
    name: 'Sergio Chicon', role: 'Boxing Trainer', initials: 'SC', url: 'https://lexavegym.com/team/sergio-chicon/',
    summary: 'Energetic boxing trainer with 20+ years in boxing and 13 years in personal and group fitness training, blending intensity, conditioning, and humor.',
    tags: ['Boxing', 'Group fitness', 'Conditioning']
  },
  {
    name: 'Eddie Mercedes', role: 'Boxing Trainer', initials: 'EM', url: 'https://lexavegym.com/team/mark-taino/',
    summary: 'Former professional boxer with 20+ years of experience, 112 amateur and professional bouts, and a high-intensity approach to boxing, endurance, and mental toughness.',
    tags: ['Former pro boxer', 'HIIT', 'Endurance']
  },
  {
    name: 'John Codella', role: 'Personal Trainer', initials: 'JC', url: 'https://lexavegym.com/team/john-codella/',
    summary: 'Certified personal trainer and Precision Nutrition Coach with experience training young athletes, post-surgical clients, and people seeking lasting strength and health habits.',
    tags: ['Nutrition', 'Kettlebell', 'Pre/postnatal']
  }
];

const faqs = [
  { q: 'What is LexAve Gym?', a: 'LexAve Gym is a personal training and boxing gym in Mount Kisco, New York offering private training, boxing fitness, partner training, kids boxing, and Rock Steady Boxing for Parkinson’s.' },
  { q: 'Does LexAve Gym require a membership?', a: 'No. Sessions are sold a la carte or in packages, so clients can train without paying a monthly membership fee.' },
  { q: 'Is boxing good for beginners?', a: 'Yes. Boxing for fitness can be adapted for beginners and focuses on footwork, coordination, conditioning, confidence, and safe technique.' },
  { q: 'How do I start Rock Steady Boxing for Parkinson’s?', a: 'New participants complete a one-hour assessment with RSB Certified Trainer and owner Nina Preizler. The assessment is $100 and does not obligate you to join.' },
  { q: 'Where is LexAve Gym located?', a: 'LexAve Gym is located at 136 Radio Circle Drive, Mount Kisco, NY 10549, serving Mount Kisco, Bedford Hills, Katonah, Chappaqua, Armonk, Millwood, and nearby Westchester communities.' }
];

function Button({ children, variant = 'solid', className = '', href = '#' }) { return <a href={href} className={`btn ${variant === 'outline' ? 'btnOutline' : 'btnSolid'} ${className}`}>{children}</a>; }
function Card({ children, className = '' }) { return <div className={`card ${className}`}>{children}</div>; }
function SectionHeader({ eyebrow, title, subtitle, dark = false }) { return <div className="sectionHeader"><p className="eyebrow">{eyebrow}</p><h2 className={dark ? 'darkTitle' : ''}>{title}</h2>{subtitle && <p className={dark ? 'darkSub' : ''}>{subtitle}</p>}</div>; }
function Nav() { const [open, setOpen] = useState(false); const links = ['Programs', 'Parkinson’s', 'Pricing', 'FAQ', 'Contact']; return <header className="nav"><div className="navInner"><a href="#top" className="brand"><div className="logo">LA</div><div><p>LexAve Gym</p><span>Mount Kisco Boxing + Training</span></div></a><nav className="navLinks">{links.map(l => <a key={l} href={`#${l.toLowerCase().replace('’','').replace(' ','-')}`}>{l}</a>)}</nav><div className="navCtas"><Button variant="outline" href="tel:19142412657">Call 914-241-2657</Button><Button href="#contact">Book Intro</Button></div><button className="menuBtn" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobileMenu">{links.map(l => <a key={l} href={`#${l.toLowerCase().replace('’','').replace(' ','-')}`} onClick={()=>setOpen(false)}>{l}</a>)}<Button href="#contact">Book Intro</Button></div>}</header>; }

function App() {
  const schema = useMemo(() => ({ '@context': 'https://schema.org', '@type': 'HealthClub', name: 'LexAve Gym', description: "Personal training and boxing gym in Mount Kisco, NY offering one-on-one personal training, boxing for fitness, partner training, kids boxing, and Rock Steady Boxing for Parkinson's.", address: { '@type': 'PostalAddress', streetAddress: '136 Radio Circle Drive', addressLocality: 'Mount Kisco', addressRegion: 'NY', postalCode: '10549' }, telephone: '+1-914-241-2657', openingHours: 'Mo-Su 05:00-22:00', areaServed: ['Mount Kisco','Bedford Hills','Katonah','Chappaqua','Armonk','Millwood','Westchester County'], knowsAbout: ['Personal training','Boxing fitness','Rock Steady Boxing','Parkinson\'s fitness','Partner training','Kids boxing'] }), []);
  return <div id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Nav />
    <section className="hero"><div className="heroBg" /><div className="container heroGrid"><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55}}><div className="pill"><Star size={16}/> No membership fees. Private coaching. Real results.</div><h1>Private personal training and boxing in Mount Kisco.</h1><p className="heroText">LexAve Gym helps adults, kids, beginners, athletes, and people with Parkinson’s build confidence, strength, balance, and conditioning through expert-led training.</p><div className="heroButtons"><Button href="#contact">Book a first session <ChevronRight size={20}/></Button><Button variant="outline" href="tel:19142412657">Call 914-241-2657</Button></div><div className="heroFacts"><span><MapPin size={16}/> Mount Kisco, NY</span><span><Clock size={16}/> 5am–10pm daily</span><span><CheckCircle2 size={16}/> A la carte sessions</span></div></motion.div><motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.65,delay:.1}}><Card className="heroCard"><div className="visual"><p>Built for search + conversion</p><h3>Train. Box. Move better. Feel stronger.</h3><div>{['Pro boxing ring','23-yard turf','New equipment','RSB program'].map(x=><span key={x}>{x}</span>)}</div></div><div className="stats"><div><b>20+</b><span>years serving Westchester</span></div><div><b>$65+</b><span>individual sessions</span></div><div><b>0</b><span>membership fees</span></div></div></Card></motion.div></div></section>
    <section id="programs" className="section"><div className="container"><SectionHeader eyebrow="Programs" title="Choose the training path that fits your body and your goal." subtitle="Clear program pages help humans decide faster and help search engines and AI assistants understand exactly what LexAve Gym offers."/><div className="serviceGrid">{services.map(s=>{const Icon=s.icon; return <Card key={s.title} className="serviceCard"><div className="icon"><Icon/></div><span className="badge">{s.badge}</span><h3>{s.title}</h3><p>{s.description}</p><ul>{s.bullets.map(b=><li key={b}><CheckCircle2 size={20}/>{b}</li>)}</ul></Card>})}</div></div></section>
    <section id="parkinsons" className="section light"><div className="container split"><div><p className="eyebrow">Rock Steady Boxing</p><h2>Boxing-based fitness for people with Parkinson’s.</h2><p>LexAve Gym’s Parkinson’s program uses non-contact boxing drills to support strength, stamina, coordination, flexibility, balance, and confidence.</p><div className="callout"><b>Getting started</b><p>New participants schedule a one-hour assessment with RSB Certified Trainer and owner Nina Preizler. The assessment fee is $100 and there is no obligation to join.</p></div></div><div className="miniGrid">{[['Motor skills','Repetitive boxing patterns can support coordination and movement practice.'],['Balance','Footwork and weight shifting help train stability in a supervised setting.'],['Flexibility','Rotational and reaching movements help keep the body moving in multiple planes.'],['Stamina','Boxing-style conditioning can support endurance and cardiovascular fitness.']].map(([t,tx])=><Card key={t} className="mini"><HeartPulse/><h3>{t}</h3><p>{tx}</p></Card>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeader eyebrow="Why LexAve" title="A private gym experience, not a crowded big-box membership." subtitle="This section intentionally states the differentiators clearly so buyers, Google, and LLMs can extract the same answer."/><div className="threeGrid">{[['No membership fees','Pay for the coaching you use through single sessions or packages.'],['Purpose-built facility','Pro boxing ring, 23-yard turf, kettlebells, slam balls, wall balls, box jumps, and updated training equipment.'],['Experienced team','A deep bench of personal trainers, boxing trainers, and specialized Parkinson’s program leadership.']].map(([t,tx])=><Card key={t} className="why"><CheckCircle2/><h3>{t}</h3><p>{tx}</p></Card>)}</div></div></section>
    <section id="pricing" className="section dark"><div className="container"><SectionHeader dark eyebrow="Pricing" title="Simple session pricing. No monthly membership." subtitle="Start with a single session or build consistency with a package. Partner pricing is divided by two people."/><div className="priceGrid">{pricing.map(p=><Card key={p.type+p.duration} className="price"><span>{p.type}</span><b>{p.duration}</b><strong>{p.price}</strong></Card>)}</div><p className="note">24-hour cancellation policy: same-day cancellation or no-show may incur a 100% charge.</p></div></section>
    <section id="team" className="section"><div className="container"><SectionHeader eyebrow="Team" title="Meet the LexAve coaching team." subtitle="Keep the site single-page for conversion, but give each trainer enough visibility to build trust and enough text to be found by Google and AI assistants."/><div className="trainerGrid">{trainers.map(t=><a key={t.name} className="trainerCard" href={t.url} target="_blank" rel="noreferrer" aria-label={`Read more about ${t.name}`}><div className="trainerPhoto"><span>{t.initials}</span></div><div className="trainerBody"><p className="trainerRole">{t.role}</p><h3>{t.name}</h3><p>{t.summary}</p><div className="trainerTags">{t.tags.map(tag=><span key={tag}>{tag}</span>)}</div><strong>View profile</strong></div></a>)}</div></div></section>
    <section id="faq" className="section light"><div className="container narrow"><SectionHeader eyebrow="FAQ" title="Answers people and AI assistants can actually use."/><div className="faqList">{faqs.map(f=><Card key={f.q} className="faq"><h3><Search size={20}/>{f.q}</h3><p>{f.a}</p></Card>)}</div></div></section>
    <section id="contact" className="section"><div className="container contact"><div><p className="eyebrow white">Start here</p><h2>Book a first session or Parkinson’s assessment.</h2><p>Tell the team your goal, preferred schedule, and whether you are interested in personal training, boxing, partner training, kids boxing, or Rock Steady Boxing for Parkinson’s.</p><div className="heroButtons"><Button variant="outline" href="mailto:info@lexavegym.com?subject=First%20session%20request"><CalendarDays size={20}/> Request appointment</Button><Button variant="outline" href="tel:19142412657"><Phone size={20}/> 914-241-2657</Button></div></div><div className="contactPanel"><h3>LexAve Gym</h3><p><MapPin/> 136 Radio Circle Drive, Mount Kisco, NY 10549</p><p><Clock/> Monday–Sunday, 5:00am–10:00pm</p><p><Phone/> 914-241-2657</p><div><b>Service area</b><span>Mount Kisco, Bedford Hills, Katonah, Chappaqua, Armonk, Millwood, and greater Westchester County.</span></div></div></div></section>
    <footer>Sample redesigned website concept for LexAve Gym. Replace buttons with real booking links before publishing.</footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
