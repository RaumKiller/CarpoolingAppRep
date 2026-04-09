import React from "react";
import Link from "next/link";
import RouteCard from "@/components/RouteCard";

export default function DashboardPasajeroPage() {
   return (
      <div className="min-h-screen bg-base-200 py-10 px-4">
         <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">

            {/* Encabezado */}
            <header className="flex flex-col md:flex-row justify-between items-center bg-base-100 p-6 md:p-8 rounded-[2rem] shadow-xl border border-base-200 gap-4">
               <div>
                  <h1 className="text-3xl font-black text-neutral">Mis Viajes (Pasajero)</h1>
                  <p className="text-neutral-content mt-1">Gestiona tus reservas pendientes e historial.</p>
               </div>
               <div className="flex gap-4">
                  <Link href="/buscar" className="btn btn-primary rounded-xl text-white shadow-lg shadow-primary/30">
                     Buscar Viaje
                  </Link>
               </div>
            </header>

            {/* Reservas Activas */}
            <div className="bg-primary/5 rounded-[2rem] p-6 lg:p-8 border border-primary/20">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-primary">🎟️</span> Próximos Viajes
               </h2>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <RouteCard
                     origin="Terminal Sur, Medellín"
                     destination="Aeropuerto JMC"
                     date="Mañana, 4 de Abril"
                     time="14:30"
                     driverName="Carlos Pérez"
                     price="$22,500"
                     availableSeats={1}
                  />
               </div>
               <div className="mt-6 flex flex-col md:flex-row justify-between items-center bg-base-100 p-4 rounded-xl border border-warning/20">
                  <div className="flex items-center gap-2">
                     <span className="text-warning">💳</span>
                     <span className="text-sm font-semibold">Pre-autorización confirmada:</span>
                  </div>
                  <span className="text-sm text-neutral-content mt-2 md:mt-0">El cobro de $22,500 será procesado minutos antes del viaje.</span>
               </div>
            </div>

            {/* Tu Liga y Rendimiento */}
            <div className="pt-6">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">Tu Nivel y Desempeño</h2>

               {/* Card de Liga Pasajero a Todo el Ancho */}
               <div className="bg-gradient-to-br from-base-100 to-base-200 p-6 xl:p-10 rounded-[2rem] shadow-xl border border-secondary/20 relative overflow-hidden group mb-6">
                  <div className="absolute top-0 right-0 p-6 opacity-10 blur-[2px] pointer-events-none group-hover:scale-110 transition-transform duration-1000 origin-center">
                     <span className="text-9xl">🥉</span>
                  </div>
                  <div className="relative z-10 w-full">
                     <div className="flex justify-between items-end mb-4">
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest text-neutral-content mb-1">LIGA ACTUAL</p>
                           <h3 className="text-5xl font-black text-neutral flex items-center gap-2">
                              Bronce <span className="text-4xl">🥉</span>
                           </h3>
                        </div>
                        <div className="text-right">
                           <p className="text-4xl font-black text-secondary">8<span className="text-xl text-neutral-content">/10</span></p>
                           <p className="text-xs font-semibold text-neutral-content uppercase">Viajes (Meta Plata)</p>
                        </div>
                     </div>

                     {/* Progress Bar Creativa Hover Effect */}
                     <div className="w-full h-8 bg-base-300 rounded-full relative overflow-hidden mt-8 shadow-inner hover:ring-4 ring-secondary/20 transition-all cursor-pointer group/bar">
                        <div
                           className="absolute top-0 left-0 h-full bg-linear-to-r from-secondary/50 to-secondary rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3 w-[80%] group-hover/bar:w-[85%]"
                        >
                           <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/bar:translate-x-full transition-transform duration-[1.5s] ease-in-out"></div>
                           <span className="text-xs font-bold text-secondary-content relative z-10 group-hover/bar:scale-110 transition-transform">80%</span>
                        </div>
                     </div>

                     <div className="flex justify-between mt-3 text-sm md:text-base font-semibold text-neutral-content">
                        <span className="text-secondary font-bold">🥉 Bronce (10)</span>
                        <span>🥈 Plata (20)</span>
                        <span>🥇 Oro (30)</span>
                        <span>💎 Diamante (50)</span>
                     </div>
                  </div>
               </div>

               {/* Estadisticas rapidas en fila */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-base-100 p-6 xl:p-8 rounded-[2rem] shadow-md border border-base-300 flex flex-col justify-center hover:shadow-xl hover:-translate-y-1 transition-all group cursor-default">
                     <p className="text-neutral-content font-semibold mb-1 text-center lg:text-left">Dinero Ahorrado</p>
                     <p className="text-5xl font-black text-success text-center lg:text-left">~$140k</p>
                  </div>
                  <div className="bg-base-100 p-6 xl:p-8 rounded-[2rem] shadow-md border border-base-300 flex flex-col justify-center relative overflow-hidden group">
                     <p className="text-neutral-content font-semibold mb-1 text-center lg:text-left">Puntos (Tokens)</p>
                     <div className="flex flex-col lg:flex-row items-center justify-between gap-2 mt-1">
                        <p className="text-5xl font-black text-secondary">320</p>
                        <Link href="/recompensas" className="btn btn-outline btn-secondary rounded-xl w-full lg:w-auto shadow-sm group-hover:shadow-secondary/30">Canjear Tokens</Link>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}
