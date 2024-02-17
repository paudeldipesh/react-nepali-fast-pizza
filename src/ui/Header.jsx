import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <div>
      <Link to="/">Nepali Fast Pizza</Link>
      <SearchOrder />
      <p>Dipesh Paudel</p>
    </div>
  );
}
