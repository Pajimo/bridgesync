import ChatWindow from "./components/chatWindow";
import Sidebar from "./components/sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default Dashboard;
