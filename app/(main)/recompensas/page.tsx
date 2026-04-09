"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RecompensasPage() {
  const [activeTab, setActiveTab] = useState<'conductor' | 'pasajero'>('conductor');
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

        {/* Selector de Perfil (Tabs) */}
        <div className="flex justify-center mb-8">
           <div role="tablist" className="tabs tabs-boxed bg-base-100 shadow-md p-1 rounded-2xl w-full max-w-sm">
             <a role="tab" className={`tab h-12 transition-all rounded-xl font-bold ${activeTab === 'conductor' ? 'bg-primary text-primary-content' : 'hover:bg-base-200'}`} onClick={() => setActiveTab('conductor')}>🚍 Modo Conductor</a>
             <a role="tab" className={`tab h-12 transition-all rounded-xl font-bold ${activeTab === 'pasajero' ? 'bg-secondary text-secondary-content' : 'hover:bg-base-200'}`} onClick={() => setActiveTab('pasajero')}>🎒 Modo Pasajero</a>
           </div>
        </div>

        <div className="min-h-[400px]">
          {/* Recompensas Conductores */}
          {activeTab === 'conductor' && (
            <div className="animate-in slide-in-from-left-8 fade-in flex-1 duration-500">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                  🚘 Tus Beneficios Operativos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary transition-all rounded-3xl hover:-translate-y-2">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">☕</div>
                      <h3 className="card-title text-base">Café en Aeropuerto</h3>
                      <div className="mt-2 font-black text-primary">250 pts</div>
                      <button className="btn btn-primary rounded-xl btn-sm w-full mt-4">Canjear</button>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary transition-all rounded-3xl hover:-translate-y-2">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">🫧</div>
                      <h3 className="card-title text-base flex-1">Lavada Full</h3>
                      <div className="mt-2 font-black text-primary">800 pts</div>
                      <button className="btn btn-primary rounded-xl btn-sm w-full mt-4">Canjear</button>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary transition-all rounded-3xl hover:-translate-y-2">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">⛽</div>
                      <h3 className="card-title text-base flex-1">10% Dcto Tanqueada</h3>
                      <div className="mt-2 font-black text-primary">1,000 pts</div>
                      <button className="btn btn-primary rounded-xl btn-sm w-full mt-4">Canjear</button>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl border border-base-200 transition-all rounded-3xl opacity-60 grayscale hover:grayscale-0">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">🔧</div>
                      <h3 className="card-title text-base flex-1">Dcto Cambio Aceite</h3>
                      <div className="mt-2 font-black text-neutral-content">2,000 pts</div>
                      <button className="btn btn-neutral rounded-xl btn-sm w-full mt-4" disabled>Insuficientes</button>
                    </div>
                  </div>
                </div>
            </div>
          )}

          {/* Recompensas Pasajeros */}
          {activeTab === 'pasajero' && (
            <div className="animate-in slide-in-from-right-8 fade-in flex-1 duration-500">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-secondary">
                  🎒 Tus Recompensas de Viaje
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-secondary transition-all rounded-3xl hover:-translate-y-2">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">☕</div>
                      <h3 className="card-title text-base">Café en Aeropuerto</h3>
                      <div className="mt-2 font-black text-secondary">250 pts</div>
                      <button className="btn btn-secondary rounded-xl btn-sm w-full mt-4">Canjear</button>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-secondary transition-all rounded-3xl hover:-translate-y-2">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">🏷️</div>
                      <h3 className="card-title text-base flex-1">10% Dcto Próximo Viaje</h3>
                      <div className="mt-2 font-black text-secondary">600 pts</div>
                      <button className="btn btn-secondary rounded-xl btn-sm w-full mt-4">Canjear</button>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-secondary transition-all rounded-3xl hover:-translate-y-2">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">✈️</div>
                      <h3 className="card-title text-base shrink flex-1">5% Dcto Ticket Aéreo</h3>
                      <div className="mt-2 font-black text-secondary">1,000 pts</div>
                      <button className="btn btn-secondary rounded-xl btn-sm w-full mt-4">Canjear</button>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl border border-base-200 transition-all rounded-3xl opacity-60 grayscale hover:grayscale-0 relative">
                    <div className="card-body items-center text-center p-6">
                      <div className="text-4xl mb-2">💺</div>
                      <h3 className="card-title text-base flex-1">Asiento GRATIS</h3>
                      <div className="mt-2 font-black text-neutral-content">3,000 pts</div>
                      <button className="btn btn-neutral rounded-xl btn-sm w-full mt-4" disabled>Insuficientes</button>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
