function Section({ titulo, texto }) {
    return (
        <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-sena mb-3">{titulo}</h2>
            <p className="leading-relaxed">{texto}</p>
        </section>
    )
}
export default Section