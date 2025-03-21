import { Rank } from "./rank";
import SoldierStatus from "./soldier-status";

type Officer = {
  id: string;
  name: string;
  position: string;
  phone: string;
  rank: Rank;
  arrived_at: string;
  current_place?: string;
  status: SoldierStatus;
};

export default Officer;