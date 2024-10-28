import "./App.css";
import Navbar from "./navbar";
import GameCrad from "./gameCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviewPage from "./previewPage";
import About from "./about";
import ContactUs from "./contactUs";
import PrivacyPolicy from "./privacyPolicy";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GameCrad />} />
          <Route path="/preview/:id" element={<PreviewPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <div className="">
          {" "}
          <ScrollToTop
            smooth
            color="white"
            className="!rounded-full !flex !items-center !justify-center !w-16 !h-16 !bg-indigo-950 "
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
