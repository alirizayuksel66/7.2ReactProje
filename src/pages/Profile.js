import { useAuth } from "../context/AuthContext"

export default function Profile() {

    const { setUser } = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }

    return (
        <div>
            Profil Sayfası <br></br>
            <button onClick={logoutHandle}>Çıkış Yap</button>
        </div>
    )
}