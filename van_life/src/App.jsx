import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";

function App() {
  return (
    <article className="max-w-3/5 mx-auto">
      <header className="h-28 flex items-center py-2.5 px-8">
        <Link className="mr-auto text-2xl" to="/">
          #VANLIFE
        </Link>
        <nav className="flex gap-4">
          <Link className="text-xl" to="/about">
            About
          </Link>
          <Link className="text-xl" to="/vans">
            Vans
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </article>
  );
}

export default App;
