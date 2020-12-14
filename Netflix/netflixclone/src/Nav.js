import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show, setshow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            (window.scrollY>100) ? setshow(true) : setshow(false);
        });
       
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className = {`nav ${show && "nav__black"}`}>
        <img 
            className ="nav__logo"
            src='/netflix1.png'
            alt ='Netflix Logo'/>
        <img 
            className ="avatar__logo"
            src='/avatar.png'
            alt ='Avatar Logo'/>
            
        </div>
    )
}

export default Nav
