import { Navigate, Outlet } from "react-router-dom"
import {useUser} from "../context/userContext"

const PrivateRoute = () => {
 const user = useUser()
 return user? <Outlet />: <Navigate to="/login" replace /> 
}
export default PrivateRoute