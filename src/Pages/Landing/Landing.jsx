import { Link, Outlet } from "react-router-dom"
import { useForm } from "react-hook-form";
import { LandingSchema } from "./LandingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LandingStyled } from "./LandingStyled";
import { LandingH1 } from "./LandingStyled";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserProviders";

export const Landing = () => {
  const { login } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(LandingSchema),
    mode: "onChange"
  });

  const submitLogin = (data) => {
    login(data);
  }

  return (
    <>
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
    </>
  )
}