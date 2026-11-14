import { Routes, Route } from "react-router";
import Hero from "./pages/Hero/page";
import Header from "./pages/Header/page";
import About from "./pages/About/page";
import Skills from "./pages/Skills/page";
import Experience from "./pages/Experience/page";
import Projects from "./pages/Projects/page";
import Contact from "./pages/Contact/page";
import Education from "./pages/Education/Education";
import Certificates from "./pages/Certificates/page";
import { Analytics } from "@vercel/analytics/react";
export default function App() {
  return (
    <>
      <div className="dark-theme">
        <Header />
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route
            path="*"
            element={
              <>
                <Hero />
                <About />
              </>
            }
          />
        </Routes>
      </div>
            <Analytics />
    </>
  );
}
