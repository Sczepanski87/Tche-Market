import React from 'react';
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../Contexts/CartContext.tsx'; 
import type { CartItem } from '../Contexts/CartContext.tsx';

const formatBRL = (value: number) => 

  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const subtotalItem = item.price * item.quantity;

  return (
    <div className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
      
      {/* Imagem e Nome */}
      <div className="flex items-center flex-1 min-w-0">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded mr-4" />
        <div className="min-w-0">
          <h3 className="text-gray-800 font-semibold truncate">{item.name}</h3>
          <p className="text-gray-600 text-sm">{formatBRL(item.price)}</p>
        </div>
      </div>
      
      {/* Seção de Quantidade */}
      <div className="flex items-center justify-center w-32 mx-4">
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="p-1 border border-gray-300 rounded-l hover:bg-gray-100 disabled:opacity-50 transition-colors"
        >
          <FiMinus className="w-4 h-4" />
        </button>
        <span className="px-3 py-1 border-t border-b border-gray-300 bg-white font-medium w-12 text-center">
          {item.quantity}
        </span>
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 border border-gray-300 rounded-r hover:bg-gray-100 transition-colors"
        >
          <FiPlus className="w-4 h-4" />
        </button>
      </div>

      {/* Subtotal do Item */}
      <div className="w-24 text-right hidden md:block">
        <span className="text-gray-800 font-bold">{formatBRL(subtotalItem)}</span>
      </div>

      {/* Botão de Remover */}
      <div className="w-12 text-right">
        <button 
          onClick={() => onRemove(item.id)}
          className="text-gray-400 hover:text-red-600 transition-colors"
        >
          <FiTrash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};


// =======================================================================
// === 2. COMPONENTE DE RESUMO DO PEDIDO (OrderSummary) ===================
// =======================================================================
interface OrderSummaryProps {
  subtotal: number;
}
// O componente OrderSummary continua o mesmo, recebendo subtotal por prop
const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal }) => {
  // ... (código do OrderSummary é o mesmo) ...
  const shippingFee = subtotal > 5000 ? 0 : 45.00; // Frete grátis acima de R$ 5000
  const total = subtotal + shippingFee;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
        Resumo do Pedido
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{formatBRL(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Frete</span>
          <span className={shippingFee === 0 ? "text-primary font-semibold" : ""}>
            {shippingFee === 0 ? "GRÁTIS" : formatBRL(shippingFee)}
          </span>
        </div>

        <div className="flex justify-between pt-4 border-t border-gray-300 text-xl font-bold text-gray-900">
          <span>Total</span>
          <span>{formatBRL(total)}</span>
        </div>
      </div>
      
      <button className="w-full mt-8 bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
        <FiShoppingBag className="w-5 h-5" />
        Finalizar Compra
      </button>

      <a href="/" className="block mt-4 text-center text-sm text-primary hover:underline">
        <FiArrowLeft className="inline-block mr-1" />
        Continuar Comprando
      </a>
    </div>
  );
};


// =======================================================================
// === 3. PÁGINA PRINCIPAL DO CARRINHO (CartPage) =========================
// =======================================================================

const CartPage: React.FC = () => {
  // Use o hook useCart para pegar os dados e funções
  const { cartItems, cartCount, cartSubtotal, removeFromCart, updateQuantity } = useCart();

  // Se o carrinho estiver vazio
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Seu Carrinho está Vazio</h2>
        <p className="text-gray-600 mb-8">Parece que você ainda não adicionou nada. Que tal dar uma olhada nas nossas ofertas?</p>
        <a href="/" className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors">
          Começar a Comprar
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          Seu Carrinho de Compras ({cartCount} itens)
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna Principal do Carrinho */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {cartItems.map(item => (
              <CartItemRow 
                key={item.id} 
                item={item} 
                // Passamos as funções do Contexto para o componente filho
                onUpdateQuantity={updateQuantity} 
                onRemove={removeFromCart}
              />
            ))}
          </div>

          {/* Coluna do Resumo do Pedido */}
          <div className="lg:col-span-1">
            <OrderSummary subtotal={cartSubtotal} /> {/* Subtotal real do Contexto */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;