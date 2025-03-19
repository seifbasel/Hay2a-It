// mock-officers-data.ts
import Officer from "@/types/officer";

const OfficersData: Officer[] = [
  {
    id: "1",
    name: "mohamed mahmoud",
    position: "Operations Commander",
    rank: "General",
    arrivedAt: "2022-03-15",
    current_place: "Headquarters",
    status: "In duty",
  },
  {
    id: "2",
    name: "ahmed abu elabas",
    position: "Field Supervisor",
    rank: "Colonel",
    arrivedAt: "2021-08-20",
    current_place: "Outpost Bravo",
    status: "On Leave",
  },
  {
    id: "3",
    name: "omar fouad",
    position: "Logistics Officer",
    rank: "Major",
    arrivedAt: "2020-06-10",
    current_place: "Base Camp Alpha",
    status: "Inactive",
  },
  {
    id: "4",
    name: "seif eldin",
    position: "Tactical Coordinator",
    rank: "Captain",
    arrivedAt: "2023-01-05",
    current_place: "Field HQ",
    status: "In duty",
  },
  {
    id: "5",
    name: "ahmed basel",
    position: "Intelligence Analyst",
    rank: "Lieutenant",
    arrivedAt: "2022-11-25",
    current_place: "Intelligence Center",
    status: "In duty",
  }
];

export default OfficersData;
