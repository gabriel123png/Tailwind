import Section from './Section.jsx'
function Main() {
    return (
        <main className="flex-1 w-full max-w-4xl mx-auto my-8 px-5">
            <Section
                titulo="Bienvenidos"
                texto="Esta es una sección dentro del componente Main. Cada parte de la página es un componente independiente."
            />
        </main>
    )
}
export default Main