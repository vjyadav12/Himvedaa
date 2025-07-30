import { Route, Routes } from "react-router-dom"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"
import Forgot_Password from "./Components/Pages/Forgot_Password"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import Header from "./Components/Sections/Header"
import Footer from "./Components/Sections/Footer"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotPassword" element={<Forgot_Password/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
