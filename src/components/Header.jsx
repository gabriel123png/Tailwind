function Header({ titulo }) {
    return (
        <header className="bg-sena text-white text-center py-8 px-5">
            <h1 className="text-3xl font-bold mb-2">{titulo}</h1>
            <p className="text-gray-100 text-sm md:text-base">Ejemplo básico con componentes</p>
        </header>
    );
}

export default Header;