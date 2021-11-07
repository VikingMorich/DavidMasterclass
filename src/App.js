import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import Welcome from "./Welcome"
import Starter from "./Starter"

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/starter" element={<Starter/>} />
        </Routes>
      </Router>
  );
}