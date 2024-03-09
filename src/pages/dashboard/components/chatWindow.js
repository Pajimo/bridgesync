import { useAppSelector } from "../../../hooks/reduxDispatch";

const ChatWindow = () => {
  const { workspace, activePage } = useAppSelector((s) => s.userDashboard);
  return (
    <div className="flex flex-col w-full p-4 justify-between">
      <div className="bg-white p-4 rounded-lg shadow-lg flex-grow overflow-scroll">
        <div className="mb-2 text-lg font-semibold flex gap-2 items-center">
          {activePage?.type === "channels" && <p className="text-2xl">#</p>}
          {activePage?.name}
        </div>

        {/* Chat messages would go here */}
      </div>
      {/* Chat input field */}
      <div className="mt-4">
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder={`Message ${activePage?.type === "channels" ? "#" : ""} ${
            activePage?.name
          }`}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
