import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#2563eb" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Symptoms</Link>
      <Link to="/hospitals" style={{ color: "white", marginRight: "15px" }}>Hospitals</Link>
      <Link to="/ranking" style={{ color: "white" }}>Ranking</Link>
    </nav>
  );
}

export default Navbar;