import Navbar from "./Navbar";

const Wrapper = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-blue-500 h-screen">
      <Navbar />
      <div>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Wrapper;
