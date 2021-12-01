import React, {useState} from 'react';
import {Card, Button, Alert, Form} from 'react-bootstrap';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import {useAuth} from "../context/AuthContext";
import { database } from '../firebase';
import "../styles/dashboard.css";


function Dashboard() {

    const [error, setError] = useState("");

    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
                                                                                                                var text1 = "Meal 1: One glass lemon, honey in water water ;; Meal 2: 300 gms of a fruits"
                                                                                                              

    var user_ref = database.ref(`/profiles/${currentUser.uid}`);

    user_ref.on('value', (snapshot) => {
        
        var data = snapshot.val();
        
        currentUser.name = data.name;
        currentUser.aadhar = data.aadhar;
        currentUser.age = data.age;
        currentUser.dp = data.dp;
        currentUser.mobile = data.mobile;
        currentUser.weight = data.weight;
        currentUser.height = data.height;
        currentUser.admin = data.admin;
    })



    console.log('currentUser', currentUser.name)

    console.log('currentUser', currentUser.dp)

    async function handleLogout(){
        setError('');

        try {
            await logout();
            navigate("/signin");
        } catch {
            setError("Failed to Log Out");
        }
    }

    
    return (
        <>
            {currentUser && <>
            {currentUser.admin ? <Navigate to="/admin" />: 
            <Card id="card">
                <Card.Body>
                    <h2 className="text-center mt-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <img src={currentUser.dp} width="100" height="100" alt="avatar-loading"/> <br />
                    <strong>Email:</strong> {currentUser.email} <br />
                    <strong>Name: </strong> {currentUser.name} <br />
                    <strong>Age: </strong> {currentUser.age} <br />
                    <strong>Height: </strong> {currentUser.height} <br />
                    <strong>Weight: </strong> {currentUser.weight}

                    
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                    <div id="logout-text">
                        <Button variant="outline-danger" onClick={handleLogout} id="logout">Log Out</Button>
                    </div>
                </Card.Body>
            </Card>

        }

                <Form id="form">

                <Form.Group className="col-sm-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={20} defaultValue={text1} disabled={true} />
                </Form.Group>
                </Form>



            
            </>}
        </>
    )
}

export default Dashboard
