import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"

export default function Login() {
    
    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = useAuth()
    console.log(location)
    const loginHandle = () => {
        setUser({
            id: 1,
            usename: 'Ali Rıza Yüksel'
        })
        navigate('/')
    }

    return (
        <div>
            Login Page <br></br>
            <button onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}