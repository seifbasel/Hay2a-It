type officer = {
  id: string;
  name: string;
  position: string;
  rank: string;
  email: string;
  arrivedAt: string;
  current_place?: string;
  status: "In duty" | "Inactive" | "On Leave";
};

export default officer;
