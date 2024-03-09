import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { useAppDispatch } from "../../hooks/reduxDispatch";
import { apiRegisterUser } from "../../services/apiCalls/auth";
import colors from "../../theme/color";
const UserSignup = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastNamne] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setStatus("loading");
    dispatch(
      apiRegisterUser(
        { email, password, firstName, lastName },
        setError,
        setMessage,
        setStatus
      )
    );
  };

  useEffect(() => {
    if (status === "success") {
      setStatus("idle");
      // navigate("/user/chatbots");
    }
  }, [status]);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        <div
          className="text-2xl font-bold text-gray-900 pl-8 flex gap-4 items-center cursor-pointer"
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
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 ">
          <h1
            className={`text-center font-medium text-xl ${
              error ? "text-red-500" : "text-green-500"
            }`}
          >
            {error ? error : message}
          </h1>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label
                htmlFor="firstname"
                className="text-lg text-gray-600 block"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder=""
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="text-lg text-gray-600 block">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder=""
                value={lastName}
                onChange={(e) => setLastNamne(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
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
            <div>
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
                {status === "loading" ? "" : "Sign up"}
              </button>
            </div>
            <div className="text-center">
              <h1 className="text-lg">
                Already have an account?{" "}
                <Link
                  to="/auth/user/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
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
    </>
  );
};

export default UserSignup;
