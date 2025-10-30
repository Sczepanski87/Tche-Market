import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[450px] bg-black text-white">
      <img
        src="../public/banner.png" 
        alt="Entrega Tchê Market"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            As melhores ofertas da serra gaúcha.
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Direto na porta da sua casa.
          </p>
          <a
            href="#promocoes"
            className="bg-blue-950 text-white py-3 px-8 rounded-full text-lg font-bold 
                       hover:bg-blue-800 transition-colors shadow-lg"
          >
            Ver Promoções
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;