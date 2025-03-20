"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Fault from "@/types/fault";
import { ChevronLeft, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface FaultsTableProps {
  faults: Fault[];
  soldiers: { id: string; name: string }[];
  officers: { id: string; name: string }[];
}

const FaultsTable: React.FC<FaultsTableProps> = ({
  faults,
  soldiers,
  officers,
}) => {
  const [faultAssignments, setFaultAssignments] = useState<{
    [key: string]: { soldier: string; officer: string };
  }>({});

  const handleAssign = (
    faultId: string,
    type: "soldier" | "officer",
    value: string
  ) => {
    setFaultAssignments((prev) => ({
      ...prev,
      [faultId]: { ...prev[faultId], [type]: value },
    }));
  };
  const router = useRouter();

  return (
    <div className="p-6 min-h-screen">
      <Card className="w-full  shadow-md rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-semibold">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => router.push("/")}
                variant="default"
                size="icon"
                aria-label="Go back"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              officer Information
            </div>
          </CardTitle>
          <Button variant="default">
            <PlusIcon className="w-4 h-4" /> Add Fault
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned Soldier</TableHead>
                <TableHead>Assigning Officer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faults.map((fault) => (
                <TableRow key={fault.id}>
                  <TableCell>{fault.name}</TableCell>
                  <TableCell>{fault.description}</TableCell>
                  <TableCell>
                    {fault.fixed ? (
                      <Badge className="bg-green-500 text-white">Fixed</Badge>
                    ) : (
                      <Badge className="bg-red-500 text-white">Not Fixed</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Select
                      onValueChange={(value) =>
                        handleAssign(fault.id, "soldier", value)
                      }
                      value={
                        faultAssignments[fault.id]?.soldier ||
                        fault.assignedSoldier
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Assign Soldier" />
                      </SelectTrigger>
                      <SelectContent>
                        {soldiers.map((soldier) => (
                          <SelectItem key={soldier.id} value={soldier.id}>
                            {soldier.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      onValueChange={(value) =>
                        handleAssign(fault.id, "officer", value)
                      }
                      value={
                        faultAssignments[fault.id]?.officer ||
                        fault.assignedOfficer
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Assign Officer" />
                      </SelectTrigger>
                      <SelectContent>
                        {officers.map((officer) => (
                          <SelectItem key={officer.id} value={officer.id}>
                            {officer.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaultsTable;
