import { createContext, useContext, useState } from "react";
import { api } from "../Service/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserProviders";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

  const { setUpdate, update } = useContext(UserContext)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [techUp, setTechUp] = useState({});

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const openModalEdit = (tech) => {
    setTechUp(tech);
    setModalEditOpen(true);
  }

  const closeModalEdit = () => {
    setModalEditOpen(false);
  }

  const createTech = async (data) => {
    const token = localStorage.getItem('user:token');

    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUpdate(!update);
      toast.success("Tecnologia adicionada com sucesso");

    } catch (error) {
      toast.error("Algo deu errado");
    }
  }

  const editTech = async (data, id) => {
    const token = localStorage.getItem('user:token');

    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUpdate(!update);
      console.log(response);
      toast.success("Tecnologia editada com sucesso!");

    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado")
    }
  }

  const deleteTech = async (id) => {
    const token = localStorage.getItem('user:token');

    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUpdate(!update);
      toast.success("Tecnologia deletada com sucesso!");

    } catch (error) {
      toast.error("Algo deu errado");
    }
  }

  return (
    <TechContext.Provider value={{ openModal, closeModal, modalOpen, createTech, modalEditOpen, openModalEdit, closeModalEdit, editTech, deleteTech, techUp }}>
      {children}
    </TechContext.Provider>
  )
}

