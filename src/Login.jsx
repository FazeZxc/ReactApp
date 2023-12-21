import {
    Card,
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import React, { useState } from 'react';
import Nav from "./Navbar";

var loginStatus = false;

function Login() {
    const [textValue, setTextValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [responseValue, setResponseValue] = useState('');
    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username: ', textValue);
        console.log('Password: ', passwordValue);
        sendToServer();
    };

    const handleResponse = (response) => {
        setResponseValue(response.msg)
    }

    const userObject = { textValue, passwordValue };

    const sendToServer = async () => {
        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userObject)
            });
            console.log(userObject);
            const responsefromServer = await response.json();
            handleResponse(responsefromServer);
            console.log("response from server", responsefromServer);
            loginStatus = true;
            navigate("/home");
        } catch (error) {
            console.error('Error', error);
        }
    }

    return (
        <>
            <Nav></Nav>
            <Card className="flex flex-col justify-center items-center  m-20 p-20 gap-14">
                <div>
                    <Typography><h1 className="font-extrabold text-2xl">Welcome Back ,  Login To Your Account </h1></Typography>
                </div>
                <div className="flex flex-col w-72 gap-6">
                    <Input label="Username" value={textValue} onChange={handleTextChange}></Input>
                    <Input label="Password" value={passwordValue} onChange={handlePasswordChange}></Input>
                    <p>{responseValue}</p>
                    <Button variant="gradient" onClick={handleSubmit}>Log In</Button>
                </div>
            </Card>
        </>
    )
}

export default Login 