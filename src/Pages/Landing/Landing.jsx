import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { api } from "../../Service";
import { LandingSchema } from "./LandingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LandingStyled } from "./LandingStyled";
import { LandingH1 } from "./LandingStyled";

export const Landing = ({ setUser, toast }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(LandingSchema),
    mode: "onChange"
  });

  const navigate = useNavigate();

  const submitLogin = async (data) => {
    try {
      const response = await api.post('/sessions', data);

      localStorage.setItem('user:userID', response.data.user.id);
      setUser(response.data.user);
      localStorage.setItem('user:token', response.data.token);

      toast.success("Logado com sucesso!");

      navigate("/home");
    } catch (error) {
      console.error(error.response.data.message);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div>
      <LandingH1>Kenzie Hub</LandingH1>

      <LandingStyled>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(submitLogin)}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Usuário" {...register("email")} />
          {errors.email ? <p>{errors.email.message}</p> : null}

          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Senha" {...register("password")} />
          {errors.password ? <p>{errors.password.message}</p> : null}

          <button type='submit'>Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>

        <Link to="/register">Cadastre-se</Link>
      </LandingStyled>
    </div>
  )
}