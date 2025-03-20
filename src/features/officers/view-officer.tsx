"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import OfficerDetailsForm from "./officer-details-form";
import OfficersData from "@/mocks/officers-data";

export default function OfficerDetailsPage() {
  const { id } = useParams() || {};
  const router = useRouter();
  const officer = OfficersData.find((s) => s.id === id) || null;

  if (!officer) {
    return <p className="text-center text-gray-500 mt-10">Officer not found</p>;
  }

  return (
    <div className="p-6 min-h-screen">
      <Card className="mb-6">
        <CardHeader className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => router.push("/officers")}
              variant="default"
              size="icon"
              aria-label="Go back"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <CardTitle>officer Information</CardTitle>
          </div>
          <Button
            className="flex"
            variant="destructive"
            size="icon"
            aria-label="Delete officer"
            onClick={() => router.push("/officers")}
          >
            <Trash />
          </Button>
        </CardHeader>
        <OfficerDetailsForm officer={officer} />
      </Card>
    </div>
  );
}
