import Fault from "@/types/fault";

const faultsData: Fault[] = [
  {
    id: "1",
    name: "Network Issue",
    description:
      "The main router is down, affecting all internal communications.",
    time: "10:30 AM",
    date: "2025-03-20",
    assignedOfficer: "201",
    assignedSoldier: "101",
    fixed: false,
    reported_at: "2025-03-20T10:00:00Z",
    fixedAt: "",
  },
  {
    id: "2",
    name: "Server Crash",
    description:
      "Database server crashed due to overload. Needs immediate reboot.",
    time: "3:15 PM",
    date: "2025-03-19",
    assignedOfficer: "202",
    assignedSoldier: "102",
    fixed: true,
    reported_at: "2025-03-19T14:45:00Z",
    fixedAt: "2025-03-19T16:00:00Z",
  },
  {
    id: "3",
    name: "Software Bug",
    description: "The tracking system is not logging fault reports correctly.",
    time: "9:00 AM",
    date: "2025-03-18",
    assignedOfficer: "203",
    assignedSoldier: "103",
    fixed: false,
    reported_at: "2025-03-18T08:30:00Z",
    fixedAt: "",
  },
  {
    id: "4",
    name: "Hardware Failure",
    description: "Backup generator failed during a power outage.",
    time: "11:45 AM",
    date: "2025-03-17",
    assignedOfficer: "204",
    assignedSoldier: "104",
    fixed: true,
    reported_at: "2025-03-17T11:30:00Z",
    fixedAt: "2025-03-17T12:30:00Z",
  },
  {
    id: "5",
    name: "Access Control Issue",
    description: "Unauthorized personnel gained access to a restricted system.",
    time: "2:20 PM",
    date: "2025-03-16",
    assignedOfficer: "205",
    assignedSoldier: "105",
    fixed: false,
    reported_at: "2025-03-16T14:00:00Z",
    fixedAt: "",
  },
];

export default faultsData;
