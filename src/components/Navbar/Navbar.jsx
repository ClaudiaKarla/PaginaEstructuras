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
         
      <div className="rectangulo">
          .
      </div>

      <Link to="/">
        <div className="inicio">
        <Button /*style={{ backgroundColor: "#ce6a85" }}*/variant="secondary">Inicio</Button>
        </div>
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
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

          <Link to="/trabajos">
            {" "}
            <div className="nuestros">
            <Button variant="secondary">Nuestros Trabajos</Button>{" "}
            </div>
          </Link>

          <Link to="/administrador">
            {" "}
            <div className="admin">
            <Button variant="secondary">Admin</Button>{" "}
            </div>
          </Link>
        
        </>
      )}
    </nav>
    
  );
}

export default Navbar;
