import React from "react";
import bgImg from "../images/background.jpg";
import "../styles/front.css";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard"
import Login from "./Login";
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import ForgotPassword from "./ForgotPassword";


function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                {/* <PrivateRoute exact path="/" element = {<Dashboard />} /> */}
                <Route exact path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="/signup" element = {<SignUp />} />
                <Route path="/login" element = {<Login />}/>
                <Route path="/forgot-password" element = {<ForgotPassword />}/>

              </Routes>
            </AuthProvider> 
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;