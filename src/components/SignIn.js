import React, {  useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import firebase from "@firebase/app-compat";
import { database } from "../firebase";
// import "../styles/front.css";
import '../styles/Style.css';
import { FaMobile, FaEnvelope, FaLocationArrow } from "react-icons/fa";



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
    // <div>
    //   <Card id="signup-card">
    //     <Card.Body>
    //       <h2 className="text-center mt-4">Sign In</h2>
    //       {error && <Alert variant="danger">{error}</Alert>}
          
    //       <Form onSubmit={handleSubmit}>
            
    //         <Button disabled={loading} className="w-100" type="signin" id="signin" onClick={handleSubmit}>
    //           Sign In WIth Google
    //         </Button>
    //       </Form>

    //     </Card.Body>
    //   </Card>

    // </div>
    <div>
            <header>
            <nav>
                <div class="logo">
                    <span id="blue">GYM</span>POINT
                </div>
                <div class="menu">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>

                <div class="icon">
                    <img src="../images/logo.png" alt="logo"/>
                </div>
            </nav>


            <div class="container">
                <div class="left">
                    <img src="1.jpg" height="650px" />
                </div>
                <div class="right">
                    <p>STEP UP YOUR</p>
                    <h1><span id="blue">FITNESS</span> WITH US</h1>
                    <p>Build Your Body And Fitness With Professional Touch</p>
                    <br/>
                    <button class="btn"><span class="btnstyle"><strong>Join Us</strong></span></button>
                </div>
            </div>
        </header>
            <section id="about">
                <div class="about-row">
                    <div class="about-left-col">
                        <h1>About<span id="blue"> GYM</span></h1>
                        <p id="p-title">Take care of your body. It's the only place you have to live.</p>
                        <p>
                            At GYM POINT, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul. We guarantee the highest quality equipment and training programs available, an expert staff, special amenities that are often not found in other health clubs, attentive service and truly sophisticated surroundings.
                        </p>
                    </div>
                    <div class="about-right-col">
                        <img src="../images/10.jpg"/>
                    </div>
                </div>


            </section><section id="signup">
                <div class="signup-row">
                    <div class="signup-left-col">
                        <img src="../images/img2.png"/>
                    </div>
                    <div class="signup-right-col">
                        <h1> BEING <span id="blue">BODY</span></h1>
                        <h2>BUILDER</h2>

                    </div>
                </div>
            </section>
            
            <section id="services">
                <div class="services-info">
                    <h1>Our <span id="blue">Services</span></h1>
                    <p>What we Provide</p>
                </div>

                <div class="services-row">
                    <div class="services-box">
                        <h1>Cardio</h1>
                    <br/>
                    <img src="../images/treadmill.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Flexing Muscle</h1>
                <br/>
                <img src="../images/strongman.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Weight - Lifting</h1>
                <br/>
                <img src="../images/weightlifting.png" width="100px" height="100px"/>
                </div>



                <div class="services-box">
                    <h1>Dumbbells</h1>
                <br/>
                <img src="dumble.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Bench Press</h1>
                <br/>
                <img src="../images/bench.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Abs Tower</h1>
                <br/>
                <img src="../images/abs.jpg" width="100px" height="100px"/>
                </div>

            </div>
</section>


<section id="contact">
		<div class="services-info">
			<h1>Get in<span id="blue">Touch</span></h1>
	<p> We are Available</p>
</div>

<div class="contact-row">
	<div class="contact-left-col">
		<div class="form">
			<input type="text" name="" placeholder="E-mail"/>
			<input type="text" name="" placeholder="Subject"/>
            <br/>
			<textarea rows="10" cols="40" placeholder="Message"></textarea>
			<br/> <button class="c_btn">Send</button>
		</div>
	</div>
		<div class="contact-right-col">
			<h1><FaEnvelope/> E-mail</h1> <p>contact@gympoint.com</p><br/>
 			<h1><FaMobile/> Mobile</h1><p>    8741253941, 8741253942</p>
 			<br/>
 			<h1><FaLocationArrow/> Address</h1>
 			 <p>    Gym Point<br/>
 			 	    Boring Road, Patna
 			 </p>
		</div>
</div>
</section>


<section id="footer">
	<h1>GYM<span id="blue">POINT</span></h1>
	
	<p>&copy; 2021 GYM POINT</p>
	<img src="../images/logo.png"/>

</section>

</div>
  );



};

export default SignIn
