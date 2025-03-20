"use client";
import OfficerCard from "@/components/officer-card";
import { Button } from "@/components/ui/button";
import OfficersData from "@/mocks/officers-data";
import { ChevronLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OfficersPage() {
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
            Officers
          </h1>
        </div>
        <Button
          variant="secondary"
          onClick={() => router.push("/soldiers/new")}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          Add Officer
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* TODO: replace OfficerData when backend is ready */}
        {OfficersData.map((officer) => (
          <OfficerCard
            key={officer.id}
            id={officer.id}
            name={officer.name}
            phone={officer.phone}
            rank={officer.rank}
            position={officer.position}
            status={officer.status}
            arrived_at={officer.arrived_at}
            current_place={officer.current_place}
          />
        ))}
      </div>
    </div>
  );
}
