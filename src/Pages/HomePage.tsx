import Hero from '../Components/Home/Hero'; // Verifique se o caminho está correto
import ProductCard from '../Components/Home/ProductCard'; // Verifique se o caminho está correto

// --- (O que você já tinha) ---
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
} 

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Smartphone X-Pro 256GB',
    price: 4499.90,
    image: '../public/smartphone.png',
  },
  {
    id: 2,
    name: 'Notebook Ultra Fino i7 16GB RAM',
    price: 5199.00,
    image: '../public/notebookFino.png',
  },
  {
    id: 3,
    name: 'Tênis de Corrida MaxRun',
    price: 349.99,
    image: '../public/tenisCorrida.png',
  },
    {
    id: 4,
    name: 'Fone de Ouvido Bluetooth',
    price: 899.90,
    image: '../public/foneBluetooth.png',
  },
];

const HomePage = () => {
  return (
    <main>
      <Hero />
      <section className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id} 
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;