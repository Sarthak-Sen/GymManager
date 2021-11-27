import React, {useState} from 'react';
import {Card, Button, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from "../context/AuthContext";
import { database } from '../firebase';

function Dashboard() {

    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    
    
    
    var user_ref = database.ref(`/profiles/${currentUser.uid}`);
    
    user_ref.on('value', function(snapshot) {
        
        var data = snapshot.val();
        
        currentUser.name = data.name;
        currentUser.aadhar = data.aadhar;
        currentUser.age = data.age;
        currentUser.dp = data.dp;
        currentUser.mobile = data.mobile;
        currentUser.weight = data.weight;
        currentUser.height = data.height;
        
    })
    
    console.log('currentUser', currentUser.name)
    
    

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [])


   


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
            <Card>
                <Card.Body>
                    <h2 className="text-center mt-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email} <br />
                    <strong>Name: </strong> {currentUser.name} <br />
                    <strong>Age: </strong> {currentUser.age}

                    
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2" id="login-text">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}

export default Dashboard
