import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

const App = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 min-h-screen">

    <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-[-10%] left-[-10%] z-0" />
    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-[-10%] right-[-10%] z-0" />

    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        }/>
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  </div>
);

export default App;
