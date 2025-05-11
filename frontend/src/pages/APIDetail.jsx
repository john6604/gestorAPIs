import React, { useState } from "react";
import {
  Settings,
  Users,
  Lock,
  Code2,
  Search,
} from "lucide-react";
import DashboardNavbar from "../componentes/DashboardNavbar";

const tabs = [
  { id: "api", label: "API", icon: Code2 },
  { id: "settings", label: "Configuración", icon: Settings },
  { id: "colaborators", label: "Colaboradores", icon: Users },
  { id: "permissions", label: "Permisos", icon: Lock },
];

const APIDetail = () => {
  const [activeTab, setActiveTab] = useState("api");
  const [searchQuery, setSearchQuery] = useState("");

  const [apiData, setApiData] = useState({
    name: "Clasificador de Imágenes",
    description: "API que clasifica imágenes en categorías.",
    endpoint: "/api/clasificador",
    method: "POST",
    parameters: [
      {
        name: "image",
        type: "file",
        required: true,
        description: "Imagen a clasificar",
      },
    ],
    returns: "Categoría de la imagen",
    example: `POST /api/clasificador\n{ image: <archivo> }`,
    visibility: "private",
    collaborators: [
      { id: 1, name: "Ana López", email: "ana@example.com" },
      { id: 2, name: "Carlos Pérez", email: "carlos@example.com" },
      { id: 3, name: "Lucía Gómez", email: "lucia@example.com" },
    ],
  });

  const handleRemoveCollaborator = (id) => {
    // Aquí iría tu llamada a la API o lógica de actualización
    console.log("Eliminar colaborador:", id);
  };
  
  const handleAddCollaborator = () => {
    // Aquí iría la lógica para buscar y añadir colaborador
    console.log("Añadir colaborador:", searchQuery);
  };

  const isOwner = true;

  return (
    <>
      <DashboardNavbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Menú</h2>
          </div>
          <nav className="flex flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 text-left text-sm hover:bg-gray-100 border-l-4 ${
                  activeTab === tab.id
                    ? "font-semibold bg-gray-50 border-blue-500 text-blue-600"
                    : "border-transparent text-gray-700"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-10">
          {activeTab === "api" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">{apiData.name}</h2>
              <p className="mb-2">{apiData.description}</p>
              <div className="bg-white rounded-xl shadow p-4 mb-4">
                <h3 className="font-semibold">Endpoint:</h3>
                <code>{apiData.endpoint}</code>
              </div>
              <div className="bg-white rounded-xl shadow p-4 mb-4">
                <h3 className="font-semibold">Parámetros:</h3>
                <ul className="list-disc ml-5">
                  {apiData.parameters.map((param, index) => (
                    <li key={index}>
                      <strong>{param.name}</strong> ({param.type}) – {param.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-4 mb-4">
                <h3 className="font-semibold">Retorna:</h3>
                <p>{apiData.returns}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4">
                <h3 className="font-semibold">Ejemplo de uso:</h3>
                <pre className="bg-gray-100 p-2 rounded whitespace-pre-line">
                  {apiData.example}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Configuración General */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuración de la API
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      defaultValue={apiData.name}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Descripción</label>
                    <textarea
                      defaultValue={apiData.description}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Endpoint</label>
                      <input
                        type="text"
                        defaultValue={apiData.endpoint}
                        readOnly
                        className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Método</label>
                      <select
                        defaultValue={apiData.method}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Guardar cambios
                    </button>
                  </div>
                </form>
              </div>

              {/* Danger Zone */}
              <div className="bg-white p-6 rounded-xl shadow border border-red-300">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Zona de peligro</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Esta acción eliminará permanentemente esta API del sistema. Esta operación no se puede deshacer.
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  Eliminar API
                </button>
              </div>
            </div>
          )}

          {activeTab === "colaborators" && (
              <div className="bg-white p-6 rounded-xl shadow border space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Colaboradores</h3>
            
              {/* Lista de colaboradores */}
              <div className="space-y-4">
                {apiData.collaborators.map((collab) => (
                  <div
                    key={collab.id}
                    className="flex items-center justify-between bg-gray-50 border rounded-md p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
                        {collab.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{collab.name}</p>
                        <p className="text-sm text-gray-500">{collab.email}</p>
                      </div>
                    </div>
                    {isOwner && (
                      <button
                        onClick={() => handleRemoveCollaborator(collab.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Eliminar colaborador"
                      >
                        Eliminar
                      </button>
                    )}
                  </div>
                ))}
              </div>
            
              {/* Añadir colaborador */}
              <div className="pt-4 border-t space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Añadir colaborador
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar por nombre o correo"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <Search size={18}/>
                  </span>
                </div>
                <button
                  onClick={handleAddCollaborator}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Añadir
                </button>
              </div>
            </div>
          )}

          {activeTab === "permissions" && (
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Permisos de Visibilidad
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="public"
                    name="visibility"
                    value="public"
                    checked={apiData.visibility === "public"}
                    onChange={(e) =>
                      setApiData({ ...apiData, visibility: e.target.value })
                    }
                  />
                  <label htmlFor="public" className="text-sm font-medium text-gray-700">
                    Pública – Cualquiera puede acceder a esta API.
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="private"
                    name="visibility"
                    value="private"
                    checked={apiData.visibility === "private"}
                    onChange={(e) =>
                      setApiData({ ...apiData, visibility: e.target.value })
                    }
                  />
                  <label htmlFor="private" className="text-sm font-medium text-gray-700">
                    Privada – Solo tú y tus colaboradores pueden acceder.
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="restricted"
                    name="visibility"
                    value="restricted"
                    checked={apiData.visibility === "restricted"}
                    onChange={(e) =>
                      setApiData({ ...apiData, visibility: e.target.value })
                    }
                  />
                  <label
                    htmlFor="restricted"
                    className="text-sm font-medium text-gray-700"
                  >
                    Restringida – Acceso privado pero se puede compartir con enlace.
                  </label>
                </div>

                {apiData.visibility === "restricted" && (
                  <div className="pt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enlace de acceso
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        readOnly
                        value={`https://midominio.com/api/share/${apiData.endpoint}`}
                        className="w-full rounded-l-md border border-gray-300 px-3 py-2 bg-gray-50 text-sm"
                      />
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            `https://midominio.com/api/share/${apiData.endpoint}`
                          )
                        }
                        className="px-4 bg-blue-600 text-white text-sm rounded-r-md hover:bg-blue-700"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Guardar permisos
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default APIDetail;