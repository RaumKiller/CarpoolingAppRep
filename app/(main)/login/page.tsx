import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300 transform transition-all animate-in fade-in zoom-in-95 duration-500 rounded-3xl">
        <div className="card-body p-8">
           <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                 </svg>
              </div>
              <h1 className="text-3xl font-black text-neutral">Bienvenido</h1>
              <p className="text-neutral-content mt-2">Inicia sesión en AeroRuta</p>
           </div>
           
           <form className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text font-bold">Correo electrónico</span></label>
                <input type="email" placeholder="correo@ejemplo.com" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Contraseña</span>
                  <a href="#" className="label-text-alt link tracking-wide link-primary">¿Olvidaste tu contraseña?</a>
                </label>
                <input type="password" placeholder="••••••••" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
              </div>

              <button className="btn btn-primary w-full mt-6 shadow-lg hover:scale-[1.02] transition-transform text-white rounded-xl">
                 Iniciar Sesión
              </button>
           </form>

           <div className="divider mt-8">O</div>

           <div className="text-center">
              <p className="text-sm text-neutral-content">¿Aún no tienes cuenta?</p>
              <Link href="/registro" className="btn btn-outline w-full mt-4 rounded-xl hover:bg-neutral hover:text-white">
                 Regístrate
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
