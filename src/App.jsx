/*
Name: Patrick Sullivan
Date: 4/17/2026
File: app.jsx
Description: Main app layout and route definitions
*/
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
import ContactPage from "./pages/contactpage";
import AboutPage from "./pages/aboutpage";
import NotFoundPage from "./pages/notfoundpage";
import ServerErrorPage from "./pages/servererrorpage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/500" element={<ServerErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;