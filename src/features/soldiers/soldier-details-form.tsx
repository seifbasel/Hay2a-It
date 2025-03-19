"use client";

import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Soldier from "@/types/soldier";

type SoldierDetailsFormProps = {
  soldier: Soldier;
};

export default function SoldierDetailsForm({
  soldier,
}: SoldierDetailsFormProps) {
  return (
    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label className="pb-2">Name</Label>
        <Input value={soldier.name} readOnly />
      </div>
      <div>
        <Label className="pb-2">Position</Label>
        <Input value={soldier.position} readOnly />
      </div>
      <div>
        <Label className="pb-2">Arrived At</Label>
        <Input type="date" value={soldier.arrivedAt} readOnly />
      </div>
      <div>
        <Label className="pb-2">Faults Fixed Per Day</Label>
        <Input type="number" value={soldier.faultsFixedPerDay} readOnly />
      </div>
      <div>
        <Label className="pb-2">Current Place</Label>
        <Input value={soldier.current_place} readOnly />
      </div>
      <div>
        <Label className="pb-2">Status</Label>
        <Select value={soldier.status} disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="In duty">🟢 In duty</SelectItem>
            <SelectItem value="Inactive">🔴 Inactive</SelectItem>
            <SelectItem value="On Leave">🟡 On Leave</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CardContent>
  );
}
