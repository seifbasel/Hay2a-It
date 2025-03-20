import Fault from "@/types/fault";

const faultsData: Fault[] = [
  {
    id: "1",
    name: "Network Issue",
    description:
      "The main router is down, affecting all internal communications.",
    assigned_Officer: "201",
    assigned_Soldier: "101",
    fixed: false,
    reported_at: "2025-03-20T10:00:00Z",
    fixed_at: "",
  },
  {
    id: "2",
    name: "Server Crash",
    description:
      "Database server crashed due to overload. Needs immediate reboot.",
    assigned_Officer: "202",
    assigned_Soldier: "102",
    fixed: true,
    reported_at: "2025-03-19T14:45:00Z",
    fixed_at: "2025-03-19T16:00:00Z",
  },
  {
    id: "3",
    name: "Software Bug",
    description: "The tracking system is not logging fault reports correctly.",

    assigned_Officer: "203",
    assigned_Soldier: "103",
    fixed: false,
    reported_at: "2025-03-18T08:30:00Z",
    fixed_at: "",
  },
  {
    id: "4",
    name: "Hardware Failure",
    description: "Backup generator failed during a power outage.",
    assigned_Officer: "204",
    assigned_Soldier: "104",
    fixed: true,
    reported_at: "2025-03-17T11:30:00Z",
    fixed_at: "2025-03-17T12:30:00Z",
  },
  {
    id: "5",
    name: "Access Control Issue",
    description: "Unauthorized personnel gained access to a restricted system.",
    assigned_Officer: "205",
    assigned_Soldier: "105",
    fixed: false,
    reported_at: "2025-03-16T14:00:00Z",
    fixed_at: "",
  },
];

export default faultsData;
