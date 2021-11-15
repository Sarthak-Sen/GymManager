import React from "react";
import bgImg from "../images/background.jpg";
import "../styles/front.css";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard"
import Login from "./Login";
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
                <Route exact path="/" element = {<Dashboard />} />
                <Route path="/signup" element = {<SignUp />} />
                <Route path="/login" element = {<Login />}/>
              </Routes>
            </AuthProvider> 
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;