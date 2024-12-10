import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-links-wrapper">
        <Link to="/">Feed</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/trending">Following</Link>
        <Link to={`/profile/${currentUser?.uid}`}>Profile</Link>
        {currentUser ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div>
            {" "}
            <Link to="/login">Login</Link>
            <Link to="/Signup">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
