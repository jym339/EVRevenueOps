
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Users, 
  ChevronDown,
  PhoneCall,
  Clock,
  Settings,
  Calculator,
  RefreshCcw,
  AlertTriangle,
  Globe
} from 'lucide-react';

// --- Localization Content ---
const translations = {
  en: {
    nav: {
      problem: "The Problem",
      calculator: "ROI Calculator",
      solution: "The System",
      howItWorks: "How It Works",
      cta: "Book Install Audit"
    },
    hero: {
      badge: "Exclusively for EV Charging Installers",
      h1: "Predictable Installation Volume Built on Automation.",
      highlight: "Built on Automation",
      p: "We install revenue infrastructure for EV contractors. No vague marketing—just qualified installation opportunities delivered straight to your calendar.",
      ctaPrimary: "Book a Strategy Call",
      ctaSecondary: "Calculate Lost Revenue",
      dashboardTitle: "Install Pipeline Dashboard",
      dashboardStatus: "System Live",
      dashboardData: [
        { name: 'Smith Residential (L2)', status: 'Qualified', value: '$1,800' },
        { name: 'Metro Plaza (L3/DCFC)', status: 'Ready to Book', value: '$45,000' },
        { name: 'Dead Lead Reactivation', status: 'Re-engaged', value: '$12,500' }
      ]
    },
    calculator: {
      title: "The Cost of Slow Response",
      p: "EV leads are highly volatile. If you aren't the first to respond within 5 minutes, you are likely handing thousands in revenue to your local competitors.",
      inquiries: "Monthly Inquiries",
      jobValue: "Average Job Value ($)",
      lostJobsLabel: "Estimated Monthly Lost Jobs",
      lostJobsDesc: "Based on a 40% 'Lead Decay' rate.",
      leakedRevLabel: "Total Leaked Revenue",
      leakedRevDesc: "Monthly revenue potentially lost.",
      cta: "Plug the Leaks Now"
    },
    problem: {
      h2: "Why Most EV Installers Struggle to Scale",
      p: "The demand for EV infrastructure is exploding, yet installers are losing revenue through operational cracks.",
      items: [
        { title: "Leaking Pipelines", desc: "70% of inquiries go unanswered for 2+ hours. If you don't reply in 5 minutes, you've lost the job." },
        { title: "Tire Kicker Burnout", desc: "Spending hours with 'leads' who don't have budget or authority to move forward." },
        { title: "Admin Gridlock", desc: "Owners are stuck manually scheduling instead of focusing on high-level projects." }
      ]
    },
    solution: {
      h2: "Installation Revenue Infrastructure.",
      p: "We build the back-end systems that capture, qualify, and book EV installation jobs without you lifting a finger.",
      items: [
        { title: "Automated Inquiry Handling", desc: "Instant response across SMS and Email so you never miss a lead." },
        { title: "Qualification Engine", desc: "We filter out prospects without proper site requirements or budget." },
        { title: "Direct Calendar Booking", desc: "Qualified prospects book site visits directly into your calendar." },
        { title: "Dead Lead Revival", desc: "We re-engage old inquiries to pull out missed jobs from months ago." }
      ],
      coreTitle: "The Efficiency Core",
      reactivation: "Lead Reactivation",
      adminSavings: "Admin Savings",
      pipelineValue: "Avg Pipeline Value"
    },
    howItWorks: {
      h2: "The 3-Step Revenue Engine",
      p: "How we turn local demand into booked installation jobs.",
      steps: [
        { step: "01", title: "System Implementation", desc: "We deploy our proprietary 'Inquiry Capture' architecture on your existing web assets and Google profile." },
        { step: "02", title: "Automated Qualification", desc: "Every lead is instantly engaged by our system. Only the serious ones with valid projects reach your inbox." },
        { step: "03", title: "Installation Booking", desc: "Prospects select an available time for a site visit. Your crews show up, quote, and close the job." }
      ]
    },
    revival: {
      badge: "Feature Spotlight",
      h2: "Dead Lead Revival System",
      p: "Most installers sit on a goldmine of old inquiries. We don't let those go to waste.",
      bullet1: "We find every inquiry from the last 6 months.",
      bullet2: "Automated SMS sequences re-engage quiet prospects.",
      bullet3: "You only pay attention when they reply and book.",
      box: "Automatically re-activate the hidden revenue already sitting in your database.",
      boxLabel: "Automated Reactivation Architecture"
    },
    faq: {
      h2: "Frequently Asked Questions",
      items: [
        { q: "Do you run ads?", a: "We can, but our focus is revenue infrastructure so every lead you get yields a higher return." },
        { q: "How fast are results?", a: "Deployment takes 10-14 days. Most see qualified bookings within the first week of going live." },
        { q: "Is this for commercial?", a: "Both. We have separate systems to qualify residential and high-value commercial projects." }
      ]
    },
    footer: {
      copy: "© 2024 EVRevenueOps Infrastructure Agency. Built for the Electrification Era."
    },
    finalCta: {
      h2: "Stop losing installs to operational friction.",
      p: "If you’re doing at least $50k/mo in EV volume and want to scale without increasing admin workload, we need to talk.",
      warning: "Warning: We only work with one partner per territory.",
      btn: "Book Your Revenue Audit",
      footer: "15 min discovery call • No sales pitch"
    }
  },
  fr: {
    nav: {
      problem: "Le Problème",
      calculator: "Calculateur ROI",
      solution: "Le Système",
      howItWorks: "Fonctionnement",
      cta: "Réserver un Audit"
    },
    hero: {
      badge: "Exclusivement pour les Installateurs de Bornes",
      h1: "Un Volume d'Installations Prévisible grâce à l'Automatisation.",
      highlight: "l'Automatisation",
      p: "Nous installons une infrastructure de revenus pour les électriciens EV. Pas de marketing vague—juste des opportunités qualifiées sur votre calendrier.",
      ctaPrimary: "Réserver un Appel Stratégique",
      ctaSecondary: "Calculer le Revenu Perdu",
      dashboardTitle: "Tableau de Bord des Installations",
      dashboardStatus: "Système Actif",
      dashboardData: [
        { name: 'Smith Résidentiel (L2)', status: 'Qualifié', value: '1 800 €' },
        { name: 'Centre Metro (L3/DCFC)', status: 'Prêt à réserver', value: '45 000 €' },
        { name: 'Réactivation Leads Dormants', status: 'Réengagé', value: '12 500 €' }
      ]
    },
    calculator: {
      title: "Le Coût d'une Réponse Lente",
      p: "Les prospects EV sont volatils. Si vous ne répondez pas en 5 minutes, vous offrez des milliers d'euros à vos concurrents locaux.",
      inquiries: "Demandes Mensuelles",
      jobValue: "Valeur Moyenne Chantier (€)",
      lostJobsLabel: "Chantiers Perdus Estimés",
      lostJobsDesc: "Basé sur un taux de perte de 40%.",
      leakedRevLabel: "Revenu Total Perdu",
      leakedRevDesc: "Revenu mensuel potentiellement perdu.",
      cta: "Arrêter les Pertes Maintenant"
    },
    problem: {
      h2: "Pourquoi les Installateurs EV Peinent à Passer à l'Échelle",
      p: "La demande explose, mais les installateurs perdent des revenus à cause de failles opérationnelles.",
      items: [
        { title: "Pipelines Percés", desc: "70% des demandes restent sans réponse pendant 2h+. Si vous ne répondez pas en 5 min, le chantier est perdu." },
        { title: "Épuisement Administratif", desc: "Passer des heures avec des 'curieux' qui n'ont ni budget ni autorité pour avancer." },
        { title: "Saturation Ops", desc: "Les patrons gèrent les rendez-vous manuellement au lieu de piloter des projets commerciaux." }
      ]
    },
    solution: {
      h2: "Infrastructure de Revenus d'Installation.",
      p: "Nous construisons les systèmes back-end qui captent, qualifient et réservent vos chantiers sans que vous n'ayez rien à faire.",
      items: [
        { title: "Gestion Automatisée", desc: "Réponse instantanée par SMS et Email pour ne jamais rater un prospect." },
        { title: "Moteur de Qualification", desc: "Nous filtrons les prospects sans pré-requis techniques ou budget suffisant." },
        { title: "Réservation Directe", desc: "Les prospects qualifiés prennent rendez-vous directement sur votre agenda." },
        { title: "Réactivation de Leads", desc: "Nous relançons vos anciennes demandes pour extraire des chantiers oubliés." }
      ],
      coreTitle: "Le Cœur d'Efficacité",
      reactivation: "Réactivation Leads",
      adminSavings: "Économie Admin",
      pipelineValue: "Valeur Moyenne Pipeline"
    },
    howItWorks: {
      h2: "Le Moteur de Revenus en 3 Étapes",
      p: "Comment nous transformons la demande locale en chantiers réservés.",
      steps: [
        { step: "01", title: "Implémentation Système", desc: "Nous déployons notre architecture de 'Capture de Demandes' sur vos actifs web existants et votre profil Google." },
        { step: "02", title: "Qualification Automatique", desc: "Chaque lead est instantanément contacté. Seuls les projets sérieux arrivent dans votre boîte mail." },
        { step: "03", title: "Réservation Chantier", desc: "Les prospects choisissent un créneau pour la visite. Vos équipes se déplacent, chiffrent et signent." }
      ]
    },
    revival: {
      badge: "Focus Fonctionnalité",
      h2: "Système de Réactivation de Leads",
      p: "La plupart des installateurs dorment sur une mine d'or. Nous ne laissons pas ces opportunités s'échapper.",
      bullet1: "Nous analysons chaque demande des 6 derniers mois.",
      bullet2: "Des séquences SMS automatisées relancent les prospects silencieux.",
      bullet3: "Vous n'intervenez que lorsqu'ils répondent et réservent.",
      box: "Réactivez automatiquement les revenus cachés dans votre base de données.",
      boxLabel: "Architecture de Réactivation Automatisée"
    },
    faq: {
      h2: "Questions Fréquentes",
      items: [
        { q: "Faites-vous de la publicité ?", a: "C'est possible, mais notre priorité est l'infrastructure de revenus pour que chaque lead soit rentable." },
        { q: "Quels sont les délais ?", a: "Le déploiement prend 10-14 days. La plupart voient des réservations dès la première semaine." },
        { q: "Est-ce pour le commercial ?", a: "Les deux. Nous avons des systèmes distincts pour qualifier le résidentiel et le tertiaire." }
      ]
    },
    footer: {
      copy: "© 2024 EVRevenueOps Agency. Conçu pour l'ère de l'électrification."
    },
    finalCta: {
      h2: "Arrêtez de perdre des chantiers par manque de structure.",
      p: "Si vous réalisez au moins 50k$/mois et souhaitez croître sans alourdir votre admin, parlons-nous.",
      warning: "Attention : Nous ne travaillons qu'avec un seul partenaire par territoire.",
      btn: "Réserver votre Audit de Revenus",
      footer: "Appel de 15 min • Sans pression commerciale"
    }
  }
};

