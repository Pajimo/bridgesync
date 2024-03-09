// interface Route {
//   path: string;
//   Component: React.FC;
//   name?: string;
// }

import UserLogIn from "../pages/auth/login";
import UserSignup from "../pages/auth/signup";
import LandingPage from "../pages/landing";

const routes = [
  {
    path: "/",
    Component: LandingPage,
    name: "Home",
  },
  { path: "/*", Component: LandingPage, name: "Home" },
  {
    path: "/auth/user/login",
    Component: UserLogIn,
    name: "User Login",
  },
  {
    path: "/auth/user/signup",
    Component: UserSignup,
    name: "User Signup",
  },
];

export default routes;
