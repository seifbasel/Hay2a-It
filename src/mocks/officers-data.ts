// mock-officers-data.ts
import Officer from "@/types/officer";

const OfficersData: Officer[] = [
  {
    id: "1",
    name: "mohamed mahmoud",
    phone: "01003725532",
    position: "Operations Commander",
    rank: "General",
    arrived_at: "2022-03-15",
    current_place: "Headquarters",
    status: "In duty",
  },
  {
    id: "2",
    name: "ahmed abu elabas",
    phone: "01003725532",
    position: "Field Supervisor",
    rank: "Colonel",
    arrived_at: "2021-08-20",
    current_place: "Outpost Bravo",
    status: "On Leave",
  },
  {
    id: "3",
    name: "omar fouad",
    phone: "01003725532",
    position: "Logistics Officer",
    rank: "Major",
    arrived_at: "2020-06-10",
    current_place: "Base Camp Alpha",
    status: "Inactive",
  },
  {
    id: "4",
    name: "seif eldin",
    phone: "01003725532",
    position: "Tactical Coordinator",
    rank: "Captain",
    arrived_at: "2023-01-05",
    current_place: "Field HQ",
    status: "In duty",
  },
  {
    id: "5",
    name: "ahmed basel",
    phone: "01003725532",
    position: "Intelligence Analyst",
    rank: "Lieutenant",
    arrived_at: "2022-11-25",
    current_place: "Intelligence Center",
    status: "In duty",
  }
];

export default OfficersData;
