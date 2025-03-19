import Soldier from "@/types/soldier";


const SoldiersData: Soldier[] = [
    {
      id: "1",
      name: "mahmoud hawash",
      position: "frontend developer",
      arrivedAt: "2024-03-10",
      current_place: "hay2a it office",
      status: "In duty",
      faultsFixedPerDay: 5,
      faultHistory: [
        {
          name: "Network Issue",
          description: "Resolved router failure",
          time: "2025-03-10 10:30 AM",
          id: "f1",
          date: "2025-03-10",
          assignedOfficer: "Officer A",
          assignedSoldier: "mahmoud hawash",
          fixed: true,
          createdAt: "2025-03-10 09:30 AM",
          fixedAt: "2025-03-10 10:30 AM",
        },
        {
          name: "Server Down",
          description: "Restarted main server",
          time: "2025-03-10 2:00 PM",
          id: "f2",
          date: "2025-03-10",
          assignedOfficer: "Officer B",
          assignedSoldier: "mahmoud hawash",
          fixed: true,
          createdAt: "2025-03-10 1:00 PM",
          fixedAt: "2025-03-10 2:00 PM",
        },
      ],
    },
    {
      id: "2",
      name: "seif basel",
      position: "backend developer",
      arrivedAt: "2024-03-05",
      current_place: "hay2a it office",
      status: "Inactive",
      faultsFixedPerDay: 7,
      faultHistory: [
        {
          name: "VPN Issue",
          description: "Reconfigured VPN settings",
          time: "9:15 AM",
          id: "f3",
          date: "2025-03-11",
          assignedOfficer: "Officer C",
          assignedSoldier: "seif basel",
          fixed: true,
          createdAt: "2025-03-11 8:30 AM",
          fixedAt: "2025-03-11 9:15 AM",
        },
      ],
    },
    {
      id: "3",
      name: "omar ayman",
      position: "ai engineer",
      arrivedAt: "2024-03-05",
      current_place: "hospital",
      status: "On Leave",
      faultsFixedPerDay: 2,
      faultHistory: [
        {
          name: "monitor Issue",
          description: "Reconfigured screen settings",
          time: "9:00 AM",
          id: "f4",
          date: "2025-03-12",
          assignedOfficer: "Officer D",
          assignedSoldier: "omar ayman",
          fixed: true,
          createdAt: "2025-03-12 8:30 AM",
          fixedAt: "2025-03-12 9:00 AM",
        },
      ],
    },
  ];


export default SoldiersData;