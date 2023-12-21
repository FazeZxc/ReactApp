import {
    Card,
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import Nav from "./Navbar";

function Signup() {
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleFirstNameChanges = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChanges = (e) => {
        setLastName(e.target.value);

    }

    const handleemailChanges = (e) => {
        setEmail(e.target.value);

    }
    const handleUserNameChanges = (e) => {
        setUserName(e.target.value);

    }

    const handleNewPasswordChange = (e) => {

        setNewPassword(e.target.value);
    }

    const handleConfirmNewPasswordChange = (e) => {

        setConfirmNewPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        sendToServer();
    }

    const handleLog = () => {
        setIsLoggedIn("hidden");
    }

    const userObject = { firstName, lastName, email, userName, newPassword };

    const sendToServer = async () => {
        try {
            const response = await fetch("http://localhost:3000/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userObject)
            });
            console.log(userObject);
            const responsefromServer = await response.json();
            handleLog();
            console.log("response from server", responsefromServer);
        } catch (error) {
            console.error('Error', error);
        }
    }


    return (
        <>
            <Nav></Nav>
            <Card className="flex flex-col justify-center items-center pt-20 pb-20 mt-20 gap-14">
                <div>
                    <Typography><h1 className="font-extrabold text-2xl text-ellipsis">New User ? ,  Create Your Account Here</h1></Typography>
                </div>
                <div className="flex flex-col w-72 gap-6">
                    <Input label="First name" value={firstName} onChange={handleFirstNameChanges}></Input>
                    <Input label="Last name" value={lastName} onChange={handleLastNameChanges}></Input>
                    <Input label="Email" value={email} onChange={handleemailChanges}></Input>
                    <Input label="Choose Your Username" value={userName} onChange={handleUserNameChanges}></Input>
                    <Input type="Password" label="Password" value={newPassword} onChange={handleNewPasswordChange}></Input>
                    <Input type="Password" label="Confirm" value={confirmNewPassword} onChange={handleConfirmNewPasswordChange}></Input>
                    <Typography
                        variant="small"
                        color="gray"
                        className="mt-2 flex items-center gap-1 font-normal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-px h-4 w-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Use at least 8 characters, one uppercase, one lowercase and one number.
                    </Typography>
                    <Button variant="gradient" onClick={handleSignUp}>Sign Up</Button>
                </div>
            </Card>
        </>
    )
}

export default Signup