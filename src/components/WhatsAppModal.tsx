import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WHATSAPP_NUMBER = "5547992754066";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20energia%20solar.`;

export function WhatsAppModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-wa-modal', handler);
    return () => window.removeEventListener('open-wa-modal', handler);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(WHATSAPP_LINK, '_blank');
    setIsOpen(false);
    navigate('/obrigado');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/10 hover:bg-black/20 rounded-full p-1 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="bg-[#25D366] p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
          <MessageCircle className="w-16 h-16 mx-auto mb-4 relative z-10" />
          <h3 className="text-2xl font-bold relative z-10">Fale no WhatsApp</h3>
          <p className="text-green-50 mt-2 relative z-10">Preencha seus dados para iniciar o atendimento com um especialista.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
            <input 
              type="text" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all" 
              placeholder="Como podemos te chamar?" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
            <input 
              type="tel" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] outline-none transition-all" 
              placeholder="(00) 00000-0000" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-colors mt-4 text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30"
          >
            <MessageCircle className="w-6 h-6" />
            Iniciar Conversa
          </button>
        </form>
      </div>
    </div>
  );
}
