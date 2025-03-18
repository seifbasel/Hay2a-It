import fault from "./fault";

type soldier = {
  id: string;
  name: string;
  position: string;
  email: string;
  arrivedAt: string;
  current_place?: string;
  status: "In duty" | "Inactive" | "On Leave";
  faultsFixedPerDay: number;
  faultHistory: fault[];
};

export default soldier;
