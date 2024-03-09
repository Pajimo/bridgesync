// interface Route {
//   path: string;
//   Component: React.FC;
//   name?: string;
// }

import LandingPage from "../pages/landing";

const routes = [
  {
    path: "/",
    Component: LandingPage,
    name: "Home",
  },
  { path: "/*", Component: LandingPage, name: "Home" },
];

export default routes;
