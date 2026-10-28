function Footer({ autor }) {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-gray-300 text-center p-4 text-sm border-t-4 border-sena">
      <p>© {anio} - Hecho por {autor}</p>
    </footer>
  );
}

export default Footer;