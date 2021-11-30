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

  const {currentUser, updateName, updateAge, updateHeight, updateWeight, updateMobile, updateAadhar } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    
    event.preventDefault();

    setError('');
    setLoading(true);

    const promises = [];


    if(nameRef.current.value !== currentUser.name) {
      promises.push(updateName(nameRef.current.value))
    }

    if(ageRef.current.value !== currentUser.age) {
      promises.push(updateAge(ageRef.current.value))
    }

    if(heightRef.current.value !== currentUser.height) {
      promises.push(updateHeight(heightRef.current.value))
    }

    if(weightRef.current.value !== currentUser.weight) {
      promises.push(updateWeight(weightRef.current.value))
    }

    if(mobileRef.current.value !== currentUser.mobile) {
      promises.push(updateMobile(mobileRef.current.value))
    }

    if(aadharRef.current.value !== currentUser.aadhar) {
      promises.push(updateAadhar(aadharRef.current.value))
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


            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef} defaultValue={currentUser.name} />
            </Form.Group>


            <Form.Group id="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="age" ref={ageRef} defaultValue={currentUser.age}/>
            </Form.Group>
            

            <Form.Group id="height">
              <Form.Label>Height</Form.Label>
              <Form.Control type="height" ref={heightRef} defaultValue={currentUser.height}/>
            </Form.Group>

            <Form.Group id="weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control type="weight" ref={weightRef} defaultValue={currentUser.weight}/>
            </Form.Group>

            <Form.Group id="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="mobile" ref={mobileRef} defaultValue={currentUser.mobile}/>
            </Form.Group>

            <Form.Group id="aadhar">
              <Form.Label>Aadhar</Form.Label>
              <Form.Control type="aadhar" ref={aadharRef} defaultValue={currentUser.aadhar}/>
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
