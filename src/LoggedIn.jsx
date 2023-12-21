import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';


function NavLoggedIn() {
    const navigate = useNavigate();

    return (
        <Navbar className="flex flex-row justify-between w-screen ">
            <div className="flex flex-row ">
                <div><img className="w-18 h-12" src={logo} alt="Logo" /></div>
                <div><Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-x-2 p-1 font-medium cursor-pointer text-xl antialiased" onClick={()=>{
                        navigate("/");
                    }}
                >Home</Typography></div>
            </div>
            <div>
                <Button variant="gradient" onClick={() => {
                        navigate("/auth/login")
                    }}>Log Out</Button>
            </div>

        </Navbar>
    )
}


export default NavLoggedIn