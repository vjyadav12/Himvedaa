import { Link } from "react-router-dom";
import img from "../../assets/ChatGPT Image Jul 18, 2025, 12_21_52 PM.png";
import Logo from "../../assets/final logo.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div className="h-[100vh] bg-white w-[100vw] flex justify-evenly items-start border-5">
        {/* Left hand side  */}
        <div className="w-[50vw] h-[100vh] flex flex-col justify-center items-start pl-[160px] gap-7 ">
          {/* logo */}
          <div className="mt-[-40px]">
            <img src={Logo} alt="Company logo" className="h-[120px] " />
          </div>
          <br />

          {/* Heading Or Text */}
          <div className=" flex flex-col gap-1">
            <h3 className="font-bold text-2xl">Hello,</h3>
            <h1 className="font-bold text-4xl">Welcome Back</h1>
            <p className="text-gray-500">
              Hey welcome back to your special place
            </p>
          </div>

          {/* input Fields */}
          <div className="flex flex-col gap-3 w-[30vw]">
            <input
              type="text"
              placeholder="Enter Your Email here"
              className="border-1 text-gray-500 rounded-xl p-2"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border-1 text-gray-500 rounded-xl p-2"
            />

            {/* remember me and forgot password */}
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[12px]">Remember</p>
              </div>

              <p className="text-[12px] cursor-pointer hover:underline hover:decoration-1"><Link to="/forgotPassword">Forgot Password?</Link></p>
            </div>

            {/* Sign In button */}
            <button className="p-2 w-full bg-green-600 text-white font-bold rounded-xl">
              {" "}
              Sign In
            </button>

            {/* hr Line */}
            <div className="flex items-center gap-4 w-full text-gray-400 my-2">
              <hr className="flex-grow border-t border-gray-400" />
              <span className="text-sm">or</span>
              <hr className="flex-grow border-t border-gray-400" />
            </div>

            {/* google icon and text */}
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-2">
                <FcGoogle /> Sign in with Google
              </div>
              <p>
                Don't have any account ?{" "}
                <Link to="/register" className="text-green-500">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right hand side  */}
        <div className="w-[50vw] h-[100vh] p-[34px]  ">
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

export default Login;
