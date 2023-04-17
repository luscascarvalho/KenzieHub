import { useContext } from "react"
import { UserContext } from "../../Providers/UserProviders"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/" />
}