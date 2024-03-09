const Modal = ({ children }) => {
  return (
    <div
      className=" justify-center flex items-center h-screen"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="bg-white z-50 py-10 px-10 rounded-xl">{children}</div>
    </div>
  );
};

export default Modal;
