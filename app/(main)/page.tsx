import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200">
      
      {/* Hero Section */}
      <div className="hero min-h-[75vh]" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")'}}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center flex-col w-full max-w-5xl mt-8">
          
          {/* Headline */}
          <div className="max-w-3xl mb-12 transform transition-all hover:scale-105 duration-500">
            <h1 className="mb-6 text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-xl tracking-tight">
              Hacia el <span className="text-secondary">JMC</span>,<br className="hidden md:block"/> juntos y sostenibles
            </h1>
            <p className="mb-5 text-xl lg:text-2xl text-gray-100 font-medium drop-shadow-md">
              Ahorra dinero, reduce tu huella de carbono y gana <span className="text-accent font-bold">puntos</span> compartiendo tu viaje entre Medellín y el Aeropuerto.
            </p>
          </div>

          {/* Search Card / Form */}
          <div className="card w-full bg-base-100 shadow-2xl p-6 md:p-8 text-base-content rounded-[2rem] border border-base-200 transition-all hover:shadow-primary/10">
            <h2 className="text-2xl font-bold mb-6 text-left text-neutral flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Encuentra tu próximo viaje
            </h2>
            <form className="flex flex-col lg:flex-row gap-4">
              
              {/* Origin */}
              <div className="form-control flex-1">
                <label className="label hidden"><span className="label-text">Origen</span></label>
                <div className="flex items-center bg-base-200 hover:bg-base-300 rounded-xl p-3 focus-within:ring-2 ring-primary bg-opacity-80 transition-all cursor-text h-14">
                  <span className="text-gray-500 pl-2 text-xl mr-2">🏙️</span>
                  <input type="text" placeholder="Origen (Ej. Terminal Norte o Sur)" className="bg-transparent w-full outline-none text-lg text-neutral" required />
                </div>
              </div>

              {/* Arrow separator (desktop only) */}
              <div className="hidden lg:flex items-center justify-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>

              {/* Destination */}
              <div className="form-control flex-1">
                <label className="label hidden"><span className="label-text">Destino</span></label>
                <div className="flex items-center bg-base-200 hover:bg-base-300 rounded-xl p-3 focus-within:ring-2 ring-primary bg-opacity-80 transition-all cursor-text h-14">
                  <span className="text-gray-500 pl-2 text-xl mr-2">✈️</span>
                  <input type="text" placeholder="Destino (Ej. Aeropuerto JMC)" className="bg-transparent w-full outline-none text-lg text-neutral" required />
                </div>
              </div>

              {/* Date */}
              <div className="form-control flex-1">
                <label className="label hidden"><span className="label-text">Fecha</span></label>
                <div className="flex items-center bg-base-200 hover:bg-base-300 rounded-xl p-3 focus-within:ring-2 ring-primary bg-opacity-80 transition-all cursor-text h-14">
                  <span className="text-gray-500 pl-2 text-xl mr-2">📅</span>
                  <input type="date" className="bg-transparent w-full outline-none text-lg text-neutral" required />
                </div>
              </div>
              
              {/* Passengers */}
              <div className="form-control w-full lg:w-36">
                <label className="label hidden"><span className="label-text">Pasajeros</span></label>
                <div className="flex items-center bg-base-200 hover:bg-base-300 rounded-xl p-3 focus-within:ring-2 ring-primary bg-opacity-80 transition-all cursor-text h-14">
                  <span className="text-gray-500 pl-2 text-xl mr-2">👤</span>
                  <input type="number" min="1" max="4" defaultValue="1" className="bg-transparent w-full outline-none text-lg text-neutral text-center font-bold" required />
                </div>
              </div>

              {/* Submit Button */}
              <button className="btn btn-primary h-14 rounded-xl text-white hover:scale-105 transition-transform shadow-lg shadow-primary/30 text-lg lg:px-8 border-none bg-gradient-to-r from-primary to-primary">
                Buscar Viaje
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Beneficios / Por qué usar AeroRuta */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral">¿Por qué viajar con AeroRuta?</h2>
          <p className="text-lg text-neutral-content">Transformamos la manera de conectar la ciudad con el aeropuerto, haciendo tus trayectos más amigables en todos los sentidos.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="card-body items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mb-4 text-primary">💰</div>
              <h3 className="card-title text-2xl font-bold">Viajes Económicos</h3>
              <p className="text-neutral-content mt-2">Comparte los gastos del vehículo (peaje Túnel de Oriente, gasolina). Es más barato que un taxi privado.</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="card-body items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-4xl mb-4 text-accent">🌱</div>
              <h3 className="card-title text-2xl font-bold">Menor Impacto</h3>
              <p className="text-neutral-content mt-2">Menos vehículos a medio llenar hacia Rionegro significa menos congestión y menos emisiones de CO2.</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="card-body items-center text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-4xl mb-4 text-secondary">🏆</div>
              <h3 className="card-title text-2xl font-bold">Gana Beneficios</h3>
              <p className="text-neutral-content mt-2">Nuestro sistema de Gamificación te premia. Acumula puntos por cada viaje compartido y canjéalos en la app.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content rounded-t-[3rem]">
      <aside className="ml-4">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          <span className="text-2xl font-black">AeroRuta</span>
        </div>
        <p className="opacity-70">Una iniciativa de movilidad sostenible<br/>Medellín ↔ JMC<br/>© 2026 AeroRuta.</p>
      </aside> 
      <nav>
        <h6 className="footer-title">Plataforma</h6> 
        <Link href="/buscar" className="link link-hover opacity-70">Buscar Viajes</Link>
        <Link href="/publicar" className="link link-hover opacity-70">Publicar Viaje</Link>
        <Link href="/recompensas" className="link link-hover opacity-70">Sistema de Puntos</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Nosotros</h6> 
        <Link href="#" className="link link-hover opacity-70">Sobre el Proyecto</Link>
        <Link href="#" className="link link-hover opacity-70">Contacto</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link href="#" className="link link-hover opacity-70">Términos de uso</Link>
        <Link href="#" className="link link-hover opacity-70">Política de privacidad</Link>
      </nav>
    </footer>
  );
}
