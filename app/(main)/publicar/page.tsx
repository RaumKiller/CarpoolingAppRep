import React from "react";

export default function PublicarPage() {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-black text-neutral mb-2 flex items-center justify-center md:justify-start gap-3">
            <span className="p-2 bg-secondary/10 rounded-xl">🚗</span> Publicar un Viaje
          </h1>
          <p className="text-neutral-content">Lleva pasajeros en tu ruta al Aeropuerto JMC y comparte los gastos del viaje.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formulario */}
          <div className="lg:col-span-2 bg-base-100 p-6 md:p-8 rounded-[2rem] shadow-xl border border-base-200">
            <form className="space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold border-b border-base-200 pb-2">Ruta</h3>
                
                <div className="form-control">
                  <label className="label font-semibold">Punto de Origen</label>
                  <select className="select select-bordered bg-base-100 hover:border-primary focus:border-primary transition-colors text-base" defaultValue="">
                    <option disabled value="">Selecciona el origen exacto</option>
                    <option value="TERMINAL_NORTE">Terminal del Norte</option>
                    <option value="TERMINAL_SUR">Terminal del Sur</option>
                    <option value="AEROPUERTO">Aeropuerto JMC</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label font-semibold">Punto de Destino</label>
                  <select className="select select-bordered bg-base-100 hover:border-primary focus:border-primary transition-colors text-base" defaultValue="">
                    <option disabled value="">Selecciona el destino exacto</option>
                    <option value="TERMINAL_NORTE">Terminal del Norte</option>
                    <option value="TERMINAL_SUR">Terminal del Sur</option>
                    <option value="AEROPUERTO">Aeropuerto JMC</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold border-b border-base-200 pb-2">Detalles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label font-semibold">Fecha</label>
                    <input type="date" className="input input-bordered bg-base-100 focus:border-primary" />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Hora de salida</label>
                    <input type="time" className="input input-bordered bg-base-100 focus:border-primary" />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label font-semibold">Cupos Disponibles</label>
                  <div className="join">
                    <input className="join-item btn bg-base-200 hover:bg-base-300 pointer-events-none" type="radio" name="options" aria-label="1" />
                    <input className="join-item btn bg-base-200 hover:bg-base-300 pointer-events-none" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn bg-base-200 hover:bg-base-300" type="radio" name="options" aria-label="3" defaultChecked />
                    <input className="join-item btn bg-base-200 hover:bg-base-300" type="radio" name="options" aria-label="4" />
                  </div>
                </div>
              </div>
              
              {/* Cálculo dinámico de tarifa Mock */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 my-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-2xl text-primary">💵</span>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-70">Cálculo de Tarifa Dinámica (Estimado)</p>
                  <p className="text-xs mt-1">El backend usará Google Maps Distance Matrix. Precio base por trayecto dividido entre n pasajeros. Si no se llena, la app asume un pequeño recargo por asiento vacío.</p>
                </div>
                <div className="text-right sm:ml-auto w-full sm:w-auto">
                  <p className="text-sm text-neutral-content">Cobro por pto</p>
                  <p className="text-2xl font-black text-primary">~$18.500</p>
                </div>
              </div>

              <button className="btn btn-primary w-full h-14 rounded-xl text-white shadow-lg lg:text-lg">
                Publicar Viaje
              </button>
            </form>
          </div>

          {/* Panel Lateral Reglas */}
          <div className="space-y-6">
            <div className="bg-base-100 rounded-3xl p-6 shadow-sm border border-base-200">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-warning text-xl">⚠️</span> Reglas de Recogida
              </h4>
              <ul className="space-y-3 text-sm text-neutral-content">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  Al seleccionar "Terminal Norte" o "Aeropuerto JMC" como origen, <b>no puedes desviarte</b> para recoger pasajeros en el camino.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  Espera en el punto exacto asignado por la plataforma.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  El precio de la app está ajustado para ser justo tanto para ti como para tus pasajeros de acuerdo a los gastos del vehículo.
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-3xl p-6 border border-secondary/20">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-secondary-focus">
                <span>🏆</span> Ganas 200 Puntos
              </h4>
              <p className="text-sm text-secondary-content">Al publicar este viaje y completarlo con éxito sumarás puntos de Gamificación en la plataforma.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
