import React from "react";
import bgImg from "../images/background.jpg";
import "../styles/front.css";
import { Container } from "react-bootstrap";
import Dashboard from "./Dashboard"
import { AuthProvider} from "../context/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import UpdateProfile from "./UpdateProfile";
import SignIn from "./SignIn";
import AdminPanel from "./AdminPanel";
// import { database } from "../firebase";


function App() {

  // const [isAdmin, setIsAdmin] = useState(false);


  // {database.ref(`/profiles/${currentUser.uid}`/isAdmin) === true ? setIsAdmin(true) : setIsAdmin(false) }


  return (
    <div
      // style={{
      //   backgroundImage: `url(${bgImg})`,
      //   width: "100%",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                
                
                <Route exact path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />

                <Route path="/update-profile"
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  }
                />

                <Route path="/admin"
                  element={
                    <PrivateRoute>
                      <AdminPanel />
                    </PrivateRoute>
                  }
                />

                <Route path="/signin" element = {<SignIn />} />

              </Routes>
            </AuthProvider> 
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;