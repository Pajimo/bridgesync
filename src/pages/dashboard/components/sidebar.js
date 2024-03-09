import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxDispatch";
import { setActivePage } from "../../../redux/reducers/Dashboard/dashboard";

const Sidebar = ({ name, channelsList, members }) => {
  const tempChannels = [
    { name: "general", id: "Tks3wdefa", type: "channels" },
    { name: "product", id: "Tks3wdefb", type: "channels" },
  ];

  const worskpaceMemebers = [
    { name: "Anjolaoluwa Adeleke", id: "Tks3wdefc", type: "member" },
    { name: "Temitope Alabi", id: "Tks3wdefd", type: "member" },
  ];

  const dispatch = useAppDispatch();
  const { workspace, activePage } = useAppSelector((s) => s.userDashboard);

  // taking id
  const [active, setActive] = useState("");

  const processChangeChannel = (section) => {
    dispatch(setActivePage(section));
  };

  return (
    <div className="w-64 bg-gray-800 p-4 text-white">
      <div className="font-bold mb-4 text-xl">{name ? name : "Workspace"}</div>
      <div className="mt-10">
        <div className=" text-lg">{name ? name : "Channels"}</div>
        <div className="my-4 text-sm">
          {tempChannels?.map((channel) => {
            return (
              <div
                className={`px-2 py-1 flex gap-2 items-center ${
                  activePage?.id === channel?.id && "bg-cyan-600 rounded-xl"
                }`}
                key={channel.id}
                onClick={() => processChangeChannel(channel)}
              >
                <p className="text-2xl font-normal">#</p>
                <p>{channel?.name}</p>
              </div>
            );
          })}
          <div className="pt-2">
            <p>Add channels</p>
          </div>
        </div>
        <div className=" text-lg mb-4 mt-10">{"Direct messages"}</div>
        <div className="text-sm truncate">
          {worskpaceMemebers?.map((member) => {
            return (
              <div
                className={`p-2 flex flex-nowrap gap-2 items-center  ${
                  activePage?.id === member?.id && "bg-cyan-600 rounded-xl"
                }`}
                key={member?.id}
                onClick={() => processChangeChannel(member)}
              >
                <p>{member?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
