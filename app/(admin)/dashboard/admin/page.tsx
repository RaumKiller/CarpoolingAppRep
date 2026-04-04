export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-center bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
        <div>
          <h1 className="text-3xl font-black text-neutral">Panel de Control</h1>
          <p className="text-neutral-content mt-1">Visión general del estado de AeroRuta</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-neutral">Admin Ops</p>
            <p className="text-xs text-success">Sistema Operativo</p>
          </div>
          <div className="avatar placeholder">
            <div className="bg-primary text-neutral-content rounded-full w-12 shadow-inner">
              <span className="text-xl">AO</span>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Viajes Activos" value="24" icon="🚗" color="text-primary" bg="bg-primary/10" />
        <StatCard title="Usuarios Registrados" value="1,248" icon="👥" color="text-secondary" bg="bg-secondary/10" />
        <StatCard title="Comisiones Retenidas" value="$450.000" icon="💰" color="text-accent" bg="bg-accent/10" />
        <StatCard title="Nuevos Conductores" value="12" icon="✅" color="text-success" bg="bg-success/10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Viajes Recientes */}
        <div className="lg:col-span-2 bg-base-100 rounded-3xl p-6 shadow-sm border border-base-300">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">⚡</span> Viajes Recientes (Medellín ↔ JMC)
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Ruta</th>
                  <th>Conductor</th>
                  <th>Pasajeros</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="font-bold">Terminal Sur → JMC</div>
                    <div className="text-xs opacity-50">Hoy, 14:30</div>
                  </td>
                  <td>Carlos Pérez</td>
                  <td>3 / 4</td>
                  <td><span className="badge badge-primary badge-outline">En Curso</span></td>
                  <td><button className="btn btn-sm btn-ghost">Ver Detalles</button></td>
                </tr>
                <tr>
                  <td>
                    <div className="font-bold">JMC → Terminal Norte</div>
                    <div className="text-xs opacity-50">Hoy, 16:00</div>
                  </td>
                  <td>Laura Gómez</td>
                  <td>4 / 4</td>
                  <td><span className="badge badge-success">Lleno</span></td>
                  <td><button className="btn btn-sm btn-ghost">Ver Detalles</button></td>
                </tr>
                <tr>
                  <td>
                    <div className="font-bold">San Diego → JMC</div>
                    <div className="text-xs opacity-50">Mañana, 08:00</div>
                  </td>
                  <td>Andrés Silva</td>
                  <td>1 / 3</td>
                  <td><span className="badge badge-ghost">Programado</span></td>
                  <td><button className="btn btn-sm btn-ghost">Ver Detalles</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conductores Pendientes Validación */}
        <div className="bg-base-100 rounded-3xl p-6 shadow-sm border border-base-300">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-warning">⚠️</span> Pendientes de Validación
          </h2>
          <div className="flex flex-col gap-4">
            <ValidationCard name="Mateo Ruiz" document="CC 102…" />
            <ValidationCard name="Diana Toro" document="CC 115…" />
            <ValidationCard name="Juan Castro" document="CC 103…" />
            <button className="btn btn-outline btn-primary w-full mt-2">Ver Todos (12)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color, bg }: { title: string, value: string, icon: string, color: string, bg: string }) {
  return (
    <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300 flex items-center gap-4 transition-all hover:shadow-md hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${bg} ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-neutral-content text-sm font-semibold">{title}</p>
        <p className={`text-2xl font-black ${color}`}>{value}</p>
      </div>
    </div>
  );
}

function ValidationCard({ name, document }: { name: string, document: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-base-200 rounded-2xl">
      <div className="flex items-center gap-3">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-10">
            <span>{name.charAt(0)}</span>
          </div>
        </div>
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs opacity-60">{document}</p>
        </div>
      </div>
      <button className="btn btn-xs btn-success text-white">Revisar</button>
    </div>
  );
}
