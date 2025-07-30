import { Route, Routes } from "react-router-dom"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"
import Forgot_Password from "./Components/Pages/Forgot_Password"
import Home from "./Components/Pages/Home"
import Shop from "./Components/Pages/Shop"
import Header from "./Components/Sections/Header"
import Footer from "./Components/Sections/Footer"
import Header2 from "./Components/Sections/Header2"
import ProductPage from "./Components/Pages/CardDetails"

function App() {
  return (
    <>
    {/* <Header/> */}
    <Header2/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/ingredient" element={<ProductPage/>}/>

      <Route path="/forgotPassword" element={<Forgot_Password/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
