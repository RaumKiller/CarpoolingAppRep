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

        {/* Resumen de actividad */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">         
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
              <p className="text-neutral-content font-semibold mb-1">Puntos Acumulados</p>
              <p className="text-3xl font-black text-secondary">320</p>
              <p className="text-xs mt-2 text-secondary-content">Nivel Bronce</p>
              <Link href="/recompensas" className="mt-4 btn btn-sm btn-outline btn-secondary w-full">Canjear</Link>
            </div>
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
               <p className="text-neutral-content font-semibold mb-1">Dinero Ahorrado</p>
               <p className="text-3xl font-black text-success">~$140.000</p>
               <p className="text-xs mt-2 text-neutral-content">Cálculo respecto a viajas en Taxi privado</p>
            </div>
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
              <p className="text-neutral-content font-semibold mb-1">Huella de Carbono</p>
              <p className="text-3xl font-black text-accent">14 kg</p>
              <p className="text-xs mt-2 text-neutral-content">De CO2 evitados compartiendo viaje</p>
            </div>
         </div>

      </div>
    </div>
  );
}
