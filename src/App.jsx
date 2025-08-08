import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"
import Forgot_Password from "./Components/Pages/Forgot_Password"
import Home from "./Components/Pages/Home"
import Shop from "./Components/Pages/Shop"
import Header from "./Components/Sections/Header"
import Footer from "./Components/Sections/Footer"
import Header2 from "./Components/Sections/Header2"
import ProductPage from "./Components/Pages/CardDetails"
import Footer2 from "./Components/Sections/Footer2"

function App() {
  const location = useLocation();

  // Define routes where Header should be hidden
  const hideHeaderRoutes = ["/login", "/register","/forgotPassword"];

  return (
    <>
      {/* Show Header only if current path is NOT in hideHeaderRoutes */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ingredient" element={<ProductPage />} />
        <Route path="/forgotPassword" element={<Forgot_Password />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer2 />
    </>
  );
}

export default App
