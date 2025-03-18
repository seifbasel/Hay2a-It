"use client";

import SoldierCard from "@/components/soldier-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus } from "lucide-react";
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
    name: "mahmoud hawash",
    position: "frontend developer",
    email: "hawash@gmail.com",
    status: "Active",
  },
  {
    id: "2",
    name: "seif basel",
    position: "backend developer",
    email: "seif@gmail.com",
    status: "On Leave",
  },
  {
    id: "3",
    name: "abd elfattah",
    position: "data Analyst",
    email: "elfattah@gmail.com",
    status: "Inactive",
  },
  {
    id: "4",
    name: "omar ayman",
    position: "ai engineer",
    email: "omar@gmail.com",
    status: "Active",
  },
];

export default function SoldiersPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="flex flex-wrap items-center justify-between w-full mb-6 gap-2 sm:gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <Button variant="ghost" size="icon" onClick={() => router.push("/")}>
            <ChevronLeft className="w-6 h-6 cursor-pointer" />
          </Button>
          <h1 className="text-foreground text-2xl font-bold whitespace-nowrap">
            Soldiers
          </h1>
        </div>
        <Button
          variant="secondary"
          onClick={() => router.push("/soldiers/new")}
          className="flex items-center gap-2 text-nowrap"
        >
          <Plus className="w-6 h-6" />
          Add Soldier
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {soldiers.map((soldier) => (
          <SoldierCard key={soldier.id} {...soldier} />
        ))}
      </div>
    </div>
  );
}
