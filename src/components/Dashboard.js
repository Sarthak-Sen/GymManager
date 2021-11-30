import React, {useState} from 'react';
import {Card, Button, Alert} from 'react-bootstrap';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import {useAuth} from "../context/AuthContext";
import { database } from '../firebase';


function Dashboard() {

    const [error, setError] = useState("");

    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    

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
            <Card>
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
                </Card.Body>
            </Card>
        }
            <div className="w-100 text-center mt-2" id="login-text">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
            </>}
        </>
    )
}

export default Dashboard
