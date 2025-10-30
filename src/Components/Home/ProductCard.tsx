import { FiPlus } from 'react-icons/fi';
import React, { useState } from 'react'; 
import { useCart } from '../../Contexts/CartContext.tsx';  

interface ProductCardProps {
  id: number; 
  name: string;
  price: number;
  image: string;
  isInitiallyFavorited?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  price, 
  image,
  isInitiallyFavorited = false 
}) => {
  const { addToCart, isProductInCart } = useCart();
  const isInCart = isProductInCart(id);
  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    const productToAdd = { id, name, price, image };
    addToCart(productToAdd, 1);
    
    console.log(`Produto "${name}" adicionado ao carrinho.`);
  };
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
        <div className='flex justify-between'>
          <p className="text-xl font-bold text-primary">
            R$ {price}
          </p>
          <button 
        className={`absolute bottom-4 right-4 z-10 p-1 
                    transition-opacity duration-300
                    ${isInCart 
                        ? 'opacity-100' 
                        : ' group-0 hover:opacity-100' 
                    }`}
        onClick={handleAddToCart} 
        aria-label="Adicionar ao carrinho"
      >
        <img 
          src="/carrinho.png" 
          alt="Adicionar ao carrinho" 
          className="w-6 h-6 cursor-pointer" 
        />
      </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;