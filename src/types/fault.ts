type Fault = {
  id: string;
  name: string;
  description: string;
  time: string;
  date: string;
  assignedOfficer: string;
  assignedSoldier: string;
  fixed: boolean;
  createdAt: string;
  fixedAt: string;
};

export default Fault;