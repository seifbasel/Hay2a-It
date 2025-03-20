import Fault from "./fault";
import SoldierStatus from "./soldier-status";

type Soldier = {
  id: string;
  name: string;
  phone: string;
  position: string;
  arrived_at: string;
  current_place?: string;
  status:SoldierStatus;
  faultsFixedPerDay: number;
  faultHistory?: Fault[];
};

export default Soldier;
