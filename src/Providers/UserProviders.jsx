import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Service/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [update, setUpdate] = useState(true);

  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await api.post('/sessions', data);

      localStorage.setItem('user:userID', response.data.user.id);
      setUser(response.data.user);
      localStorage.setItem('user:token', response.data.token);

      toast.success("Logado com sucesso!");

      navigate("/home");

    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    }
  }

  const registerUser = async (data) => {
    try {
      const response = await api.post('/users', data);

      toast.success("Conta criada com sucesso!");

      navigate("/");

    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('user:token');
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          setUpdate(false);
          setUser(response.data);
          navigate("/home");

        } catch (error) {
          localStorage.removeItem('user:token');
        }
      }
      autoLogin();
    }
  }, [update]);

  return (
    <UserContext.Provider value={{ login, registerUser, user, setUser, setUpdate, update }}>
      {children}
    </UserContext.Provider>
  )
}