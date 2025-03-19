"use client";

import { CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Fault from "@/types/fault";

type FaultHistoryTableProps = {
  faults: Fault[];
};

export default function FaultHistoryTable({ faults }: FaultHistoryTableProps) {
  return (
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
          {faults.length > 0 ? (
            faults.map((fault) => (
              <TableRow key={fault.id}>
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
  );
}
