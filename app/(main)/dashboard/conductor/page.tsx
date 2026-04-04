import React from "react";
import Link from "next/link";
import RouteCard from "@/components/RouteCard";

export default function DashboardConductorPage() {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Encabezado */}
        <header className="flex flex-col md:flex-row justify-between items-center bg-base-100 p-6 md:p-8 rounded-[2rem] shadow-xl border border-base-200 gap-4">
          <div>
            <h1 className="text-3xl font-black text-neutral">Mis Viajes (Conductor)</h1>
            <p className="text-neutral-content mt-1">Gestiona tus rutas publicadas y pasajeros.</p>
          </div>
          <div className="flex gap-4">
             <Link href="/publicar" className="btn btn-primary rounded-xl text-white shadow-lg shadow-primary/30">
               + Publicar Nuevo
             </Link>
          </div>
        </header>

        {/* Viajes Programados */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
             Próximos Viajes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RouteCard 
              origin="Aeropuerto JMC" 
              destination="Terminal Norte" 
              date="Mañana, 4 de Abril" 
              time="06:00" 
              driverName="Mateo Ruiz (Tú)" 
              price="$18,500" 
              availableSeats={1} 
            />
          </div>
        </div>

        {/* Resumen de actividad */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
              <p className="text-neutral-content font-semibold mb-1">Ingresos Estimados</p>
              <p className="text-3xl font-black text-primary">$55.500</p>
              <p className="text-xs mt-2 text-success">Pasajeros pre-autorizados: 3</p>
            </div>
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
              <p className="text-neutral-content font-semibold mb-1">Puntos Acumulados</p>
              <p className="text-3xl font-black text-secondary">850</p>
              <p className="text-xs mt-2 text-secondary-content">Nivel Plata</p>
            </div>
            <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
              <p className="text-neutral-content font-semibold mb-1">Valoración Media</p>
              <p className="text-3xl font-black text-warning">4.9 ★</p>
              <p className="text-xs mt-2 text-neutral-content">De 24 opiniones</p>
            </div>
         </div>

      </div>
    </div>
  );
}
