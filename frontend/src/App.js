// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar      from "./componentes/Navbar";
import Footer      from "./componentes/Footer";
import Home        from "./componentes/Home";
import Apis        from "./pages/Apis";
import CrearApi    from "./pages/CrearApi";
import Login       from "./pages/Login";
import Registro    from "./pages/Registro";
import APIDetail   from "./pages/APIDetail";
import Dashboard   from "./pages/Dashboard";

function App() {
  return (
    <Router>
      {/* Contenedor flex-column que ocupa toda la pantalla */}
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar fijo arriba */}
        <Navbar />

        {/* Main crece y ocupa todo el espacio sobrante */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/"         element={<Home      />} />
            <Route path="/apis"     element={<Apis      />} />
            <Route path="/crear"    element={<CrearApi   />} />
            <Route path="/login"    element={<Login     />} />
            <Route path="/registro" element={<Registro  />} />
            <Route path="/api/:id"  element={<APIDetail />} />
            <Route path="/dashboard"element={<Dashboard/>} />
          </Routes>
        </main>

        {/* Footer siempre “pegado” abajo */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
