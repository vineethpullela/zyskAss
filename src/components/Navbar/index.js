import "./index.css"
import React, { useRef } from 'react'
import Logomark from "../../asserts/Logomark.jpg"
import dp from "../../asserts/dp.jpg"
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Navbar=()=> {
    //const [menu,setMenu]=useState(false);

    const menuRef=useRef();

    const openMenu=()=>{
        menuRef.current.style.right="0";
    }

    const closeMenu=()=>{
        menuRef.current.style.right="-568px";
    }

  return (
    <div className="navbar">
        
        <div className="logo-container">
            <img src={Logomark} className="logo" alt=""/>
            <p className="logo-name">Untitled UI</p>
        </div>
        <IoIosMenu size={25}className="open" onClick={openMenu}/>
       
        <ul ref={menuRef} className="nav-menu">
            <IoIosClose size={25} className="close" onClick={closeMenu}/>
            <li className="item">Home</li>
            <li className="item">Products</li>
            <li className="item">Resources</li>
            <li className="item">Pricing</li>
        </ul>
        <img src={dp} className="dp" alt=""/>
    </div>
  )
}

export default Navbar