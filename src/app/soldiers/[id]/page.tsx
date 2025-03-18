"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Define TypeScript types
type Fault = {
  name: string;
  description: string;
  time: string;
};

type Soldier = {
  id: string;
  name: string;
  position: string;
  email: string;
  arrivedAt: string;
  status: "Active" | "Inactive" | "On Leave";
  faultsFixedPerDay: number;
  faultHistory: Fault[];
  current_place?: string;
};

// ✅ Mock Data (Replace with API Fetch Later)
const soldiers: Soldier[] = [
  {
    id: "1",
    name: "mahmoud hawash",
    position: "frontend developer",
    email: "hawash@gmail.com",
    arrivedAt: "2024-03-10",
    current_place: "hay2a it office",
    status: "Active",
    faultsFixedPerDay: 5,
    faultHistory: [
      {
        name: "Network Issue",
        description: "Resolved router failure",
        time: "2025-03-10 10:30 AM",
      },
      {
        name: "Server Down",
        description: "Restarted main server",
        time: "2025-03-10 2:00 PM",
      },
    ],
  },
  {
    id: "2",
    name: "seif basel",
    position: "backend developer",
    email: "seif@gmail.com",
    arrivedAt: "2024-03-05",
    current_place: "hay2a it office",
    status: "Inactive",
    faultsFixedPerDay: 7,
    faultHistory: [
      {
        name: "VPN Issue",
        description: "Reconfigured VPN settings",
        time: "9:15 AM",
      },
    ],
  },
  {
    id: "3",
    name: "omar ayman",
    position: "ai engineer",
    email: "omar@gmail.com",
    arrivedAt: "2024-03-05",
    current_place: "hospital",
    status: "Inactive",
    faultsFixedPerDay: 2,
    faultHistory: [
      {
        name: "monitor Issue",
        description: "Reconfigured screen settings",
        time: "9:00 AM",
      },
    ],
  },
];

export default function SoldierDetailsPage() {
  const params = useParams();
  const id = params.id as string; // ✅ Ensure id is a string
  const [soldier, setSoldier] = useState<Soldier | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const selectedSoldier = soldiers.find((s) => s.id === id) || null;
      setSoldier(selectedSoldier);
      setLoading(false);
    }, 1000); // Simulate API delay
  }, [id]);

  if (loading)
    return (
      <div className="p-6 min-h-screen">
        <Skeleton className="h-10 w-1/3 mb-4" />
        <Skeleton className="h-40 w-full mb-4" />
        <Skeleton className="h-40 w-full" />
      </div>
    );

  if (!soldier)
    return <p className="text-center text-gray-500 mt-10">Soldier not found</p>;

  return (
    <div className="p-6 min-h-screen">
      {/* Soldier Details Form */}
      <Card className="mb-6">
        <CardHeader className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center gap-2">
            <Button onClick={() => router.push("/soldiers")} variant={"default"} size="icon">
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
            </Button>
            <CardTitle>Soldier Information</CardTitle>
          </div>
          <Button className="flex" variant="destructive" size="icon">
            <Trash />
          </Button>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="pb-4">Name</Label>
            <Input
              value={soldier.name}
              onChange={(e) => setSoldier({ ...soldier, name: e.target.value })}
            />
          </div>
          <div>
            <Label className="pb-4">Position</Label>
            <Input
              value={soldier.position}
              onChange={(e) =>
                setSoldier({ ...soldier, position: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="pb-4">Email</Label>
            <Input
              value={soldier.email}
              onChange={(e) =>
                setSoldier({ ...soldier, email: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="pb-4">Arrived At</Label>
            <Input
              type="date"
              value={soldier.arrivedAt}
              onChange={(e) =>
                setSoldier({ ...soldier, arrivedAt: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="pb-4">Faults Fixed Per Day</Label>
            <Input type="number" value={soldier.faultsFixedPerDay} readOnly />
          </div>
          <div>
            <Label className="pb-4">Current place</Label>
            <Input
              value={soldier.current_place}
              onChange={(e) =>
                setSoldier({ ...soldier, current_place: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="pb-4">Status</Label>
            <Select
              value={soldier.status}
              onValueChange={(value) =>
                setSoldier({ ...soldier, status: value as Soldier["status"] })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">🟢 Active</SelectItem>
                <SelectItem value="Inactive">🔴 Inactive</SelectItem>
                <SelectItem value="On Leave">🟡 On Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Fault History */}
      <Card>
        <CardHeader>
          <CardTitle>Fault History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {soldier.faultHistory.length > 0 ? (
                soldier.faultHistory.map((fault, index) => (
                  <TableRow key={index}>
                    <TableCell>{fault.name}</TableCell>
                    <TableCell>{fault.description}</TableCell>
                    <TableCell>{fault.time}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-gray-500">
                    No fault history available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
