import { useNavigate } from "react-router-dom";
import { HomeStyled } from "./HomeStyled";
import { DivHomeStyled } from "./HomeStyled";
import { DivHomeStyled2 } from "./HomeStyled";
import { useContext } from "react";
import { ModalTechnologies } from "../../Components/ModalTechnologies";
import { UserContext } from "../../Providers/UserProviders";
import { TechContext } from "../../Providers/TechProviders";
import { UserTechs } from "../../Components/Usertechs";
import { ModalEditTechnologies } from "../../Components/ModalEditTechnologies";
import { ContainerHome } from "./HomeStyled";
import { ContainerItens } from "./HomeStyled";

export const Home = () => {

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const { openModal, modalOpen, modalEditOpen } = useContext(TechContext);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem('user:token');
    localStorage.removeItem('user:userID');
  };

  return (
    <div>
      <HomeStyled>
        <div>
          <h1>KenzieHub</h1>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </HomeStyled>

      <DivHomeStyled>
        <h3>Olá, {user?.name}</h3>
        <span>{user?.course_module}</span>
      </DivHomeStyled>

      <DivHomeStyled2>
        <div>
          <ContainerHome>
            <h1>Tecnologias</h1>
            <button onClick={openModal}>+</button>
          </ContainerHome>

          {modalOpen && <ModalTechnologies />}
          {modalEditOpen && <ModalEditTechnologies />}

          <ContainerItens>
            {user.techs.length > 0 ? <UserTechs /> : <h1>Não conseguimos encontrar nenhuma tecnologia cadastrada.</h1>}
          </ContainerItens>
        </div>
      </DivHomeStyled2>
    </div>
  )
}