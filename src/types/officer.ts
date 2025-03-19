import { Rank } from "./rank";
import SoldierStatus from "./soldier-status";

type Officer = {
  id: string;
  name: string;
  position: string;
  rank: Rank;
  arrivedAt: string;
  current_place?: string;
  status: SoldierStatus;
};

export default Officer;
