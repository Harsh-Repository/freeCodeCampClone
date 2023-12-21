import { useContext } from "react";
import { logout } from "../authContext/AuthActions";
import { AuthContext } from "../authContext/AuthContext";
import "./nav.css";

export default function Navbar() {
  const { user, dispatch } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="searchBar">
        <form>
          <input
            maxLength="900"
            placeholder="🔍 Search 9,000+ tutorials"
            type="search"
          />
        </form>
      </div>

      <div className="freeCodeCamp">
        <a href="/">freeCodeCamp (🔥)</a>
      </div>
      <div className="rightNav">
        <div className="language">
          <button>🌐</button>
        </div>
        <button className="menuButton">
          <span className="menu">
            <a href="/menu">Menu</a>
          </span>
        </button>
        {user ? (
          <button className="signinButton" onClick={() => dispatch(logout())}>
            <span className="signin">
              <a href="/">Sign out</a>
            </span>
          </button>
        ) : (
          <button className="signinButton">
            <span className="signin">
              <a href="/signin">Sign in</a>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
