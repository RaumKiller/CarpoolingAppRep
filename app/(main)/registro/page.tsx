import React from "react";
import Link from "next/link";

export default function RegistroPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl border border-base-300 transform transition-all animate-in fade-in zoom-in-95 duration-500 rounded-3xl">
        <div className="card-body p-8 sm:p-10">
           <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-neutral">Crear Cuenta</h1>
              <p className="text-neutral-content mt-2">Únete a la movilidad sostenible de Antioquia</p>
           </div>
           
           <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">Nombre</span></label>
                  <input type="text" placeholder="Ej. Carlos" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-bold">Apellidos</span></label>
                  <input type="text" placeholder="Ej. Pérez" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Correo electrónico</span></label>
                <input type="email" placeholder="correo@ejemplo.com" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
              </div>
              
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Contraseña</span></label>
                <input type="password" placeholder="Mínimo 8 caracteres" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
              </div>

              <div className="form-control mt-6">
                <label className="label"><span className="label-text font-bold">¿Cómo usarás la app?</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="cursor-pointer border border-base-300 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors bg-base-200 hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:ring-2 ring-primary relative">
                     <span className="text-3xl">🧍</span>
                     <span className="font-bold text-neutral">Pasajero</span>
                     <span className="text-xs text-center text-neutral-content">Busco viajes al aeropuerto.</span>
                     <input type="radio" name="role" className="hidden" defaultChecked />
                  </label>
                  <label className="cursor-pointer border border-base-300 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors bg-base-200 hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:ring-2 ring-primary relative">
                     <span className="text-3xl">🚘</span>
                     <span className="font-bold text-neutral">Conductor</span>
                     <span className="text-xs text-center text-neutral-content">Ofrezco cupos en mi vehículo.</span>
                     <input type="radio" name="role" className="hidden" />
                  </label>
                </div>
              </div>

              <button className="btn btn-primary w-full mt-8 shadow-lg hover:scale-[1.02] transition-transform text-white rounded-xl h-14 text-lg">
                 Registrarme
              </button>
           </form>

           <div className="text-center mt-6">
              <p className="text-sm text-neutral-content">¿Ya tienes cuenta? <Link href="/login" className="link link-primary font-bold">Inicia Sesión</Link></p>
           </div>
        </div>
      </div>
    </div>
  );
}
