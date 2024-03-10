import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxDispatch";
import {
  apiFetchWorkspace,
  apiMessaging,
} from "../../../services/apiCalls/dashboard";
import { FiSend } from "react-icons/fi";
import { setActivePage } from "../../../redux/reducers/Dashboard/dashboard";

import mentionStyle from "./mentionStyle";
import { Mention, MentionsInput } from "react-mentions";
import mentionsInputStyle from "./mentionsInputStyle";
import TypingIndicator from "./typingIndicators";

const ChatWindow = () => {
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { workspace, activePage } = useAppSelector((s) => s.userDashboard);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { userProfile } = useAppSelector((s) => s.userProfile);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("idle");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const lastChar = msg[msg.length - 1];
    console.log(lastChar, "eww");
    if (lastChar === "@") {
      console.log(lastChar, "last");
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [msg]);

  const handleSuggestionClick = (name) => {
    setShowSuggestions(false);
    const newValue = msg.slice(0, -1) + name + " ";
    setMsg(newValue);
    inputRef.current.focus();
  };

  const processSendMsg = () => {
    dispatch(
      apiMessaging(
        {
          channelId: activePage?.id ? activePage?.id : activePage?._id,
          message: msg,
          userName: userProfile.firstName,
        },
        setStatus
      )
    );
  };

  const scrollToBottom = () => {
    const chatContainer = messagesEndRef.current;
    if (chatContainer) {
      // Set the scrollTop to the height of the container
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  useEffect(() => {
    const newActiveWhenNewWorkspace = workspace.channels.filter((channel) =>
      channel.name === activePage?.name
        ? activePage?.name
        : activePage?.firstName
    );
    // console.log(newActiveWhenNewWorkspace, "acrtw");
    dispatch(setActivePage(newActiveWhenNewWorkspace[0]));
    setMsg("");
    scrollToBottom();
  }, [workspace]);

  const fetchMessages = async () => {
    dispatch(apiFetchWorkspace());
  };

  //   console.log(showSuggestions, "show");

  const newUser = {
    _id: "01",
    firstName: "SyncAI",
    lastName: "",
    type: "",
    email: "",
    userId: "01",
  };

  //   useEffect(() => {
  //     fetchMessages(); // Initial fetch

  //     const interval = setInterval(fetchMessages, 10000); // Poll every 3 seconds

  //     return () => clearInterval(interval); // Cleanup on unmount
  //   }, []);

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
      <div ref={messagesEndRef} className="flex-1 grow overflow-scroll p-4">
        {activePage?.messages?.map((msg, index) => {
          return (
            msg.role !== "system" && (
              <div className="py-1 border-b border-gray-100" key={index}>
                <p className="font-semibold">
                  {index > 0 &&
                  activePage.messages[index - 1].name === msg?.name
                    ? ""
                    : msg?.name}
                </p>
                <p className="text-gray-500 text-sm mt-1">{msg?.content}</p>
              </div>
            )
          );
        })}
      </div>
      {/* Chat input field */}
      <div>{status === "loading" && <TypingIndicator />}</div>

      <div className="mt-4 flex ">
        <div className="w-full relative">
          {showSuggestions && (
            <div className="absolute bottom-14 mt-1 z-50 w-96 bg-gray-200 shadow-lg max-h-60 overflow-auto">
              {[...workspace.members, newUser]?.map((user) => (
                <div
                  key={user.id}
                  className="px-4 py-2 hover:bg-green-900 hover:text-white cursor-pointer"
                  onClick={() => handleSuggestionClick("@" + user.firstName)}
                >
                  {user.firstName}
                </div>
              ))}
            </div>
          )}
          <input
            ref={inputRef}
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            nBlur={() => setShowSuggestions(false)}
            onFocus={() =>
              msg[msg.length - 1] === "@" && setShowSuggestions(true)
            }
            className="w-full p-2 border rounded-md"
            placeholder={`Message ${
              activePage?.type === "channels" ? "#" : ""
            } ${
              activePage?.name
                ? activePage?.name
                : activePage?.firstName + " " + activePage?.lastName
            }`}
          />
        </div>
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
