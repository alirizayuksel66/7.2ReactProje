import { NavLink, Outlet } from "react-router-dom"

export default function HomeLayout() {
    return (
        <>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive && 'aktif'}>AnaSayfa</NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({ backgroundColor: isActive ? 'pink' : 'transparent' })}>İletişim</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/profile" style={({ isActive }) => ({ backgroundColor: isActive ? 'pink' : 'transparent' })}>Profil</NavLink>
            </nav>
            <Outlet />
        </>
    )
}