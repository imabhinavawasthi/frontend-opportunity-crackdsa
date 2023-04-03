import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
const Rootlayout = () => {
  return (
    <div>
   <header>
    <Navbar />
   </header>
   <main>
<Outlet/>
   </main>
   <footer>
<Footer />
   </footer>
   </div>
  )


}

export default Rootlayout
