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
  faults_Fixed_Per_Day: number;
  faults_History?: Fault[];
};

export default Soldier;
