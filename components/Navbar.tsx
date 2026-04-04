import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
            <li><Link href="/buscar">Buscar Viaje</Link></li>
            <li><Link href="/publicar">Publicar Viaje</Link></li>
            <li><Link href="/recompensas">Mis Puntos</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-black text-primary gap-2 flex items-center hover:bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          AeroRuta
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-base">
          <li><Link href="/buscar" className="hover:text-primary transition-colors">Buscar Viaje</Link></li>
          <li><Link href="/publicar" className="text-secondary font-semibold hover:text-secondary-focus transition-colors">Publicar Viaje</Link></li>
          <li><Link href="/recompensas" className="flex items-center gap-1 text-accent font-medium hover:text-accent-focus transition-colors">🏆 Mis Puntos</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-2 text-sm sm:text-base">
        <Link href="/login" className="btn btn-ghost font-medium hidden sm:inline-flex">Iniciar Sesión</Link>
        <Link href="/registro" className="btn btn-primary rounded-full px-4 sm:px-6 text-white font-semibold shadow-md shadow-primary/20">Regístrate</Link>
      </div>
    </div>
  );
}
