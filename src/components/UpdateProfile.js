import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/front.css";


function UpdateProfile() {

  const nameRef = useRef();
  const ageRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const mobileRef = useRef();
  const aadharRef = useRef();

  const {currentUser, updateAge } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    
    event.preventDefault();

    setError('');
    setLoading(true);

    const promises = [];


    if(ageRef.current.value !== currentUser.age) {
      promises.push(updateAge(ageRef.current.value))
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

            {/* <Form.Group id="email">
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
            </Form.Group> */}

            <Form.Group id="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="age" ref={ageRef} />
            </Form.Group>


            {/* <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef}/>
            </Form.Group>

            

            <Form.Group id="height">
              <Form.Label>Height</Form.Label>
              <Form.Control type="height" ref={heightRef} />
            </Form.Group>

            <Form.Group id="weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control type="weight" ref={weightRef} />
            </Form.Group>

            <Form.Group id="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="mobile" ref={mobileRef} />
            </Form.Group>

            <Form.Group id="aadhar">
              <Form.Label>Aadhar</Form.Label>
              <Form.Control type="aadhar" ref={aadharRef} />
            </Form.Group> */}


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
