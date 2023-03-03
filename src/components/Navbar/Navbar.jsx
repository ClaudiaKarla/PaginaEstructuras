import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Button from 'react-bootstrap/Button';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <div className="inicio">
        <Button variant="secondary">Inicio</Button>
        </div>
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <div className="servicios">
            <Button variant="secondary">Servicios</Button>{" "}
            </div>
          </Link>
          <Link to="/login">
            {" "}
            <div className="quienes">
            <Button variant="secondary">¿Quienes somos?</Button>{" "}
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className="nuestros">
            <Button variant="secondary">Nuestros Trabajos</Button>{" "}
            </div>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
