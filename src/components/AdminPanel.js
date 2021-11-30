import React, {useEffect, useState} from 'react'
import {Button, Alert} from 'react-bootstrap';
import {useAuth} from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'



function AdminPanel() {
    const {currentUser, logout} = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

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
            <h1>{currentUser.age}</h1>


            {error && <Alert variant="danger">{error}</Alert>}


            <div className="w-100 text-center mt-2" id="login-text">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}

export default AdminPanel
