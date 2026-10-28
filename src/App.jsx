import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans">
      <Header titulo="Mi Primera App en React" />
      <Navbar />
      <Main />
      <Footer autor="Aprendiz SENA" />
    </div>
  )
}
export default App