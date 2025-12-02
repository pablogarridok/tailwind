import { useState } from "react";

export default function Tamagotchi() {
  const [intelecto, setIntelecto] = useState(50);
  const [oratoria, setOratoria] = useState(50);
  const [energia, setEnergia] = useState(50);
  const [agobiado, setAgobiado] = useState(0);

  const promedio = (intelecto + oratoria + energia) / 3;

  let imagen = "/img/serio.gif";
  if (agobiado >= 20) imagen = "/img/fumando.gif";
  else if (promedio >= 70) imagen = "/img/contento.gif";
  else if (promedio >= 50) imagen = "/img/serio.gif";
  else imagen = "/img/triste.gif";

  function leer() {
    setIntelecto((v) => Math.min(100, v + 20));
    setOratoria((v) => Math.max(0, v - 5));
    setEnergia((v) => Math.max(0, v - 5));
    setAgobiado((v) => v + 1);
  }

  function debatir() {
    setOratoria((v) => Math.min(100, v + 20));
    setEnergia((v) => Math.max(0, v - 15));
    setIntelecto((v) => Math.max(0, v - 10));
    setAgobiado(0);
  }

  function meditar() {
    setEnergia((v) => Math.min(100, v + 30));
    setOratoria((v) => Math.max(0, v - 5));
    setAgobiado(0);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl w-[400px] p-6">
        {/* Imagen */}
        <div className="flex justify-center mb-6">
          <img
            src={imagen}
            alt="personaje"
            className="w-80 h-80 object-contain transition-all duration-300"
          />
        </div>

        {/* Barras */}
        <div className="space-y-4">
          <Bar titulo="Intelecto" color="bg-green-500" valor={intelecto} />
          <Bar titulo="Oratoria" color="bg-blue-500" valor={oratoria} />
          <Bar titulo="Energía Vital" color="bg-yellow-500" valor={energia} />
        </div>

        {/* Botones */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={leer}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold"
          >
            Leer Pergamino
          </button>

          <button
            onClick={debatir}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold"
          >
            Debatir
          </button>

          <button
            onClick={meditar}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-semibold"
          >
            Meditar
          </button>
        </div>
      </div>
    </div>
  );
}

function Bar({ titulo, color, valor }) {
  return (
    <div>
      <p className="font-bold text-base mb-1">{titulo}</p>
      <div className="w-full bg-gray-200 rounded h-4">
        <div
          className={`${color} h-4 rounded transition-all duration-300`}
          style={{ width: `${valor}%` }}
        ></div>
      </div>
    </div>
  );
}
