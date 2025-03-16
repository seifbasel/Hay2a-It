"use client";

import { ChevronRight, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx"; // For conditional styling

type SoldierCardProps = {
  name: string;
  position: string;
  email?: string;
  id: string;
  status: "Active" | "On Leave" | "Inactive";
};

const statusColors = {
  Active: "bg-green-500",
  "On Leave": "bg-yellow-500",
  Inactive: "bg-red-500",
};

const SoldierCard = ({
  name,
  position,
  email,
  id,
  status,
}: SoldierCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/soldiers/${id}`)}
      className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 transition cursor-pointer shadow-lg flex flex-col gap-3 relative"
    >
      {/* Status Badge */}
      <span
        className={clsx(
          "absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-lg text-light-bg",
          statusColors[status]
        )}
      >
        {status}
      </span>

      {/* Avatar & Name */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-lg font-bold">
          {name[0]}
        </div>
        <div>
          <h3 className="font-bold text-foreground">{name}</h3>
          <p className="text-primary text-sm">{position}</p>
        </div>
      </div>

      {/* Email (if available) */}
      {email && (
        <div className="flex items-center gap-1 text-foreground text-sm">
          <Mail className="w-6 h-6" />
          <p>{email}</p>
        </div>
      )}

      {/* Navigation Arrow */}
      <div className="flex justify-end">
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};

export default SoldierCard;
