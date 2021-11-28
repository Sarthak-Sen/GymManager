import React, {useState} from 'react'
import {Button, Alert} from 'react-bootstrap';
import {useAuth} from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'



function AdminPanel() {
    const {currentUser, logout} = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();



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
        <div>
            Panel


            {error && <Alert variant="danger">{error}</Alert>}


            <div className="w-100 text-center mt-2" id="login-text">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}

export default AdminPanel
