import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Apis from "./pages/Apis";
import CrearApi from "./pages/CrearApi";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import APIDetail from "./pages/APIDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
        <Routes>
          <Route path="/apis" element={<Apis />} />
          <Route path="/crear" element={<CrearApi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/api/:id" element={<APIDetail />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;