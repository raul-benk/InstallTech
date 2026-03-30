/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  Hero, 
  Problem, 
  Solution, 
  Benefits, 
  SocialProof, 
  Services, 
  Simulation, 
  Referral, 
  CTA, 
  Guarantee, 
  FAQ, 
  Footer, 
  WhatsAppFloat 
} from './components/Sections';
import { WhatsAppModal } from './components/WhatsAppModal';
import { ThankYou } from './pages/ThankYou';

function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <SocialProof />
        <Services />
        <Simulation />
        <Referral />
        <CTA />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
      <WhatsAppModal />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/obrigado" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}
