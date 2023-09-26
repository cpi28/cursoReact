
import "./App.css";
import Header from "./components/Navbar";
import Main from "./routes/Home";
import Footer from "./components/Footer";
import Contacto from "./routes/Contacto";
import Detalle from "./routes/Detalle";
import About from "./routes/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/detalle/:id" element={<Detalle/>}/>
          <Route path="/acercade" element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
