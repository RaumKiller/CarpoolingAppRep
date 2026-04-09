# Motor de Tarifas y Modelo de Gamificación (AeroRuta)

Este documento detalla la arquitectura para implementar las nuevas reglas de negocio de AeroRuta relacionadas al cálculo de tarifas y el programa de lealtad.

## 1. Diseño del Motor de Precio Dinámico ($T_{final}$)

El flujo del pago funciona bajo el modelo **Pre-Auth & Capture**. Inicialmente, al pasajero se le hace un "holding" (retención) calculando el peor de los casos (que el costo de la ruta se divida solo con el conductor, o sea tarifa full). Conforme más pasajeros reserven el viaje, la tarifa se recalcula a la baja, y el cobro final en el inicio del trayecto es menor.

### Cobertura Geoespacial y Zonas de Operación
Para optimizar la logística, la plataforma define su alcance operando exclusivamente en:
* **Municipios Aledaños al JMC (Oriente):** Llanogrande, Rionegro, Marinilla, Retiro, La Ceja, La Unión, El Carmen de Viboral, El Santuario, Guarne, Santa Elena.
* **Valle de Aburrá Central:** Medellín, Bello, Itagüí, Sabaneta.
* **Zonas con Recargos (Extremos del Valle):** Se incluye cobertura hacia Caldas, Copacabana y San Félix. Por su lejanía, se aplica un **recargo obligatorio de $40,000 COP** al costo base total de la ruta. En estas zonas extremas, se impone un radio de restricción estricto de **3 KM máximo** para unirse a un viaje existente.

### Estructura de Tarifas Base (De Valle de Aburrá Principal a JMC)

| Tipo de Vehículo | Capacidad | Precio Base (Costo Total Compartido) | Valor x Persona (Vehículo Lleno) |
| :--- | :--- | :--- | :--- |
| **Estándar** | 4 pax | $120,000 COP | $30,000 COP |
| **SUV / Van Familiar** | 6 pax | $190,000 COP | $31,600 COP |
| **Van Turística** | 12 pax | $320,000 COP | $26,600 COP |

### Retención Colaborativa (Pre-Auth vs Captura Real)
Siendo fiel a tu modelo **Holding Colaborativo**, el costo que se pre-autoriza a quien inicia el carpool simula temporalmente que viaja solo:

$T_{max} = Precio\_Base\_Vehiculo + Recargo\_Zonal\_Extra$

Sin embargo, en el instante en que inicia el recorrido, la pasarela de pagos recalcula a la baja dividiendo las cargas logísticas:

$Cobro\_Final\_Para\_Cada\_Pasajero\_(n) = \frac{T_{max}}{n} + Comision\_APP\_Individual$

> *Ejemplo Estándar (4 Pax al JMC):* 
> 1er pasajero reserva y el holding de su tarjeta retiene **$120,000**. Si recogen a 3 pasajeros adicionales durante la ventana de tiempo estipulada, al inicio del viaje la pasarela solo captura **$30,000** a cada uno de sus plásticos.

---

## 2. Ligas de Usuarios y Metas de Viajes

Tanto Conductores como Pasajeros tienen Ligas de lealtad. 

**Liga de Pasajeros:**
* 🥉 **Bronce:** 10 Viajes ($30.000 de beneficio aprox acumulado)
* 🥈 **Plata:** 20 Viajes ($60.000 acumulado)
* 🥇 **Oro:** 30 Viajes ($120.000 acumulado)
* 💎 **Diamante:** 50 Viajes ($200.000 acumulado)

**Liga de Conductores:**
* 🥉 **Bronce:** 15 Viajes
* 🥈 **Plata:** 30 Viajes
* 🥇 **Oro:** 50 Viajes
* 💎 **Diamante:** 100 Viajes

---

## 3. Catálogo de Recompensas

### 🚘 Para Conductores (Incentivos Operativos)
* **250 puntos:** 1 Café en el Aeropuerto (Juan Valdez).
* **800 puntos:** Lavada Full del vehículo registrado.
* **1000 puntos:** 10% de Descuento en tanqueada.
* **2000 puntos:** Descuento en cambio de aceite.

### 🎒 Para Pasajeros (Incentivos de Viaje)
* **250 puntos:** 1 Café gratis en el Aeropuerto JMC.
* **600 puntos:** 10% de descuento en el próximo viaje (Comisión).
* **1000 puntos:** 5% de descuento en un ticket aéreo (Partnerships).
* **3000 puntos:** Asiento GRATIS en su próximo viaje de carpooling.
