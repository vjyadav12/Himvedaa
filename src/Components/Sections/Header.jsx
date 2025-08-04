import { Link } from "react-router-dom";
import logo from "../../assets/final logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly items-center bg-white p-4 gap-6 flex-wrap">
        {/* Company Logo */}
        <div className="flex justify-center items-center">
          <Link to="/"><img src={logo} alt="Company Logo" className="h-[78px]" /></Link>
        </div>

        {/* Search Bar + Links */}
        <div className="flex  flex-col justify-center items-center gap-4 w-full max-w-[700px] px-4">
          {/* Search Bar */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search here"
              className="border p-2 border-gray-600 w-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center items-center gap-7 text-lg flex-wrap w-full">
            <Link className="text-red-900 hover:text-green-600 hover:underline" to="/">
              Home
            </Link>
            <Link className="text-red-900 hover:text-green-600 hover:underline" to="/BestSeller">
              Best Seller
            </Link>
            <Link className="text-red-900 hover:text-green-600 hover:underline" to="/about">
              About
            </Link>
            <Link className="text-red-900 hover:text-green-600 hover:underline" to="/shop">
              Shop
            </Link>
            <Link className="text-red-900 hover:text-green-600 hover:underline" to="/contact">
              Contact
            </Link>
            <Link className="text-red-900 hover:text-green-600 hover:underline" to="/blog">
              Blog
            </Link>
            <Link className="text-red-900 hover:text-green-600 hover:underline" to="/ingredient">
              Ingredients
            </Link>
          </div>
        </div>

        {/* Cart and User Login */}
        <div className="flex justify-center items-center gap-7">
          {/* Cart */}
          <div className="flex justify-center items-center gap-2">
           <FaShoppingBag className="text-3xl text-red-950 hover:text-green-700" />
            <p className="hover:underline hover:text-green-700 cursor-pointer">Cart</p>
          </div>

          {/* User Login */}
          <div className="flex justify-center items-center gap-2">
            {/* <img src={userlight} className="h-[40px]" alt="User Icon" /> */}
            <FaUserAlt className="text-3xl text-red-950 hover:text-green-700" />
            <p className="hover:underline hover:text-green-700 cursor-pointer">Login</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