const CALENDLY_URL = "https://calendly.com/immigreraucanada1/consultation-evrevenueops";

// --- Main App Component ---

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const t = translations[lang];

  const toggleLang = () => {
    setLang(l => l === 'en' ? 'fr' : 'en');
    setOpenFaqIndex(null); 
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  // Calculator Logic
  const [leads, setLeads] = useState(50);
  const [avgJob, setAvgJob] = useState(2500);
  const [lostJobs, setLostJobs] = useState(0);
  const [lostRevenue, setLostRevenue] = useState(0);

  useEffect(() => {
    const calculatedLost = Math.floor(leads * 0.4); 
    setLostJobs(calculatedLost);
    setLostRevenue(calculatedLost * avgJob);
  }, [leads, avgJob]);

  // Handle Localized Heading logic cleanly
  const renderHeroTitle = () => {
    const parts = t.hero.h1.split(t.hero.highlight);
    return (
      <>
        {parts[0]}
        <span className="text-emerald-600 whitespace-nowrap">{t.hero.highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-emerald-600 fill-emerald-600" />
            <span className="text-xl font-bold tracking-tight">EVRevenue<span className="text-emerald-600">Ops</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('problem')} className="hover:text-emerald-600 transition">{t.nav.problem}</button>
            <button onClick={() => scrollToSection('calculator')} className="hover:text-emerald-600 transition">{t.nav.calculator}</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-emerald-600 transition">{t.nav.solution}</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-emerald-600 transition">{t.nav.howItWorks}</button>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              <Globe className="h-4 w-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button 
              onClick={openCalendly}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition shadow-sm"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100">
                <span>{t.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                {renderHeroTitle()}
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                {t.hero.p}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={openCalendly}
                  className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition flex items-center justify-center shadow-lg shadow-emerald-200"
                >
                  {t.hero.ctaPrimary} <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('calculator')}
                  className="w-full sm:w-auto text-slate-700 font-semibold flex items-center justify-center hover:text-emerald-600 transition"
                >
                  <Calculator className="mr-2 h-5 w-5 text-emerald-600" /> {t.hero.ctaSecondary}
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 hidden lg:block">
               <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 transform rotate-1 relative z-20">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-slate-900 text-lg">{t.hero.dashboardTitle}</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full font-bold">{t.hero.dashboardStatus}</span>
                  </div>
                  <div className="space-y-4">
                     {t.hero.dashboardData.map((row, idx) => (
                       <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800">{row.name}</span>
                            <span className="text-xs text-slate-500 font-medium">{row.status}</span>
                          </div>
                          <span className="font-black text-emerald-600">{row.value}</span>
                       </div>
                     ))}
                  </div>
               </div>
               {/* Decorative floating element */}
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60 z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.problem.h2}</h2>
            <p className="text-lg text-slate-600">{t.problem.p}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.problem.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-orange-100 transition">
                <div className="mb-6">
                  {idx === 0 ? <Clock className="h-10 w-10 text-orange-500" /> : idx === 1 ? <Users className="h-10 w-10 text-orange-500" /> : <Settings className="h-10 w-10 text-orange-500" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <AlertTriangle className="text-orange-500 mr-3 h-8 w-8" />
                  {t.calculator.title}
                </h2>
                <p className="text-slate-600 mb-10 text-lg">{t.calculator.p}</p>
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                      {t.calculator.inquiries}: <span className="text-emerald-600">{leads}</span>
                    </label>
                    <input 
                      type="range" min="10" max="500" step="10" value={leads} 
                      onChange={(e) => setLeads(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                      {t.calculator.jobValue}: <span className="text-emerald-600">{avgJob.toLocaleString()}</span>
                    </label>
                    <input 
                      type="range" min="500" max="25000" step="500" value={avgJob} 
                      onChange={(e) => setAvgJob(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900 p-10 lg:p-16 text-white flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">{t.calculator.lostJobsLabel}</p>
                    <p className="text-5xl font-extrabold text-orange-400">~{lostJobs}</p>
                    <p className="text-slate-500 text-sm mt-2 italic">{t.calculator.lostJobsDesc}</p>
                  </div>
                  <div className="pt-8 border-t border-slate-800">
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">{t.calculator.leakedRevLabel}</p>
                    <p className="text-6xl font-extrabold text-orange-500">
                      {lang === 'en' ? '$' : ''}{lostRevenue.toLocaleString()}{lang === 'fr' ? ' €' : ''}
                    </p>
                    <p className="text-slate-500 text-sm mt-2 italic">{t.calculator.leakedRevDesc}</p>
                  </div>
                  <button 
                    onClick={openCalendly}
                    className="w-full bg-emerald-600 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20"
                  >
                    {t.calculator.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-8">{t.solution.h2}</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">{t.solution.p}</p>
              <ul className="space-y-6">
                {t.solution.items.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    {idx === 3 ? (
                      <RefreshCcw className="h-6 w-6 text-orange-400 mr-4 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-4 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="font-bold text-lg">{benefit.title}</h4>
                      <p className="text-slate-400">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 blur-[120px] opacity-20"></div>
              <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-12 w-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{t.solution.coreTitle}</h3>
                </div>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-slate-700">
                    <span className="text-slate-400 text-sm uppercase font-bold tracking-widest">{t.solution.reactivation}</span>
                    <p className="text-3xl font-extrabold mt-1 text-orange-400">12% - 15%</p>
                  </div>
                  <div className="pb-6 border-b border-slate-700">
                    <span className="text-slate-400 text-sm uppercase font-bold tracking-widest">{t.solution.adminSavings}</span>
                    <p className="text-3xl font-extrabold mt-1 text-emerald-400">15+ Hours</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm uppercase font-bold tracking-widest">{t.solution.pipelineValue}</span>
                    <p className="text-3xl font-extrabold mt-1 text-emerald-400">
                      {lang === 'en' ? '$85,000' : '85 000 €'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.howItWorks.h2}</h2>
            <p className="text-slate-600">{t.howItWorks.p}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {t.howItWorks.steps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-slate-100 absolute -top-8 -left-4 z-0">{item.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dead Lead Revival */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <RefreshCcw className="w-96 h-96 text-emerald-500 absolute -bottom-20 -right-20 transform rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-emerald-500/20">
                <RefreshCcw className="h-4 w-4" /> <span>{t.revival.badge}</span>
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-6">{t.revival.h2}</h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">{t.revival.p}</p>
              <div className="space-y-4">
                {[t.revival.bullet1, t.revival.bullet2, t.revival.bullet3].map((bullet, i) => (
                  <div key={i} className="flex items-start bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                     <CheckCircle className="h-6 w-6 text-emerald-500 mr-4 mt-1" />
                     <p className="text-slate-300">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-600 p-12 rounded-[2.5rem] shadow-2xl relative">
              <p className="text-white text-2xl font-bold mb-6 italic leading-snug">{t.revival.box}</p>
              <div className="flex items-center">
                 <div className="h-1 bg-white/30 w-12 mr-4"></div>
                 <p className="text-emerald-100 font-bold tracking-widest uppercase text-sm">{t.revival.boxLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">{t.faq.h2}</h2>
          <div className="space-y-4">
            {t.faq.items.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full text-left p-6 font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaqIndex === i}
                >
                  <span className="pr-8">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-96 border-t border-slate-50 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600 -skew-x-12 translate-x-1/2 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8">{t.finalCta.h2}</h2>
            <p className="text-xl text-slate-400 mb-12">
              {t.finalCta.p} 
              <br /><br />
              <strong>{t.finalCta.warning}</strong>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={openCalendly}
                className="bg-emerald-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-emerald-700 transition flex items-center justify-center"
              >
                {t.finalCta.btn} <PhoneCall className="ml-3 h-5 w-5" />
              </button>
            </div>
            <p className="mt-8 text-sm text-slate-500 flex items-center">
              <Clock className="h-4 w-4 mr-2" /> {t.finalCta.footer}
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Zap className="h-6 w-6 text-emerald-600 fill-emerald-600" />
            <span className="text-xl font-bold tracking-tight text-white">EVRevenue<span className="text-emerald-600">Ops</span></span>
          </div>
          <p className="text-sm">{t.footer.copy}</p>
        </div>
      </footer>
    </div>
  );
}
