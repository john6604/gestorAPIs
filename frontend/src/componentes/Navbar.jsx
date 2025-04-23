import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, LogIn, UserPlus } from "lucide-react";
import logoUazuay from "../assets/logoUazuay.png";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(null);
  const [scrollActivo, setScrollActivo] = useState(false);

  const toggleMenu = (menu) => {
    setMenuAbierto((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const manejarScroll = () => {
      setScrollActivo(window.scrollY > 0);
    };
    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const MenuDropdown = ({ nombre, opciones }) => (
    <div className="relative">
      <button
        onClick={() => toggleMenu(nombre)}
        className="flex items-center gap-1 px-4 py-2 rounded-md text-white hover:bg-[#005f99] transition"
      >
        {nombre} <ChevronDown size={16} />
      </button>
      <div
        className={`absolute top-full right-0 w-56 bg-white rounded-md shadow-lg border transition-all duration-200 overflow-hidden ${
          menuAbierto === nombre
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {opciones.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 transition"
            onClick={() => setMenuAbierto(null)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollActivo
          ? "bg-[#0077ba]/90 backdrop-blur-md shadow-md"
          : "bg-[#0077ba]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        <Link to="/">
          <img
            src={logoUazuay}
            alt="Universidad del Azuay"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex gap-4 items-center">
          <MenuDropdown
            nombre="APIs"
            opciones={[
              { to: "/apis", label: "Ver APIs" },
              { to: "/crear", label: "Crear API" },
              { to: "/modificar", label: "Modificar API" },
              { to: "/eliminar", label: "Eliminar API" },
            ]}
          />
          <MenuDropdown
            nombre="Usuarios"
            opciones={[
              { to: "/registro", label: "Registrar Usuario" },
              { to: "/validar", label: "Validar Usuario" },
              { to: "/perfil", label: "Mi Perfil" },
            ]}
          />
          <MenuDropdown
            nombre="Permisos"
            opciones={[
              { to: "/permiso/publico", label: "Cambiar a Público" },
              { to: "/permiso/privado", label: "Cambiar a Privado" },
              { to: "/permiso/restringido", label: "Cambiar a Restringido" },
            ]}
          />
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="flex items-center gap-1 text-white px-4 py-2 rounded-lg hover:bg-[#00509e] transition"
          >
            <LogIn size={16} />
            Iniciar Sesión
          </Link>
          <Link
            to="/registro"
            className="bg-white text-[#0077ba] px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-1 font-medium"
          >
            <UserPlus size={16} />
            Registrarse
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
