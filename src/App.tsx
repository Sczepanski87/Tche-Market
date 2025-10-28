import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
