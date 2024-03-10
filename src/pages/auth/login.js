import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxDispatch";
import colors from "../../theme/color";
import { apiLogInUser } from "../../services/apiCalls/auth";

const UserLogIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { isAuthenticated } = useAppSelector((s) => s.userProfile);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      setStatus("loading");
      // console.log("clicked");
      // Handle sign in logic here, such as calling an API
      dispatch(apiLogInUser({ email, password }, setStatus));
    } else {
      toast.error("Email and password required");
    }
  };

  useEffect(() => {
    if (status === "success") {
      setStatus("idle");
      navigate("/workspace");
    }
  }, [status]);
  return (
    <div className="min-h-screen">
      <ToastContainer />
      {/* <Wrapper> */}
      <div
        className="text-2xl font-bold text-gray-900 mt-2 pl-8 flex gap-4 items-center mt-6 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="bg-black rounded-lg">
          <img
            src="/bridgesync.png"
            alt="Logo"
            className="h-8 w-8 sm:h-28 sm:w-36"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-center font-medium text-xl">Welcome!</h1>
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white pt-4 px-8 pb-8 ">
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-lg text-gray-600 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="info@healthplusafrica.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-lg text-gray-600 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  placeholder="*******"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {passwordVisible ? <FaEyeLowVision /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-sm text-right">
                <a href="#" className="font-medium ">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                disabled={!email || !password}
                type="submit"
                className={`w-full p-2 text-white rounded-lg ${
                  status === "loading" && "loader"
                }`}
                style={{
                  backgroundColor:
                    email && password ? colors.primary : colors.gray,
                }}
              >
                {status === "loading" ? "" : "Sign in"}
              </button>
            </div>
            <div className="text-center">
              <h1 className="text-lg">
                Don’t have an account?{" "}
                <Link
                  to="/auth/user/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </Link>
              </h1>
            </div>
          </form>
        </div>
        <div className="max-w-md w-full mx-auto mt-6">
          <p className="mt-2 text-center text-sm text-gray-600">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      {/* </Wrapper> */}
    </div>
  );
};

export default UserLogIn;
