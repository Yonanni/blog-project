import { Navigate, Outlet } from "react-router-dom"
import {useUser} from "../context/userContext"

const PublicRoute = () => {
 const user = useUser()
 return user? <Navigate to="/home" replace />: <Outlet />
}
export default PublicRoute