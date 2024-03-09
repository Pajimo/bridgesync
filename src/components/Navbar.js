import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDashboardNav } from "../redux/reducers/userState/Dashboard/dashboard";
import { useAppDispatch, useAppSelector } from "../hooks/reduxDispatch";
import colors from "../theme/color";
import { FaArrowRight } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { apiLogoutUser } from "../services/apiCalls/auth";

const LandingLinks = [
  { name: "Pricing", route: "/pricing" },
  { name: "Features", route: "features" },
];
const LoggedInLinks = [
  // { name: "Dashboard", route: "/user/dashboard" },
  { name: "ChatBot", route: "/user/chatbots" },
  { name: "Conversations", route: "/user/chatbot/conversations" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  const { currentDashboardNav } = useAppSelector((s) => s.userDashboard);
  const { isAuthenticated } = useAppSelector((s) => s.userProfile);

  return (
    <>
      <header className={` p-4 sm:p-6 relative`}>
        <div className="flex  items-center justify-between max-w-7xl mx-auto">
          {/* Logo and Title */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/bridgesync.png"
              alt="Logo"
              className="h-8 w-8 mr-2 sm:h-40 sm:w-40"
            />
          </div>

          <div
            className={`absolute top-full left-0 w-full z-50 sm:static sm:w-auto sm:flex sm:space-x-4 hidden sm:block ${
              isMobileMenuOpen ? "flex" : "hidden"
            } flex-col sm:flex-row`}
          >
            <div className="text-white px-1 py-4 md:bg-black rounded-lg md:px-6">
              <Link to="/auth/user/login"> TRY FOR FREE</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute inset-0 z-50 bg-gradient-to-r from-[#2F4F4F] via-cyan-900 to-teal-900 text-white`}
        >
          <div className="flex justify-between items-center px-4 pt-6">
            {/* Logo and Title */}
            <div className="flex items-center" onClick={() => navigate("/")}>
              <img
                src="/img/logo/i-5.png"
                alt="Logo"
                className="h-12 w-12 mr-2 sm:h-10 sm:w-10"
              />
              <span className="text-white text-lg sm:text-xl font-bold">
                INTELLIVER
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white"
              >
                <FaXmark size={25} />
              </button>
            </div>
          </div>
          <nav className="px-4 pt-6 pb-4 space-y-1">
            {(isAuthenticated ? LoggedInLinks : LandingLinks).map(
              (navLinks) => {
                return (
                  <p
                    key={navLinks.name}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
                  >
                    <Link to={navLinks.route}>{navLinks.name}</Link>
                  </p>
                );
              }
            )}
            <div
              onClick={() => dispatch(apiLogoutUser(navigate))}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
            >
              Logout
            </div>
            <div className="text-white px-3 py-2 flex items-center justify-between ">
              {isAuthenticated ? (
                <Link to="/user/account">Account</Link>
              ) : (
                <Link to="/auth/user/login"> Free Trial</Link>
              )}
              <div className="">
                <FaArrowRight />
              </div>
            </div>
          </nav>
        </div>

        {/* Optional: Overlay when mobile menu is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-gradient-to-r from-[#2F4F4F] via-cyan-900 to-teal-900 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </header>
    </>
  );
};

export default Navbar;
