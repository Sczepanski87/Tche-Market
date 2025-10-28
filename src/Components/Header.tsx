import { Search, LogIn, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-cream text-gray-800 px-6 py-4 flex items-center justify-between shadow-md">
      {/* LOGO */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="size-20" />
          <p className="text-3xl text-blue-950 font-bold max-w-1">Tchê Market</p>
        </div>
      </Link>

      {/* SEARCH BAR */}
      <nav className="flex items-center bg-sand px-3 py-2 rounded-full w-full max-w-md mx-6 border border-blue-950 shadow-sm focus-within:ring-2 focus-within:ring-blue-300 transition-all">
        <Search className="text-gray-500 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-500"
        />
      </nav>

      {/* LOGIN BUTTON */}
      <div className="flex gap-10">
        <Link
          to="/login"
          className="flex items-center gap-2 px-5 py-2 rounded-full transition-[inset-shadow] shadow-sm hover:inset-shadow-sm hover:shadow-none"
        >
          <LogIn className="w-5 h-5 text-gray-700" />
          <span className="font-semibold text-gray-800">Entrar</span>
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-2 px-5 py-2 rounded-full transition-shadow shadow-sm hover:inset-shadow-sm hover:shadow-none"
        >
          <Plus className="w-5 h-5 text-gray-700" />
          <span className="font-semibold text-gray-800">Criar Conta</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
