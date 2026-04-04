import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-neutral text-neutral-content flex flex-col h-full shadow-2xl">
      <div className="p-6 flex items-center gap-3 bg-neutral-focus border-b border-neutral-content/10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <h1 className="text-xl font-bold tracking-tight">AdminPanel</h1>
          <p className="text-xs text-primary/80 font-mono">AeroRuta Core</p>
        </div>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-2">
        <Link href="/dashboard/admin" className="btn btn-ghost justify-start uppercase text-xs font-bold tracking-wider opacity-60 hover:opacity-100">
          General
        </Link>
        <Link href="#" className="btn btn-ghost justify-start gap-3">
          <span className="text-xl">📊</span> Estadísticas
        </Link>
        <Link href="#" className="btn btn-ghost justify-start gap-3">
          <span className="text-xl">👥</span> Usuarios
        </Link>
        <Link href="#" className="btn btn-ghost justify-start gap-3">
          <span className="text-xl">🚘</span> Conductores
        </Link>
        <Link href="#" className="btn btn-ghost justify-start gap-3">
          <span className="text-xl">🗺️</span> Viajes Activos
        </Link>
        <Link href="#" className="btn btn-ghost justify-start gap-3">
          <span className="text-xl">💰</span> Comisiones
        </Link>
      </nav>

      <div className="p-4 border-t border-neutral-content/10">
        <Link href="/" className="btn btn-outline btn-primary w-full gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
