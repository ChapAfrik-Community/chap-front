import React, {useEffect, useState} from 'react'
import '../css/Nav.css';
import chapafrik from '../assets/img/chapAfrik.png';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false)
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    }, []); 

    return (
             <div className={`nav ${show && "nav__white"}`}>
                 <div>
                    <img 
                        className="nav__logo"
                        src={chapafrik} alt="logo"/>
                 </div>
                <div className="nav__link">
                    <ul>
                        <li className="nav__item" style={{
                            marginRight:'20px'
                        }}>About US</li>
                        <li className="nav__item"
                        style={{
                            marginRight:'20px'
                        }}
                        >Meet us</li>
                        <li 
                        className="nav__item"
                        style={{
                            marginRight:'20px'
                        }}
                        >Contact</li>
                    </ul>
                </div>
            </div>
    )
}

export default Nav

