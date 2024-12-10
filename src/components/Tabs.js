import { Link } from "react-router-dom";

function Tabs() {
  return (
    <div className="tabs">
      <Link to="/">Following</Link>
      <Link to="/trending">Trending</Link>
    </div>
  );
}

export default Tabs;
