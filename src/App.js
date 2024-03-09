import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
          {/* <div className="fixed w-[500px] z-[1000] bottom-2 right-0 z-[99999999]">
            <ChatbotUI />
          </div> */}
          {/* <iframe
            src="https://www.chatbase.co/chatbot-iframe/FshpCnQJkOuhijqLezg1Q"
            width="100%"
            style={{ height: "100%", minHeight: "700" }}
            frameborder="0"
          ></iframe> */}
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
