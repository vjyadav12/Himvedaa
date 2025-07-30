import { Link } from "react-router-dom";
import img from "../../assets/ChatGPT Image Jul 18, 2025, 12_21_52 PM.png";
import Logo from "../../assets/final logo.png";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <>
      <div className="h-[100vh] bg-white w-[100vw] flex flex-col md:flex-row justify-evenly items-start ">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] h-[100vh] flex flex-col justify-center items-start px-10 md:pl-[160px] gap-7">
          {/* Logo */}
          <div className="mt-[-40px]">
            <img src={Logo} alt="Company logo" className="h-[120px]" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl">Sign up</h1>
            <p className="text-gray-500">Sign Up to Continue</p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="border-1 text-gray-500 rounded-xl p-2 flex-1"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-1 text-gray-500 rounded-xl p-2 flex-1"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border-1 text-gray-500 rounded-xl p-2"
            />
            <input
              type="password"
              placeholder="Strong Password"
              className="border-1 text-gray-500 rounded-xl p-2"
            />

            {/* Remember me */}
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[12px]">Remember</p>
              </div>
            </div>

            <button className="p-2 w-full bg-green-600 text-white font-bold rounded-2xl">
              Sign up
            </button>

            <hr className="text-gray-400" />

            {/* Google Sign In and Link */}
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-2">
                <FcGoogle /> Sign in with Google
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-green-500">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section - Hidden on small screens */}
        <div className="hidden md:block w-[50vw] h-[100vh] p-[34px]">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
