import { useContext } from "react";
import { TechContext } from "../Providers/TechProviders";
import { useForm } from "react-hook-form";
import { ModalEditStyled } from "./StylesComponents/ModalEditStyled";
import { ModalEditContainer } from "./StylesComponents/ModalEditStyled";

export const ModalEditTechnologies = () => {

  const { closeModalEdit, editTech, techUp, deleteTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: techUp.title,
      status: techUp.status
    }
  });

  const changingStatusTech = async (data) => {
    console.log(techUp)
    await editTech(data, techUp.id);
  }

  const deletedTech = async (id) => {
    await deleteTech(techUp.id);
  }


  return (
    <div>
      <ModalEditStyled>
        <ModalEditContainer>
          <div>
            <h1>Tecnologia Detalhes</h1>
            <button onClick={closeModalEdit}>X</button>
          </div>

          <form action="" onSubmit={handleSubmit(changingStatusTech)}>
            <label htmlFor="">Nome do projeto</label>
            <input type="text" disabled  {...register("title")} />

            <label htmlFor="">Status</label>
            <select name="" id="" {...register("status")}>
              <option value="iniciante">Iniciante</option>
              <option value="intermediário">Intermediário</option>
              <option value="avançado">Avançado</option>
            </select>


            <div className="divButton">
              <button className="saveChanges" type="submit">Salvar Alterações</button>
              <button className="deleteTech" type="button" onClick={deletedTech}>Excluir</button>
            </div>
          </form>
        </ModalEditContainer>
      </ModalEditStyled>
    </div>
  )
}