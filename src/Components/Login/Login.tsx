import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";

const Login = () => {
  return (
    <div className="grid grid-cols-2 gap-8 overflow-hidden">
      <img className="min-h-[90vh] object-cover" src="login.jpg" alt="Login" />
      <div className="max-w-120 p-4 flex items-center">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
