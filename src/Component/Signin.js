import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import authslice, { authAction } from "../Data/token-slics";

function Signin() {
    const emailref=useRef()
    const passwordref=useRef()
     const idtoken=useSelector((state)=>state.auth.idToken)
    const dispatch=useDispatch()
    console.log(idtoken)
    const signInHandler = async()=>{
        const email=emailref.current.value
        const password=passwordref.current.value
        if(!email.includes("@")){
            alert("enter a valid email")
        }
        const data = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5f4xVykU56hJG_XJDXG6fmYUiwr1v7C8",{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            }),
            headers: {
                "Content-Type": "application/json",
              },
        })
        if(data.ok){
            const result=await data.json()
            console.log(result.idToken)
            localStorage.setItem('idToken',result.idToken)
            
             dispatch(authAction.setToken(result.idToken))
            console.log(idtoken)
             window.location.href="/compose"
        }
    }

  return (
    <div style={{  backgroundColor: "#f1f3f4",minHeight: "100vh" }}>
          <center style={{paddingTop: "160px" }}> 
        <Card style={{ width: "52rem" ,height:"14rem",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius: "12px", backgroundColor: "#ffffff" }}>
           <Card.Body>
             <Card.Header>Sign In</Card.Header>
            <Card.Text>
            <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
          ref={emailref} />
    </Form.Group>
   <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          ref={passwordref}/>
 </Form.Group>
         </Row>
      </Form>
        </Card.Text>
         <Card.Footer className="text-muted"> 
            <Button size="lg" variant="primary"
            onClick={signInHandler}>Sign In</Button>
        </Card.Footer>
     </Card.Body>
    </Card>
      </center> 
    </div>
  );
}

export default Signin;
