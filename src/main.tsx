import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Attributions from "./components/footers/page/Attributions";
import ShoutOuts from "./components/footers/page/ShoutOuts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="/shout-outs" element={<ShoutOuts />} />
    </Routes>
  </BrowserRouter>
);
