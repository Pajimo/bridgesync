import { useAppSelector } from "../../../hooks/reduxDispatch";

const ChatWindow = () => {
  const { workspace, activePage } = useAppSelector((s) => s.userDashboard);
  return (
    <div className="flex flex-col h-screen w-full p-4 shadow-lg">
      <div className="bg-white p-4 rounded-lg shadodw-lg flex-groxw ">
        <div className="pb-2 text-lg font-semibold flex gap-2 items-center border-b border-gray-200 ">
          {activePage?.type === "channels" && <p className="text-2xl">#</p>}
          {activePage?.name
            ? activePage?.name
            : activePage?.firstName + " " + activePage?.lastName}
        </div>

        {/* Chat messages would go here */}
      </div>
      <div className="flex-1 grow overflow-scroll p-4">
        {activePage?.messages?.map((msg) => {
          return (
            <div className="py-1 ">
              <p className="text-lg">{msg?.name}</p>
              {msg?.text}
            </div>
          );
        })}
      </div>
      {/* Chat input field */}
      <div className="mt-4">
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder={`Message ${activePage?.type === "channels" ? "#" : ""} ${
            activePage?.name
              ? activePage?.name
              : activePage?.firstName + " " + activePage?.lastName
          }`}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
