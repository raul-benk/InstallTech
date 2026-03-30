import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, Sun, TrendingUp, ShieldCheck, Zap, 
  CheckCircle2, Users, ArrowRight, MessageCircle, 
  ChevronDown, Calculator, Handshake, Award
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

export const openWhatsAppModal = () => window.dispatchEvent(new Event('open-wa-modal'));

const WHATSAPP_NUMBER = "5547992754066";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20energia%20solar.`;

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Simulação', href: '#simulacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/logo.png" 
              alt="Instalach Energia Solar Logo" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-secondary">
              Instalach <span className="text-primary hidden sm:inline">Energia Solar</span>
            </span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={openWhatsAppModal}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-primary/20"
            >
              Falar com Especialista
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-base font-medium text-gray-800 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsOpen(false); openWhatsAppModal(); }}
            className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-medium mt-4"
          >
            Falar com Especialista
          </button>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Energia Inteligente em Joinville</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            Transforme sua conta de luz em <span className="text-primary">economia real</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Projetos personalizados, engenharia especializada e retorno financeiro garantido — sem achismos, sem desperdício.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#simulacao"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
            >
              Simule sua economia agora <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 font-medium">
            Mais de 20 anos de experiência entregando eficiência energética para residências, empresas e grandes indústrias em Joinville e região.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="relative">
          <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000" 
              alt="Painéis solares em telhado" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Economia Média</p>
                <p className="text-2xl font-bold text-secondary">Até 95%</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Você já percebeu que...</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Conta Alta", desc: "Sua conta de luz só aumenta a cada mês." },
            { title: "Insegurança", desc: "Investir em energia solar parece arriscado." },
            { title: "Falsas Promessas", desc: "Muitos sistemas não entregam o retorno prometido." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="bg-secondary text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-medium mb-4">O problema não é a energia solar.</p>
          <p className="text-3xl md:text-4xl font-bold text-primary mb-8">O problema é o projeto errado.</p>
          
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-medium">Gera menos energia do que deveria</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-medium">Aumenta o tempo de retorno</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-medium">Faz você perder dinheiro</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section id="solucao" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000" 
              alt="Engenheiro analisando projeto solar" 
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Na Instalach, cada projeto é tratado como um <span className="text-primary">investimento</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Você não compra apenas placas solares. Você recebe um <strong>projeto técnico estratégico</strong> desenhado especificamente para a sua necessidade.
            </p>
            
            <div className="space-y-6">
              {[
                "Maximizar economia",
                "Reduzir riscos",
                "Acelerar retorno"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const benefits = [
    { title: "Economia real na conta de luz", icon: TrendingUp },
    { title: "Projeto sob medida", icon: Calculator },
    { title: "Engenharia especializada", icon: ShieldCheck },
    { title: "Atendimento completo", icon: Users },
    { title: "Investimento inteligente", icon: Zap },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Instalach?</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, i) => (
            <FadeIn key={i} delay={i * 0.1} className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">{benefit.title}</h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Empresas que pensam no futuro já economizam milhares.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-secondary mb-8">Exemplo Real de Economia</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-xl text-primary">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Economia Mensal</p>
                  <p className="text-3xl font-bold text-secondary">Mais de R$ 25 mil</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-xl text-primary">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Economia Anual</p>
                  <p className="text-3xl font-bold text-secondary">Mais de R$ 300 mil</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {["Mais competitividade", "Mais sustentabilidade", "Mais lucro"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <img 
              src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1000" 
              alt="Instalação solar industrial" 
              className="rounded-3xl shadow-xl object-cover h-full min-h-[400px]"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    "Projetos fotovoltaicos",
    "Engenharia técnica",
    "Instalação profissional",
    "Usinas de investimento",
    "Consultoria especializada",
    "Monitoramento e suporte"
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Soluções completas em energia solar para sua residência ou empresa.</p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors group">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                <Zap className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary">{service}</h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Simulation() {
  const navigate = useNavigate();

  return (
    <section id="simulacao" className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#76A33D 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Descubra o seu potencial de economia</h2>
            <p className="text-lg text-gray-300 mb-8">
              Envie sua conta de luz e receba uma <strong>simulação gratuita e sem compromisso</strong> feita por nossos engenheiros.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-6 h-6" /> Análise personalizada</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-6 h-6" /> Cálculo de payback</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-6 h-6" /> Dimensionamento exato</li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <form className="bg-white p-8 rounded-3xl shadow-2xl text-secondary" onSubmit={(e) => {
              e.preventDefault();
              window.open(WHATSAPP_LINK, '_blank');
              navigate('/obrigado');
            }}>
              <h3 className="text-2xl font-bold mb-6 text-center">Solicitar Simulação</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Valor médio da conta de luz (Opcional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="R$ 0,00" />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors mt-4 text-lg">
                  Receber Simulação Gratuita
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Referral() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
            <Handshake className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Programa de Indicação</h2>
          <p className="text-lg text-gray-600">Indique a Instalach e ganhe recompensas exclusivas.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "1", title: "Você indica", desc: "Compartilhe o contato de um amigo ou empresa." },
            { step: "2", title: "Apresentamos", desc: "Nossa equipe faz o projeto e a apresentação." },
            { step: "3", title: "Você ganha 💰", desc: "Se o projeto for fechado, você recebe sua recompensa." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-gray-50">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Pronto para começar a economizar?</h2>
          <p className="text-xl mb-10 text-white/90">Descubra quanto você pode economizar com um projeto feito sob medida para você.</p>
          <button 
            onClick={openWhatsAppModal}
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Solicite seu orçamento no WhatsApp
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

export function Guarantee() {
  const items = [
    { title: "Engenharia real", icon: ShieldCheck },
    { title: "Equipamentos de qualidade", icon: Award },
    { title: "Atendimento transparente", icon: MessageCircle },
    { title: "Suporte completo", icon: Users },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Nossa Garantia</h2>
          <p className="text-lg text-gray-600">Compromisso total com a sua satisfação e segurança.</p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-colors">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-primary">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-secondary">{item.title}</h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Quanto posso economizar?", a: "A economia pode chegar a até 95% da sua conta de luz. Para um valor exato, oferecemos uma simulação gratuita baseada no seu consumo atual." },
    { q: "Qual é o tempo de Payback (retorno do investimento)?", a: "Em média, o retorno do investimento em energia solar ocorre entre 3 a 5 anos, dependendo do tamanho do projeto e do seu consumo." },
    { q: "Como funciona a manutenção?", a: "A manutenção é mínima. Basicamente consiste na limpeza periódica das placas solares (1 a 2 vezes ao ano) para garantir a eficiência máxima de geração." },
    { q: "O sistema funciona em dias nublados?", a: "Sim! Os painéis solares geram energia mesmo em dias nublados ou chuvosos, pois utilizam a irradiação solar e não apenas a luz direta do sol." },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Dúvidas Frequentes</h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all">
        <button 
          className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold text-lg text-secondary">{question}</span>
          <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", isOpen && "rotate-180")} />
        </button>
        <div className={cn("px-6 overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-40 pb-5" : "max-h-0")}>
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-full">
              <img 
                src="/logo.png" 
                alt="Instalach Energia Solar Logo" 
                className="h-10 w-10 object-contain rounded-full"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight">
              Instalach <span className="text-primary">Energia Solar</span>
            </span>
          </div>
          
          <div className="text-center md:text-right text-gray-400">
            <p className="font-medium text-white mb-1">Joinville – SC</p>
            <p>WhatsApp: (47) 99275-4066</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Instalach Energia Solar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <button
      onClick={openWhatsAppModal}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}
