type fault = {
  id: string;
  name: string;
  description: string;
  time: string;
  assignedOfficer: string;
  assignedSoldier: string;
  stautes: "Fixed" | "Not Fixed";
  createdAt: string;
  fixedAt: string;
};

export default fault;