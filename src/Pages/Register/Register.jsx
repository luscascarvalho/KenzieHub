import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterStyled } from "./RegisterStyled";
import { RegisterStyledDiv } from "./RegisterStyled";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserProviders";

export const Register = () => {

  const { registerUser } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange"
  });

  const createUser = async (data) => {
    await registerUser(data);
  }

  return (
    <div>

      <RegisterStyled>
        <h3>Kenzie Hub</h3>

        <Link to="/">Voltar</Link>
      </RegisterStyled>

      <RegisterStyledDiv>
        <h1>Crie sua conta</h1>

        <span>Rapido e grátis, vamos nessa</span>

        <form onSubmit={handleSubmit(createUser)}>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Digite seu nome" {...register("name")} />
          {errors.name ? <p>{errors.name.message}</p> : null}

          <label htmlFor="">Email</label>
          <input type="mail" placeholder="Digite seu email" {...register("email")} />
          {errors.email ? <p>{errors.email.message}</p> : null}

          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Digite sua senha" {...register("password")} />
          {errors.password ? <p>{errors.password.message}</p> : null}

          <label htmlFor="">Confirmar senha</label>
          <input type="password" placeholder="Confirmar senha" {...register("passwordConfirmed")} />
          {errors.passwordConfirmed ? <p>{errors.passwordConfirmed.message}</p> : null}

          <label htmlFor="">Bio</label>
          <input type="text" placeholder="Fale sobre você" {...register("bio")} />
          {errors.bio ? <p>{errors.bio.message}</p> : null}

          <label htmlFor="">Contato</label>
          <input type="text" placeholder="Opção de contato" {...register("contact")} />
          {errors.contact ? <p>{errors.contact.message}</p> : null}

          <label htmlFor="">Selecionar Módulo</label>

          <select name="" id=""  {...register("course_module")}>
            <option value="">Selecionar Módulo</option>
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
          </select>
          {errors.course_module ? <p>{errors.course_module.message}</p> : null}

          <button type="submit">Cadastrar</button>
        </form>
      </RegisterStyledDiv>
    </div >
  )
}