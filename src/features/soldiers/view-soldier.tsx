"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import SoldierDetailsForm from "@/features/soldiers/soldier-details-form";
import FaultHistoryTable from "@/features/soldiers/soldiers-faults-history";
import SoldiersData from "@/mocks/soldiers-data";

export default function SoldierDetailsPage() {
  const { id } = useParams() || {};
  const router = useRouter();
  const soldier = SoldiersData.find((s) => s.id === id) || null;

  if (!soldier) {
    return <p className="text-center text-gray-500 mt-10">Soldier not found</p>;
  }

  return (
    <div className="p-6 min-h-screen">
      <Card className="mb-6">
        <CardHeader className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => router.push("/soldiers")}
              variant="default"
              size="icon"
              aria-label="Go back"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <CardTitle>Soldier Information</CardTitle>
          </div>
          <Button
            className="flex"
            variant="destructive"
            size="icon"
            aria-label="Delete soldier"
            onClick={() => router.push("/soldiers")}
          >
            <Trash />
          </Button>
        </CardHeader>
        <SoldierDetailsForm soldier={soldier} />
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fault History</CardTitle>
        </CardHeader>
        <FaultHistoryTable faults={soldier.faultHistory ?? []} />
      </Card>
    </div>
  );
}
