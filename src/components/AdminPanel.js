import React, {useEffect, useState} from 'react'
import {Button, Alert, Form} from 'react-bootstrap';
import {useAuth} from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'
// import { auth, database } from '../firebase'
import firebase from '@firebase/app-compat';
import "../styles/admin.css";
import Chart from './Chart';
// import {AiOutlineSend} from 'react-icons/fa';


function AdminPanel() {
    const {currentUser, logout} = useAuth();
    const [error, setError] = useState("");
    const [profileList, setProfileList] = useState();
   
    const navigate = useNavigate();

                                                                                                         var text1 = "Meal 1: One glass lemon, honey in water water ;; Meal 2: 300 gms of a fruits"

    useEffect(() => {
        const profileRef = firebase.database().ref('profiles');
        profileRef.on('value', (snapshot) => {
            const profiles = snapshot.val();
            const profileList = [];
            for(let uid in profiles){
                profileList.push(profiles[uid]);
                console.log('uid', uid)
            }
            console.log('here?')
            setProfileList(profileList);
            console.log('profiles', profileList);
        });
        // return () => {
        //     // cleanup
        // }
    }, []);

    console.log('profiles', profileList);
    console.log('current', currentUser.uid);


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


            {error && <Alert variant="danger">{error}</Alert>}

            <h1 className="admin-name">Welcome ADMIN : <br /> {currentUser.name}</h1>

            <div id="profileList" className="col-sm-2">
            <Button variant="outline-primary" className="btn">Sarthak Sen</Button> <br />
            <Button variant="outline-primary" className="btn">Amrit</Button> <br />
            <Button variant="outline-primary" className="btn">Maaz</Button> <br />
            
            <Button variant="outline-danger" onClick={handleLogout} className="btn" id="logout">Log Out</Button>
            </div>

            <div id="message" className="col-sm-10">
            <Form id="form">

                <Form.Group className="col-sm-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={20} defaultValue={text1} />
                </Form.Group>
            </Form>
            {/* <AiOutlineSend /> */}
            

            <Chart />
            


            </div>
        </>
    )
}

export default AdminPanel
