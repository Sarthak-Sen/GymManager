import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/front.css";


function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    
    event.preventDefault();

    setError('');
    setLoading(true);

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Password Do Not Match!');
    }

    const promises = [];

    if(emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
    }

    if(passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
        navigate("/");
    }).catch(() => {
        setError('Failed to Update account');
    }).finally(() => {
        setLoading(false);
    })

  }

  return (
    <div>
      <Card id="signup-card">
        <Card.Body>
          <h2 className="text-center mt-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Leave Blank to keep the same" />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave Blank to keep the same"/>
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit" id="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" id="login-text">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};


export default UpdateProfile
