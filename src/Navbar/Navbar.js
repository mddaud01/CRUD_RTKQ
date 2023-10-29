import "../components/userList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../api/authSlice";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action to log the user out
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <ul className="navbar-nav">
        {isAuthenticated ? (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Dashboard
            </NavLink>
          </li>
        ) : (
          <li className="nav-item px-4">
            <button className="btn btn-info ">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </button>
          </li>
        )}
        {isAuthenticated && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contect"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Contect
            </NavLink>
          </li>
        )}

        {isAuthenticated && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              About
            </NavLink>
          </li>
        )}
      
      </ul>

    <div>
    {isAuthenticated && (
        <div className="m-2">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
    </nav>
  );
}

export default Navbar;
