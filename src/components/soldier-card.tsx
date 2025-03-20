// SoldierCard.tsx
"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Soldier from "@/types/soldier";

const statusColors = {
  "In duty": "bg-green-500",
  "On Leave": "bg-yellow-500",
  Inactive: "bg-red-500",
};

const SoldierCard = ({
  name,
  position,
  id,
  status,
  current_place,
  arrived_at,
  faultsFixedPerDay,
}: Soldier) => {
  const router = useRouter();
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div
      onClick={() => router.push(`/soldiers/${id}`)}
      className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 transition cursor-pointer shadow-lg flex flex-col gap-4 relative"
    >
      {/* Status Badge */}
      <span
        className={clsx(
          "absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-lg text-white",
          statusColors[status]
        )}
      >
        {status}
      </span>

      {/* Avatar & Name */}
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-lg font-bold text-white shadow-md">
          {firstLetter}
        </div>
        <div>
          <h3 className="font-bold text-foreground capitalize text-lg">
            {name}
          </h3>
          <p className="text-primary text-sm capitalize">{position}</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-sm text-foreground grid grid-cols-1 gap-2 mt-2">
        <p>
          <strong>Current Place:</strong> {current_place}
        </p>
        <p>
          <strong>Arrived:</strong> {new Date(arrived_at).toLocaleDateString()}
        </p>
        <p>
          <strong>Faults Fixed/Day:</strong> {faultsFixedPerDay}
        </p>
      </div>

      {/* Navigation Arrow */}
      <div className="flex justify-end mt-3">
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};

export default SoldierCard;
