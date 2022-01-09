import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/component/ui/nav";
import { Routes, Route, Link, Navigation } from "react-router-dom";
import Home from "../src/component/pages/home";
import Reset from "../src/component/pages/reset";
import Forms from "../src/component/pages/forms";
import Contact from "../src/component/pages/contact";
import Formstate from "../src/component/pages/formstate";
import WatchMood from "../src/component/pages/watch";
import ResetField from "../src/component/pages/resetfield";
export default function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset/*" element={<Reset />} >
          <Route path="resetfield" element={<ResetField/>} />
        </Route>
        <Route path="/forms" element={<Forms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formstate" element={<Formstate />} />
        <Route path="/watch" element={<WatchMood />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}
