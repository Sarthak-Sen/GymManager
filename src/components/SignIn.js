import React, {  useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import firebase from "@firebase/app-compat";
import { database } from "../firebase";
import "../styles/front.css";


function SignIn() {

  const { signin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    
    event.preventDefault();
  
    try{
      setError('');
      setLoading(true);
      const {additionalUserInfo, user} = await signin();
      
      navigate("/");

      if(additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          email: user.email,
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          dp: user.photoURL,
          age: "18",
          weight: "60",
          height: "160",
          mobile: "9999999999",
          aadhar: "1234-1234-1234",
          admin: false,
        })
      }

    } catch (err) {
      setError(err.message);
    }

    setLoading(false);

  }

  return (
    <div>
      <Card id="signup-card">
        <Card.Body>
          <h2 className="text-center mt-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            
            <Button disabled={loading} className="w-100" type="signin" id="signin" onClick={handleSubmit}>
              Sign In WIth Google
            </Button>
          </Form>

        </Card.Body>
      </Card>

    </div>
  );
};

export default SignIn
