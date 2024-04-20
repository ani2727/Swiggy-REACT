
import { FaHome } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import {logo_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{
    const [btnName,setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus();   
    return (

        <div className="flex justify-between bg-black text-white shadow-lg ml-1.5 mr-1.5 rounded-lg">
            <div className="logo-container">
                <img className="w-20 rounded-r-3xl" src={logo_URL} />
            </div>
            <div className="flex items-center"> 
                <ul className="flex p-1 m-4">
                    <li className="px-3">Online Status: {onlineStatus?"✅":"🔴"}</li>
                    <li className="px-3"><Link to="/" className="home">Home</Link></li>
                    <li className="px-3"><Link to="/about" className="home">About Us</Link></li>
                    <li className="px-3"><Link to="/contact" className="home">Contact Us</Link></li>
                    <li className="px-3"><Link to="/cart" className="home">Cart</Link></li>
                    <button className="login" 
                        onClick={()=> {
                            btnName === "Login"?setBtnName("Logout"):setBtnName("Login")
                        }}
                        >{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;