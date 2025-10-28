import { useForm } from "react-hook-form";
import Button from "../Forms/Button";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: object) {
    console.log(data);
  }
  return (
    <div>
      <h1 className="text-blue-950 font-semibold text-3xl">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            className="border boder-blue-900 px-2 py-2 rounded-md"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-lg text-red-600">Insira um Email válido</p>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            className="border boder-blue-900 px-2 py-2 rounded-md"
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="text-lg text-red-600">Insira uma senha</p>}
        </div>
        <Button>Entrar</Button>
      </form>
    </div>
  );
};

export default LoginForm;
