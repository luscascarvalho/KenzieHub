import { useContext } from "react"
import { TechContext } from "../Providers/TechProviders"
import { useForm } from "react-hook-form";
import { ModalItensStyled } from "./StylesComponents/ModalTechnologiesStyled";
import { ModalStyled } from "./StylesComponents/ModalTechnologiesStyled";

export const ModalTechnologies = () => {

  const { closeModal, createTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({});

  const addTech = async (data) => {
    await createTech(data);
  }

  return (
    <div>
      <ModalStyled>
        <ModalItensStyled>
          <div>
            <h1>Cadastrar Tecnologia</h1>
            <button onClick={closeModal}>X</button>
          </div>

          <form action="" onSubmit={handleSubmit(addTech)}>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Nome da tecnologia" {...register("title")} />

            <label htmlFor="">Selecionar status</label>
            <select name="" id="" {...register("status")}>
              <option value="null">Selecione um nível</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </ModalItensStyled>
      </ModalStyled>
    </div>
  )
}