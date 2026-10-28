function Navbar() {
    const enlaces = ['Inicio', 'Servicios', 'Nosotros', 'Contacto']
    return (
        <nav className="bg-neutral-800">
            <ul className="flex justify-center gap-5 p-3">
                {enlaces.map((enlace) => (
                    <li key={enlace}>
                        <a href="#" className="text-white px-3 py-1.5 rounded hover:bg-sena">
                            {enlace}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navbar