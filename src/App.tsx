/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
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
    </div>
  );
}
