const Button = ({ children, loading, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className} py-2 px-4 ${
        props.disabled && !loading ? "bg-gray-500" : "bg-black"
      } text-white rounded hover:bg-gray-900 ${loading && "loader"}`}
    >
      {loading ? "" : children}
    </button>
  );
};

export default Button;
