"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "../../actions/auth";

export default function RegistroPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    role: "pasajero",
    cedula: "",
    foto: "",
    // Vehículo opcional para conductor
    placa: "",
    marca: "",
    tarjetaPropiedad: "",
    soat: "",
    licencia: "",
    tecnomecanica: "",
    fotoVehiculo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Guardamos simulación del nombre del archivo
      if (e.target.files && e.target.files[0]) {
          setFormData({ ...formData, [e.target.name]: e.target.files[0].name });
      }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 2 && formData.role === "conductor") {
      setStep(3); // Conductor va a paso de vehículos
      return;
    }

    setLoading(true);
    const res = await registerUser(formData);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      router.push(res.role === "conductor" ? "/dashboard/conductor" : "/dashboard/pasajero");
      router.refresh();
    }
  };


  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl border border-base-300 transform transition-all animate-in fade-in zoom-in-95 duration-500 rounded-3xl">
        <div className="card-body p-8 sm:p-10">
           <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-neutral">Crear Cuenta</h1>
              <p className="text-neutral-content mt-2">Únete a la movilidad sostenible de Antioquia</p>
              
              <ul className="steps steps-horizontal mt-6 w-full max-w-sm mx-auto">
                <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>Datos</li>
                <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>Identidad</li>
                {formData.role === "conductor" && <li className={`step ${step >= 3 ? 'step-primary' : ''}`}>Vehículo</li>}
              </ul>
           </div>
           
           {error && <div className="alert alert-error mb-4 font-bold text-sm py-2">{error}</div>}

           <form className="space-y-4" onSubmit={handleSubmit}>
              
              {step === 1 && (
                <div className="animate-in slide-in-from-right-8 duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label"><span className="label-text font-bold">Nombre</span></label>
                      <input name="nombre" value={formData.nombre} onChange={handleChange} required type="text" placeholder="Ej. Carlos" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
                    </div>
                    <div className="form-control">
                      <label className="label"><span className="label-text font-bold">Apellidos</span></label>
                      <input name="apellidos" value={formData.apellidos} onChange={handleChange} required type="text" placeholder="Ej. Pérez" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Correo electrónico</span></label>
                    <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="correo@ejemplo.com" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
                  </div>
                  
                  <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Contraseña</span></label>
                    <input name="password" value={formData.password} onChange={handleChange} required type="password" placeholder="Mínimo 8 caracteres" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
                  </div>

                  <div className="form-control mt-6">
                    <label className="label"><span className="label-text font-bold">¿Cómo usarás la app?</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className={`cursor-pointer border border-base-300 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors bg-base-200 hover:bg-primary/5 relative ${formData.role === 'pasajero' ? 'border-primary ring-2 ring-primary bg-primary/10' : ''}`}>
                         <span className="text-3xl">🧍</span>
                         <span className="font-bold text-neutral">Pasajero</span>
                         <span className="text-xs text-center text-neutral-content">Busco viajes al aeropuerto.</span>
                         <input type="radio" name="role" value="pasajero" onChange={handleChange} checked={formData.role === 'pasajero'} className="hidden" />
                      </label>
                      <label className={`cursor-pointer border border-base-300 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors bg-base-200 hover:bg-primary/5 relative ${formData.role === 'conductor' ? 'border-primary ring-2 ring-primary bg-primary/10' : ''}`}>
                         <span className="text-3xl">🚘</span>
                         <span className="font-bold text-neutral">Conductor</span>
                         <span className="text-xs text-center text-neutral-content">Ofrezco cupos en mi vehículo.</span>
                         <input type="radio" name="role" value="conductor" onChange={handleChange} checked={formData.role === 'conductor'} className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                 <div className="animate-in slide-in-from-right-8 duration-300">
                    <div className="form-control">
                      <label className="label"><span className="label-text font-bold">Número de Cédula (Seguridad)</span></label>
                      <input name="cedula" value={formData.cedula} onChange={handleChange} required type="text" placeholder="Ej. 10xxxxxxxx" className="input input-bordered w-full focus:border-primary transition-colors bg-base-200 focus:bg-base-100" />
                      <label className="label"><span className="label-text-alt text-neutral-content">Requerido por seguridad en la plataforma.</span></label>
                    </div>

                    <div className="form-control mt-4">
                      <label className="label"><span className="label-text font-bold">Selfie / Foto de Perfil {formData.role === 'conductor' && <span className="text-error">*</span>}</span></label>
                      <input type="file" name="foto" accept="image/*" capture="environment" onChange={handleFileChange} required={formData.role === 'conductor'} className="file-input file-input-bordered file-input-primary w-full bg-base-200" />
                      <label className="label"><span className="label-text-alt text-neutral-content">
                        {formData.role === 'conductor' ? 'Es OBLIGATORIO para conductores subir foto.' : 'Tomar foto usando tu dispositivo mejorará tu perfil (Opcional).'}
                      </span></label>
                    </div>

                    <button type="button" onClick={() => setStep(1)} className="btn btn-ghost w-full mt-2 text-sm">Volver al paso 1</button>
                 </div>
              )}

              {step === 3 && formData.role === "conductor" && (
                 <div className="animate-in slide-in-from-right-8 duration-300 space-y-4">
                    <div className="alert bg-primary/10 text-primary border-primary/20 mb-4 tracking-tight py-3">
                       <span className="text-xl">🚙</span>
                       <div>
                          <h3 className="font-bold text-sm">Registra tu Vehículo Base</h3>
                          <div className="text-xs">Aplica sólo min 4 puertas, 4 puestos y A/C. El registro del vehículo es <span className="font-bold underline text-error">OBLIGATORIO</span>.</div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="form-control">
                         <label className="label"><span className="label-text font-semibold text-xs">Placa</span></label>
                         <input name="placa" value={formData.placa} onChange={handleChange} required type="text" placeholder="XYZ123" className="input input-sm input-bordered" />
                       </div>
                       <div className="form-control">
                         <label className="label"><span className="label-text font-semibold text-xs">Marca/Modelo</span></label>
                         <input name="marca" value={formData.marca} onChange={handleChange} required type="text" placeholder="Ej. Mazda 2" className="input input-sm input-bordered" />
                       </div>
                    </div>

                    <div className="form-control">
                      <label className="label"><span className="label-text font-semibold text-xs">Foto del Vehículo</span></label>
                      <input type="file" name="fotoVehiculo" accept="image/*" capture="environment" onChange={handleFileChange} required className="file-input file-input-bordered file-input-sm w-full" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="form-control">
                         <label className="label"><span className="label-text font-semibold text-xs">Tarjeta Propiedad</span></label>
                         <input type="file" name="tarjetaPropiedad" accept="image/*" onChange={handleFileChange} required className="file-input file-input-bordered file-input-sm w-full" />
                       </div>
                       <div className="form-control">
                         <label className="label"><span className="label-text font-semibold text-xs">Licencia Conducción</span></label>
                         <input type="file" name="licencia" accept="image/*" onChange={handleFileChange} required className="file-input file-input-bordered file-input-sm w-full" />
                       </div>
                       <div className="form-control">
                         <label className="label"><span className="label-text font-semibold text-xs">SOAT</span></label>
                         <input type="file" name="soat" accept="image/*" onChange={handleFileChange} required className="file-input file-input-bordered file-input-sm w-full" />
                       </div>
                       <div className="form-control">
                         <label className="label"><span className="label-text font-semibold text-xs">Tecnomecánica</span></label>
                         <input type="file" name="tecnomecanica" accept="image/*" onChange={handleFileChange} required className="file-input file-input-bordered file-input-sm w-full" />
                       </div>
                    </div>

                    <div className="flex gap-2 mt-2">
                       <button type="button" onClick={() => setStep(2)} className="btn btn-ghost w-full">Volver al Paso Anterior</button>
                    </div>
                 </div>
              )}

              <button type="submit" disabled={loading} className={`btn btn-primary w-full mt-8 shadow-lg hover:scale-[1.02] transition-transform text-white rounded-xl h-14 text-lg ${step === 3 && 'mt-2'}`}>
                 {loading ? <span className="loading loading-spinner"></span> : 
                   (step === 1 ? "Siguiente Paso" : 
                    (step === 2 && formData.role === 'conductor' ? "Siguiente Paso" : "Finalizar Registro"))
                 }
              </button>

           </form>

           {step === 1 && (
             <div className="text-center mt-6">
                <p className="text-sm text-neutral-content">¿Ya tienes cuenta? <Link href="/login" className="link link-primary font-bold">Inicia Sesión</Link></p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
