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
import Officer from "@/types/officer";
import { CircleCheck } from "lucide-react";

type OfficerDetailsFormProps = {
  officer: Officer;
};

export default function OfficerDetailsForm({
  officer,
}: OfficerDetailsFormProps) {
  return (
    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label className="pb-2">Name</Label>
        <Input value={officer.name} readOnly />
      </div>
      <div>
        <Label className="pb-2">Position</Label>
        <Input value={officer.position} readOnly />
      </div>
      <div>
        <Label className="pb-2">phone</Label>
        <Input value={officer.phone} readOnly />
      </div>
      <div>
        <Label className="pb-2">Arrived At</Label>
        <Input type="date" value={officer.arrived_at} readOnly />
      </div>
      <div>
        <Label className="pb-2">Rank</Label>
        <Input value={officer.rank} readOnly />
      </div>
      <div>
        <Label className="pb-2">Current Place</Label>
        <Input value={officer.current_place} readOnly />
      </div>
      <div>
        <Label className="pb-2">Status</Label>
        <Select value={officer.status} disabled>
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
