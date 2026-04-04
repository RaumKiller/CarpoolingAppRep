import React from "react";

interface RouteCardProps {
  origin: string;
  destination: string;
  date: string;
  time: string;
  driverName: string;
  price: string;
  availableSeats: number;
}

export default function RouteCard({ origin, destination, date, time, driverName, price, availableSeats }: RouteCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 border border-base-200 group">
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <span className="text-secondary font-bold text-sm bg-secondary/10 w-fit px-3 py-1 rounded-full">{date} • {time}</span>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 rounded-full bg-neutral"></div>
              <p className="font-semibold text-lg">{origin}</p>
            </div>
            <div className="flex items-center gap-2 -my-2 ml-[5px]">
              <div className="w-0.5 h-6 bg-base-300"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <p className="font-semibold text-lg">{destination}</p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-2xl font-black text-primary">{price}</span>
            <span className="text-xs text-neutral-content">Por pasajero</span>
          </div>
        </div>

        <div className="divider my-1"></div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-10">
                <span>{driverName.charAt(0)}</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-sm">{driverName}</p>
              <div className="flex text-warning text-xs">
                ★★★★☆ <span className="text-neutral-content ml-1">4.8</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold flex items-center justify-end gap-1">
              <span className="text-lg">💺</span> {availableSeats} Cupos
            </p>
            <button className="btn btn-primary btn-sm mt-2 shadow-md hover:scale-105 transition-transform group-hover:bg-primary-focus text-white shrink-0">
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
