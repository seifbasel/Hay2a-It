"use client";
import SoldierCard from "@/components/soldier-card";
import { Button } from "@/components/ui/button";
import SoldiersData from "@/mocks/soldiers-data";
import { ChevronLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SoldiersPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="flex flex-wrap items-center justify-between w-full mb-6 gap-2 sm:gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/")}
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-foreground text-2xl font-bold whitespace-nowrap">
            Soldiers
          </h1>
        </div>
        <Button
          variant="secondary"
          onClick={() => router.push("/soldiers/new")}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          Add Soldier
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* TODO: replace SoldiersData when backend is ready */}
        {SoldiersData.map((soldier) => (
          <SoldierCard
            key={soldier.id}
            id={soldier.id}
            name={soldier.name}
            phone={soldier.phone}
            position={soldier.position}
            status={soldier.status}
            arrived_at={soldier.arrived_at}
            current_place={soldier.current_place}
            faults_Fixed_Per_Day={soldier.faults_Fixed_Per_Day}
          />
        ))}
      </div>
    </div>
  );
}
