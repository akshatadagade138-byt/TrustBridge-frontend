import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blogs from "@/pages/Blogs";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Disclaimer from "@/pages/Disclaimer";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/site/ScrollToTop";

function App() {
  return (
    <div className="App font-sans antialiased text-ink bg-ivory">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#3B2A24",
              color: "#FAF8F6",
              border: "1px solid rgba(176,141,87,0.3)",
              fontFamily: "Manrope, sans-serif",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
