type Fault = {
  id: string;
  name: string;
  description: string;
  assigned_Officer: string;
  assigned_Soldier: string;
  fixed: boolean;
  reported_at: string;
  fixed_at: string;
};

export default Fault;