import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Features from "./pages/features/Features";
import Main from "./pages/main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="features" element={<Features />} />
          </Route>
          <Route path="main" element={<Main/>}>
          
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
