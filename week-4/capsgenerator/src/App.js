import "./App.css";
import CapsList from "./components/CapsList";
import Caps from "./components/CapsCard";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CapsList />} />
        <Route path="caps:id" element={<Caps />} />
    </Routes>
    </div>
  );
}

export default App;
