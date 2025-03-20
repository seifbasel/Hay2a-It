import Soldier from "@/types/soldier";

const SoldiersData: Soldier[] = [
  {
    id: "1",
    name: "mahmoud hawash",
    position: "frontend developer",
    arrived_at: "2024-03-10",
    phone: "01003725532",
    current_place: "hay2a it office",
    status: "In duty",
    faults_Fixed_Per_Day: 5,
    faults_History: [
      {
        name: "Network Issue",
        description: "Resolved router failure",
        id: "f1",
        assigned_Officer: "Officer A",
        assigned_Soldier: "mahmoud hawash",
        fixed: true,
        reported_at: "2025-03-10 09:30 AM",
        fixed_at: "2025-03-10 10:30 AM",
      },
      {
        name: "Server Down",
        description: "Restarted main server",
        id: "f2",
        assigned_Officer: "Officer B",
        assigned_Soldier: "mahmoud hawash",
        fixed: true,
        reported_at: "2025-03-10 1:00 PM",
        fixed_at: "2025-03-10 2:00 PM",
      },
    ],
  },
  {
    id: "2",
    name: "seif basel",
    position: "backend developer",
    arrived_at: "2024-03-05",
    phone: "01003725532",
    current_place: "hay2a it office",
    status: "Inactive",
    faults_Fixed_Per_Day: 7,
    faults_History: [
      {
        name: "VPN Issue",
        description: "Reconfigured VPN settings",
        id: "f3",
        assigned_Officer: "Officer C",
        assigned_Soldier: "seif basel",
        fixed: true,
        reported_at: "2025-03-11 8:30 AM",
        fixed_at: "2025-03-11 9:15 AM",
      },
    ],
  },
  {
    id: "3",
    name: "omar ayman",
    position: "ai engineer",
    arrived_at: "2024-03-05",
    phone: "01003725532",
    current_place: "hospital",
    status: "On Leave",
    faults_Fixed_Per_Day: 2,
    faults_History: [
      {
        name: "monitor Issue",
        description: "Reconfigured screen settings",
        id: "f4",
        assigned_Officer: "Officer D",
        assigned_Soldier: "omar ayman",
        fixed: true,
        reported_at: "2025-03-12 8:30 AM",
        fixed_at: "2025-03-12 9:00 AM",
      },
    ],
  },
];

export default SoldiersData;
