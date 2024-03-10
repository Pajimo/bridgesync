import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxDispatch";
import { apiMessaging } from "../../../services/apiCalls/dashboard";
import { FiSend } from "react-icons/fi";

const ChatWindow = () => {
  const { workspace, activePage } = useAppSelector((s) => s.userDashboard);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("idle");
  const dispatch = useAppDispatch();
  const processSendMsg = () => {
    dispatch(
      apiMessaging(
        {
          channelId: activePage?.id ? activePage?.id : activePage?._id,
          message: msg,
        },
        setStatus
      )
    );
  };
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
        {activePage?.messages?.map((msg, index) => {
          return (
            <div className="py-1 border-b" key={index}>
              <p className="text-lg">{msg?.name}</p>
              <p className="text-gray-500">{msg?.content}</p>
            </div>
          );
        })}
      </div>
      {/* Chat input field */}
      <div className="mt-4 flex ">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder={`Message ${activePage?.type === "channels" ? "#" : ""} ${
            activePage?.name
              ? activePage?.name
              : activePage?.firstName + " " + activePage?.lastName
          }`}
        />
        <button
          className="bg-cyan-700 text-white rounded-r-md px-4 hover:bg-blue-600"
          onClick={processSendMsg}
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
