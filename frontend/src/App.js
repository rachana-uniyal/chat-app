import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route,Routes } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>} exact />
      <Route path="/chats" element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;