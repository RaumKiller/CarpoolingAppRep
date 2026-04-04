import React from "react";
import Link from "next/link";

export default function RecompensasPage() {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Cabecera Puntos */}
        <div className="bg-gradient-to-r from-secondary-focus to-secondary text-secondary-content p-8 rounded-[2rem] shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-black mb-2">Sistema de Recompensas</h1>
            <p className="text-lg opacity-90 mb-6">Cada vez que viajas o públicas de manera exitosa, ganas puntos para redimir.</p>
            <div className="inline-block bg-base-100 p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform">
               <p className="text-neutral-content text-sm font-bold uppercase tracking-widest">Tus Puntos</p>
               <p className="text-6xl font-black text-secondary">1,240 <span className="text-2xl text-secondary/50">pts</span></p>
            </div>
          </div>
        </div>

        {/* Recompensas */}
        <h2 className="text-2xl font-bold mb-4 mt-10">🚀 Canjea tus puntos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-secondary transition-all">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">☕</div>
              <h3 className="card-title">Café en Aeropuerto</h3>
              <p className="text-sm text-neutral-content">Válido en Juan Valdez del JMC.</p>
              <div className="mt-4 font-bold text-secondary">500 pts</div>
              <button className="btn btn-secondary w-full mt-2">Canjear</button>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-secondary transition-all opacity-50 relative">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">🏷️</div>
              <h3 className="card-title">10% Off Viaje</h3>
              <p className="text-sm text-neutral-content">Descuento de la comisión en el próximo viaje como pasajero.</p>
              <div className="mt-4 font-bold text-secondary">800 pts</div>
              <button className="btn btn-secondary w-full mt-2" disabled>Insuficientes</button>
            </div>
            <div className="absolute inset-0 bg-base-200/50 backdrop-blur-[1px] flex items-center justify-center rounded-2xl z-10 hidden"></div>
          </div>
          <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-secondary transition-all">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">🅿️</div>
              <h3 className="card-title text-center">15 min Parqueadero</h3>
              <p className="text-sm text-neutral-content">Descuento en zona de descarga del aeropuerto.</p>
              <div className="mt-4 font-bold text-secondary">1,000 pts</div>
              <button className="btn btn-secondary w-full mt-2">Canjear</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
