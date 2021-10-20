import { useContext } from "react"
import { AuthContext } from "./AuthProvider";

// useing auth context.
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;