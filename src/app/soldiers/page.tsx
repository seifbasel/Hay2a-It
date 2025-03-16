"use client";

import SoldierCard from "@/components/soldier-card";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Status = "Active" | "On Leave" | "Inactive";

const soldiers: Array<{
  id: string;
  name: string;
  position: string;
  email: string;
  status: Status;
}> = [
  {
    id: "1",
    name: "John Doe",
    position: "Technician",
    email: "johndoe@example.com",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    position: "Network Engineer",
    email: "janesmith@example.com",
    status: "On Leave",
  },
  {
    id: "3",
    name: "David Johnson",
    position: "Cybersecurity Analyst",
    email: "davidj@example.com",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Michael Brown",
    position: "Radio Operator",
    email: "michaelb@example.com",
    status: "Active",
  },
];

export default function SoldiersPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={() => router.push("/")}>
          <ChevronLeft className="w-6 h-6 cursor-pointer" />
        </button>
        <h1 className="text-foreground text-2xl font-bold ">Soldiers</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {soldiers.map((soldier) => (
          <SoldierCard key={soldier.id} {...soldier} />
        ))}
      </div>
    </div>
  );
}
