import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ProyectPage from "./pages/ProyectPage/ProyectPage";
import DetailsPage from "./pages/Details/DetailsPage";
import CrearProyectosPage from "./pages/CrearProyectosPage/CrearProyectosPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import EditProyect from "./pages/Edit.Proyect/EditProyect";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        {/*<Route
          path="/trabajos"
          element={
              <NuestrosTrabajosPage />
          }
        />*/}

        <Route
          path="/administrador"
          element={
            <IsAnon>
              <AdminPage />
            </IsAnon>
          }
        />

          <Route
          path="/trabajos"
          element={
              <ProyectPage />
          }
        />

          <Route
          path="/administrador/proyect"
          element={
              <CrearProyectosPage />
          }
        />

          <Route
          path="/proyecto/editar/:id"
          element={
              <EditProyect/>
          }
        />

      </Routes>

     
    </div>
  );
}

export default App;
