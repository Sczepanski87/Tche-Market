import React from 'react';

const Footer: React.FC = () => {
  return (

    <footer className="bg-blue-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Tchê Market</h4>
          <p className="text-sm">
            &copy; 2025 Tchê Market. Todos os direitos reservados.
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white hover:underline transition-colors">Início</a></li>
            <li><a href="/sobre" className="hover:text-white hover:underline transition-colors">Sobre Nós</a></li>
            <li><a href="/contato" className="hover:text-white hover:underline transition-colors">Contato</a></li>
            <li><a href="/faq" className="hover:text-white hover:underline transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Siga-nos</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <p className="text-xs mt-4">
            Feito com carinho no sul do Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;