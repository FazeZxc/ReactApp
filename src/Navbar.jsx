import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';

function Nav() {
    const navigate = useNavigate();

    return (

        <div className="flex justify-center">
            <Navbar className="flex flex-row justify-between w-screen ">
                <div className="flex flex-row ">
                    <div><img className="w-18 h-12" src={logo} alt="Logo" /></div>
                    <div><Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 cursor-pointer font-extrabold" onClick={()=>{
                        navigate("/home");
                    }}
                    >HOME</Typography></div>
                </div>
                <div>
                    <Button variant="text" onClick={() => {
                        navigate("/auth/login")
                    }}>Log In</Button>
                    <Button variant="gradient" onClick={() => {
                        navigate("/auth/register")
                    }}>Sign Up</Button>
                </div>
            </Navbar>
        </div>

    )
}


export default Nav