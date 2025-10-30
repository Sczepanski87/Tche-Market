import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from './Pages/CartPage.tsx';
import Header from "./Components/Header.tsx";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer.tsx";
import NotFound from "./Components/NotFound";
import HomePage from "./Pages/HomePage";
import { UserStorage } from "./UserContext";
import { CartProvider } from './Contexts/CartContext.tsx';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="carrinho" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CartProvider>
  );
};

export default App;
