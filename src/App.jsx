import Menu from "./Components/Menu"
import Navbar from "./Components/Navbar"


function App() {
  
  return (
    <>
      <main className="h-screen w-screen overflow-x-hidden  bg-gradient-to-r from-stone-50 to-violet-300">
        <Navbar />
        <Menu />
      </main>
    </>
  )
}

export default App
