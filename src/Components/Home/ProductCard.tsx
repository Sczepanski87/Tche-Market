import React from 'react';
import { FiPlus } from 'react-icons/fi';

interface ProductCardProps {
    id: number;
  name: string;
  price: string;
  image: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden 
                    shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <button 
        className="absolute top-3 right-3 bg-primary text-white rounded-full w-10 h-10 
                   flex items-center justify-center z-10 
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   hover:bg-primary-dark scale-90 group-hover:scale-100"
      >
        <FiPlus className="w-5 h-5" />
      </button>
      <div className="h-52 w-full p-4 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 border-t border-gray-100 mt-auto">
        <h3 className="text-base font-semibold text-gray-800 mb-2 h-10 truncate" title={name}>
          {name}
        </h3>
        <p className="text-xl font-bold text-primary">
          {price}
        </p>
        <button><img src="../public/coracaoSalvar.png" alt="" className="w-5 h-5 flex justify-"/></button>
      </div>
    </div>
  );
}

export default ProductCard;