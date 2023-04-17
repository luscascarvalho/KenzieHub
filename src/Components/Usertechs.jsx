import { useContext } from "react"
import { UserContext } from "../Providers/UserProviders"
import { TechContext } from "../Providers/TechProviders";
import { UserTechStyled } from "./StylesComponents/UserTechs";

export const UserTechs = () => {

  const { user } = useContext(UserContext);
  const { techs } = user;
  const { openModalEdit } = useContext(TechContext);

  return (
    <UserTechStyled>
      <ul>
        {techs.map((tech) =>
          <li onClick={() => openModalEdit(tech)} key={tech.id}>
            <h3>{tech.title}</h3>
            <p>{tech.status}</p>
          </li>
        )}
      </ul>
    </UserTechStyled>
  )
}