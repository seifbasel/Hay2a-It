import FaultsTable from "@/features/faults/faults-table";
import faultsData from "@/mocks/faults-data";

const soldiers = [
  { id: "101", name: "John Doe" },
  { id: "102", name: "Jane Smith" },
  { id: "103", name: "David Brown" },
  { id: "104", name: "Michael Johnson" },
  { id: "105", name: "Emma Wilson" },
];

const officers = [
  { id: "201", name: "Captain Rogers" },
  { id: "202", name: "Major Carter" },
  { id: "203", name: "Lieutenant Blake" },
  { id: "204", name: "Colonel Harris" },
  { id: "205", name: "General Adams" },
];

export default function FaultsPage() {
  return <FaultsTable faults={faultsData} soldiers={soldiers} officers={officers} />;
}
