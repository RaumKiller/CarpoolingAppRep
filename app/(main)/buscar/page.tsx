import RouteCard from "@/components/RouteCard";

export default function BuscarPage() {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">

        {/* Encabezado y Filtros */}
        <div className="bg-base-100 p-6 md:p-8 rounded-[2rem] shadow-xl border border-base-200">
          <h1 className="text-3xl font-black text-neutral mb-2">Encuentra tu ruta ideál</h1>
          <p className="text-neutral-content mb-6">Viaja desde Medellín al Aeropuerto JMC compartiendo gastos.</p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="form-control flex-1">
              <div className="flex items-center bg-base-200 rounded-xl p-3 focus-within:ring-2 ring-primary transition-all">
                <span className="text-xl mr-2">📍</span>
                <input type="text" placeholder="Origen" className="bg-transparent w-full outline-none text-neutral" defaultValue="Terminal Sur" />
              </div>
            </div>
            <div className="form-control flex-1">
              <div className="flex items-center bg-base-200 rounded-xl p-3 focus-within:ring-2 ring-primary transition-all">
                <span className="text-xl mr-2">✈️</span>
                <input type="text" placeholder="Destino" className="bg-transparent w-full outline-none text-neutral" defaultValue="Aeropuerto JMC" />
              </div>
            </div>
            <div className="form-control md:w-48">
              <div className="flex items-center bg-base-200 rounded-xl p-3 focus-within:ring-2 ring-primary transition-all">
                <span className="text-xl mr-2">📅</span>
                <input type="date" className="bg-transparent w-full outline-none text-neutral" defaultValue="2026-04-03" />
              </div>
            </div>
            <button className="btn btn-primary h-12 md:w-32 rounded-xl text-white">Buscar</button>
          </div>

          {/* Alerta de POI estricto */}
          <div className="mt-6 alert bg-warning/10 border border-warning/20 text-warning-content rounded-xl flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-warning shrink-0 h-6 w-6 mt-0.5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <div>
              <h3 className="font-bold">Aviso importante sobre recogidas</h3>
              <div className="text-sm">Si tu origen es Terminal Norte, Terminal Sur o Aeropuerto JMC, debes estar físicamente ahí. Los conductores no pueden desviarse de estos puntos principales.</div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="bg-primary/20 p-2 rounded-lg">🔍</span> Resultados de la búsqueda
            </h2>
            <select className="select select-bordered select-sm w-full max-w-xs bg-base-100">
              <option disabled selected>Ordenar por</option>
              <option>Precio más bajo</option>
              <option>Salida más temprana</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RouteCard
              origin="Terminal Sur, Medellín"
              destination="Aeropuerto JMC"
              date="Hoy, 3 de Abril"
              time="14:30"
              driverName="Carlos Pérez"
              price="$22,500"
              availableSeats={1}
            />
            <RouteCard
              origin="Terminal Sur, Medellín"
              destination="Aeropuerto JMC"
              date="Hoy, 3 de Abril"
              time="15:15"
              driverName="Andrés Silva"
              price="$18,000"
              availableSeats={3}
            />
            <RouteCard
              origin="Terminal Sur, Medellín"
              destination="Aeropuerto JMC"
              date="Hoy, 3 de Abril"
              time="16:00"
              driverName="María González"
              price="$24,000"
              availableSeats={2}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
