"use client";

import { Button } from "@/components/ui/button";
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
import { CircleCheck } from "lucide-react";

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
        <Label className="pb-2">phone</Label>
        <Input value={soldier.phone} readOnly />
      </div>
      <div>
        <Label className="pb-2">Arrived At</Label>
        <Input type="date" value={soldier.arrived_at} readOnly />
      </div>
      <div>
        <Label className="pb-2">Faults Fixed Per Day</Label>
        <Input type="number" value={soldier.faults_Fixed_Per_Day} readOnly />
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
      <div className="flex justify-end items-center">
        <Button
          className="flex justify-center items-center"
          variant="default"
          type="submit"
        >
          <CircleCheck className="w-5 h-5" /> Save Changes
        </Button>
      </div>
    </CardContent>
  );
}
