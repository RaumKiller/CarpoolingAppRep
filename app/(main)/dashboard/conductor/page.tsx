"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RouteCard from "@/components/RouteCard";
import { getUserProfile } from "@/app/actions/auth";

export default function DashboardConductorPage() {
  const [activeTab, setActiveTab] = useState("resumen");
  const [isAddingCar, setIsAddingCar] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
     getUserProfile().then((res: any) => {
        if (res) setUserProfile(res);
     });
  }, []);

  // Vehículó dinámico del usuario
  const miVehiculo = userProfile?.placa ? {
      placa: userProfile.placa,
      marca: userProfile.marca,
      foto: "https://images.unsplash.com/photo-1590362891991-f7004f1418b7?q=80&w=800&auto=format&fit=crop", // Fallback HQ
      viajes: 0,
      puntosGanados: 0
  } : null;

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Encabezado */}
        <header className="flex flex-col md:flex-row justify-between items-center bg-base-100 p-6 md:p-8 rounded-[2rem] shadow-xl border border-base-200 gap-4">
          <div>
            <h1 className="text-3xl font-black text-neutral">Panel de Conductor</h1>
            <p className="text-neutral-content mt-1">Gestiona tus rutas, progreso y vehículos registrados.</p>
          </div>
          <div className="flex gap-4">
             <Link href="/publicar" className="btn btn-primary rounded-xl text-white shadow-lg shadow-primary/30">
               + Publicar Viaje
             </Link>
          </div>
        </header>

        {/* Custom Tabs */}
        <div className="flex gap-2 p-1 bg-base-100/60 rounded-2xl w-full sm:w-fit mx-auto md:mx-0 border border-base-300 backdrop-blur-sm shadow-sm overflow-x-auto">
           <button onClick={() => { setActiveTab('resumen'); setIsAddingCar(false); }} className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'resumen' ? 'bg-primary text-white shadow-md' : 'text-neutral-content hover:bg-base-200'}`}>Estadísticas y Viajes</button>
           <button onClick={() => setActiveTab('vehiculos')} className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'vehiculos' ? 'bg-primary text-white shadow-md' : 'text-neutral-content hover:bg-base-200'}`}>Mis Vehículos Registrados</button>
        </div>

        {activeTab === 'resumen' && (
          <div className="space-y-8 animate-in slide-in-from-left-4 duration-300">
            {/* Viajes Programados */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">Próximos Viajes</h2>
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

            {/* Tu Liga y Rendimiento */}
            <div className="pt-6">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">Tu Progreso de Conductor</h2>
               
               {/* Card de Liga a Todo el Ancho */}
               <div className="bg-linear-to-br from-base-100 to-base-200 p-6 xl:p-10 rounded-[2rem] shadow-xl border border-base-300 relative overflow-hidden group mb-6">
                     <div className="absolute top-0 right-0 p-6 opacity-10 blur-[2px] pointer-events-none group-hover:scale-110 transition-transform duration-1000 origin-center">
                        <span className="text-9xl">🥈</span>
                     </div>
                     <div className="relative z-10 w-full">
                        <div className="flex justify-between items-end mb-4">
                           <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-neutral-content mb-1">LIGA ACTUAL</p>
                              <h3 className="text-5xl font-black text-neutral flex items-center gap-2">
                                 Plata <span className="text-4xl">🥈</span>
                              </h3>
                           </div>
                           <div className="text-right">
                              <p className="text-4xl font-black text-primary">18<span className="text-xl text-neutral-content">/30</span></p>
                              <p className="text-xs font-semibold text-neutral-content uppercase">Viajes (Meta Oro)</p>
                           </div>
                        </div>
                        
                        {/* Progress Bar Creativa con Efecto Hover */}
                        <div className="w-full h-8 bg-base-300 rounded-full relative overflow-hidden mt-8 shadow-inner cursor-pointer group/bar">
                           <div className="absolute top-0 left-0 h-full bg-linear-to-r from-neutral to-primary rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3 w-[60%] group-hover/bar:w-[65%]">
                              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/bar:translate-x-full transition-transform duration-[1.5s] ease-in-out"></div>
                              <span className="text-xs font-bold text-primary-content relative z-10 group-hover/bar:scale-110 transition-transform text-shadow">60%</span>
                           </div>
                        </div>

                        <div className="flex justify-between mt-3 text-sm md:text-base font-semibold text-neutral-content">
                           <span>🥉 Bronce (15)</span>
                           <span className="text-primary font-bold">🥈 Plata (30)</span>
                           <span>🥇 Oro (50)</span>
                           <span>💎 Diamante (100)</span>
                        </div>
                     </div>
               </div>

               {/* Estadisticas rapidas en fila */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <label htmlFor="modal_ingresos" className="bg-base-100 p-6 xl:p-8 rounded-[2rem] shadow-md border border-base-300 flex flex-col justify-center cursor-pointer hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <p className="text-neutral-content font-semibold mb-1 text-center lg:text-left">Ingresos del Mes</p>
                            <p className="text-5xl font-black text-success text-center lg:text-left">$280k</p>
                            <p className="text-sm text-center lg:text-left text-primary mt-3 font-bold flex items-center justify-center lg:justify-start gap-1">Ver desglose detallado <span className="group-hover:translate-x-1 transition-transform">→</span></p>
                        </div>
                     </label>

                     <div className="bg-base-100 p-6 xl:p-8 rounded-[2rem] shadow-md border border-base-300 flex flex-col justify-center relative overflow-hidden group">
                        <p className="text-neutral-content font-semibold mb-1 text-center lg:text-left">Puntos Acumulados</p>
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 mt-1">
                           <p className="text-5xl font-black text-secondary">850</p>
                           <Link href="/recompensas" className="btn btn-outline btn-secondary rounded-xl w-full lg:w-auto shadow-sm group-hover:shadow-secondary/30">Canjear Tokens</Link>
                        </div>
                     </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'vehiculos' && (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-2">
                 <div>
                     <h2 className="text-3xl font-black text-neutral">Gestión de Flota</h2>
                     <p className="text-sm mt-1 text-neutral-content font-medium">Requisitos en AeroRuta: Mínimo 4 puertas, A/C y SOAT/Tecnomecánica vigente.</p>
                 </div>
                 {!isAddingCar && (
                    <button onClick={() => setIsAddingCar(true)} className="btn btn-primary rounded-xl text-white shadow-md w-full sm:w-auto">
                        + Añadir Vehículo
                    </button>
                 )}
             </div>

             {isAddingCar ? (
                 <div className="bg-base-100 border border-base-300 rounded-[2rem] p-6 sm:p-8 shadow-xl animate-in slide-in-from-bottom-8">
                     <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-neutral">Nuevo Vehículo</h3>
                        <button onClick={() => setIsAddingCar(false)} className="btn btn-sm btn-ghost btn-circle text-xl">✕</button>
                     </div>
                     <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAddingCar(false); alert('Vehículo simulado añadido con éxito.'); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="form-control">
                             <label className="label"><span className="label-text font-bold">Placa</span></label>
                             <input required type="text" placeholder="Ej. ABC123" className="input input-bordered focus:border-primary transition-colors bg-base-200" />
                           </div>
                           <div className="form-control">
                             <label className="label"><span className="label-text font-bold">Marca / Modelo / Año</span></label>
                             <input required type="text" placeholder="Ej. Renault Duster 2022" className="input input-bordered focus:border-primary transition-colors bg-base-200" />
                           </div>
                        </div>
                        
                        <div className="alert bg-secondary/10 border-secondary/20 text-secondary-content">
                           <span className="text-2xl">📸</span>
                           <div className="text-sm font-semibold">Garantía de Seguridad: Las fotos de tus documentos son confidenciales, sirven para asegurar a los pasajeros un vehículo verificado.</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                           <div className="form-control">
                              <label className="label"><span className="label-text font-bold">Foto del Vehículo Exterior</span></label>
                              <input required type="file" accept="image/*" capture="environment" className="file-input file-input-bordered file-input-primary w-full bg-base-200" />
                           </div>
                           <div className="form-control">
                              <label className="label"><span className="label-text font-bold">Tarjeta de Propiedad</span></label>
                              <input required type="file" accept="image/*" className="file-input file-input-bordered file-input-primary w-full bg-base-200" />
                           </div>
                           <div className="form-control">
                              <label className="label"><span className="label-text font-bold">SOAT Vigente</span></label>
                              <input required type="file" accept="image/*" className="file-input file-input-bordered file-input-primary w-full bg-base-200" />
                           </div>
                           <div className="form-control">
                              <label className="label"><span className="label-text font-bold">Revisión Técnico-Mecánica</span></label>
                              <input required type="file" accept="image/*" className="file-input file-input-bordered file-input-primary w-full bg-base-200" />
                           </div>
                           <div className="form-control md:col-span-2">
                              <label className="label"><span className="label-text font-bold">Licencia de Conducción (Ambos lados)</span></label>
                              <input required type="file" accept="image/*" multiple className="file-input file-input-bordered file-input-primary w-full bg-base-200" />
                           </div>
                        </div>

                        <div className="divider">Validaciones Requeridas</div>
                        <div className="flex flex-col gap-3 ml-2">
                           <label className="cursor-pointer flex items-center gap-3">
                             <input required type="checkbox" className="checkbox checkbox-primary" />
                             <span className="label-text font-medium text-neutral">Mi vehículo cuenta con mínimo 4 puertas y 4 asientos (Excluyendo al conductor).</span>
                           </label>
                           <label className="cursor-pointer flex items-center gap-3">
                             <input required type="checkbox" className="checkbox checkbox-primary" />
                             <span className="label-text font-medium text-neutral">Mi vehículo cuenta con sistema de Aire Acondicionado (A/C) funcional.</span>
                           </label>
                        </div>

                        <div className="flex gap-4 pt-4">
                           <button type="submit" className="btn btn-primary w-full text-white rounded-xl shadow-lg hover:scale-[1.02] transition-transform font-bold h-14">
                              Registrar y Archivar Vehículo
                           </button>
                        </div>
                     </form>
                 </div>
             ) : miVehiculo ? (
                 <div className="bg-base-100 border border-base-200 rounded-[2rem] p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6 relative overflow-hidden group">
                     {/* Placa badge */}
                     <div className="absolute top-0 right-0 bg-neutral text-neutral-content rounded-bl-2xl font-mono px-5 py-2 font-bold tracking-widest shadow-md z-10">
                        {miVehiculo.placa}
                     </div>
                     
                     {/* Car Image Area */}
                     <div className="w-full md:w-1/3 h-56 rounded-2xl overflow-hidden relative shadow-inner">
                         <img src={miVehiculo.foto} alt="Vehiculo" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute bottom-2 left-2 flex gap-2">
                            <span className="badge badge-success border-none font-bold text-xs shadow-md">Verificado</span>
                            <span className="badge badge-secondary border-none font-bold text-xs shadow-md">Activo</span>
                         </div>
                     </div>

                     {/* Car Data */}
                     <div className="w-full md:w-2/3 flex flex-col justify-between pt-2 pb-2">
                         <div>
                            <h3 className="text-3xl font-black text-neutral mb-2">{miVehiculo.marca}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                               <span className="bg-base-200 text-neutral font-semibold text-xs px-3 py-1 rounded-full border border-base-300">✅ SOAT Activo</span>
                               <span className="bg-base-200 text-neutral font-semibold text-xs px-3 py-1 rounded-full border border-base-300">✅ Tecno Al Día</span>
                               <span className="bg-base-200 text-neutral font-semibold text-xs px-3 py-1 rounded-full border border-base-300">❄️ A/C Múltiple</span>
                               <span className="bg-base-200 text-neutral font-semibold text-xs px-3 py-1 rounded-full border border-base-300">🚪 Mínimo 4 Puertas</span>
                            </div>
                         </div>
                         
                         <div className="flex gap-4 md:gap-8 bg-base-200/50 p-4 rounded-2xl border border-base-200/50 w-fit">
                             <div>
                                <p className="text-xs uppercase font-bold text-neutral-content tracking-wider">Viajes</p>
                                <p className="text-3xl font-black text-primary">{miVehiculo.viajes}</p>
                             </div>
                             <div className="w-px bg-base-300"></div>
                             <div>
                                <p className="text-xs uppercase font-bold text-neutral-content tracking-wider">Pts Aportados</p>
                                <p className="text-3xl font-black text-secondary flex items-center gap-1">{miVehiculo.puntosGanados} <span className="text-lg">⭐</span></p>
                             </div>
                         </div>
                     </div>
                 </div>
             ) : (
                <div className="alert">Cargando vehículo...</div>
             )}
          </div>
        )}
      </div>

      {/* MODAL de Resumen de Ingresos */}
      <input type="checkbox" id="modal_ingresos" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-[2rem] max-w-3xl bg-base-100 p-8 shadow-2xl">
             <div className="flex justify-between items-start mb-8">
                <div>
                   <h3 className="text-3xl font-black text-neutral tracking-tight">Resumen de Ingresos</h3>
                   <p className="text-neutral-content mt-1 text-sm font-medium">Detalle de tus viajes completados en Abril (Pre-Auth Capturada).</p>
                </div>
                <label htmlFor="modal_ingresos" className="btn btn-sm btn-circle btn-ghost text-neutral/50 hover:bg-base-200">✕</label>
             </div>
             
             <div className="overflow-x-auto border border-base-200 rounded-2xl mb-8 shadow-inner bg-base-50/50">
               <table className="table table-zebra w-full text-base">
                 <thead>
                   <tr className="bg-base-200/50 text-neutral font-bold border-b border-base-200">
                     <th className="py-4">Fecha</th>
                     <th className="py-4">Ruta (Origen → Destino)</th>
                     <th className="py-4">Pax Confirmados</th>
                     <th className="text-right py-4">Tu Captura Final</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td className="py-4 font-medium text-neutral-content">01 Abr</td>
                     <td className="py-4 font-semibold text-neutral">Bello → Aeropuerto JMC</td>
                     <td className="py-4"><span className="badge badge-success font-bold text-xs p-3">4/4 Lleno</span></td>
                     <td className="text-right font-black text-success py-4 text-lg">$120,000</td>
                   </tr>
                   <tr>
                     <td className="py-4 font-medium text-neutral-content">02 Abr</td>
                     <td className="py-4 font-semibold text-neutral">Aeropuerto JMC → Poblado</td>
                     <td className="py-4"><span className="badge badge-warning font-bold text-xs p-3">3/4 Mediano</span></td>
                     <td className="text-right font-black text-success py-4 text-lg">$105,000</td>
                   </tr>
                   <tr>
                     <td className="py-4 font-medium text-neutral-content">03 Abr</td>
                     <td className="py-4 font-semibold text-neutral">Sabaneta → Aeropuerto JMC</td>
                     <td className="py-4"><span className="badge badge-error font-bold text-xs p-3">2/4 Bajo</span></td>
                     <td className="text-right font-black text-success py-4 text-lg">$55,000</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             
             <div className="bg-linear-to-r from-success/5 to-success/10 border border-success/20 p-6 lg:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center shadow-sm">
                 <div>
                    <span className="text-sm font-bold tracking-widest uppercase text-success/70">Total Transferido</span>
                    <h4 className="text-2xl font-black text-neutral">Mes de Abril</h4>
                 </div>
                 <span className="text-5xl mt-2 sm:mt-0 font-black text-success drop-shadow-md">$280,000</span>
             </div>
             
             <div className="modal-action mt-8">
               <label htmlFor="modal_ingresos" className="btn btn-neutral rounded-xl px-10 h-12">Entendido</label>
             </div>
        </div>
        <label className="modal-backdrop bg-neutral/30 backdrop-blur-sm" htmlFor="modal_ingresos">Close</label>
      </div>

    </div>
  );
}
