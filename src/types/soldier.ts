import Fault from "./fault";
import SoldierStatus from "./soldier-status";

type Soldier = {
  id: string;
  name: string;
  position: string;
  arrivedAt: string;
  current_place?: string;
  status:SoldierStatus;
  faultsFixedPerDay: number;
  faultHistory?: Fault[];
};

export default Soldier;
