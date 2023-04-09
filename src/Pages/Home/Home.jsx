import { Link } from "react-router-dom";
import { HomeStyled } from "./HomeStyled";
import { DivHomeStyled } from "./HomeStyled";
import { DivHomeStyled2 } from "./HomeStyled";

export const Home = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem('user:token');
    localStorage.removeItem('user:userID');
  };


  return (
    <div>

      <HomeStyled>
        <div>
          <h1>KenzieHub</h1>
          <Link to="/" onClick={handleLogout}>Sair</Link>
        </div>
      </HomeStyled>


      <DivHomeStyled>
        <h3>Olá, {user?.name}</h3>
        <span>{user?.course_module}</span>
      </DivHomeStyled>

      <DivHomeStyled2>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </DivHomeStyled2>

    </div>
  )
}