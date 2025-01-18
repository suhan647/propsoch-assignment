import { mockPropertyData } from "@/data/mockPropertyData";
import PropertyCard from "@/components/PropertyCard";


export default function App() {
  return <div className="container">
    <PropertyCard properties={mockPropertyData} />
A    </div>;
}
