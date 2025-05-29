import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
function Formvalidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[nError,setnError]=useState("")
  const[eError,seteError]=useState("")
  const[pError,setpError]=useState("")

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    seteError("")
    setnError("")
    setpError("")
    if(!name.trim().length){
        setnError("Name is required")
    }
    if(!email.includes("@")){
        seteError("email is not valid")
    }
    if(password.length<6){
        setpError("Password must be 6 characters")
    }
   
  };
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw'}} >
        <div>
          
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            
          />
          <p style={{backgroundColor:"red"}} >{nError}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <p style={{backgroundColor:"red"}} >{eError}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{backgroundColor:"red"}} >{pError}</p>
        </Form.Group>
        <Button type="submit" className="ms-5" >Submit</Button>
      </Form>
      </div>
    </div>
  );
}

export default Formvalidation;
