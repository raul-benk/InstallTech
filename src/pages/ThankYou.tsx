import React from 'react';
import { CheckCircle2, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = "5547992754066";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20energia%20solar.`;

export function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 selection:bg-primary/20">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
        <div className="w-24 h-24 bg-green-100 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tudo certo! 🎉
        </h1>
        
        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          Seus dados foram recebidos com sucesso. Nossa equipe de engenharia entrará em contato em breve para apresentar a melhor solução em energia solar para você.
        </p>
        
        <div className="space-y-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3 text-lg shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp agora
          </a>
          
          <Link 
            to="/"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
}
