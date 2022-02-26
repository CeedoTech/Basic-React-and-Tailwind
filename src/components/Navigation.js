import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar =()=>{
    return (
        <nav className="px-2 sm:px-4 py-2.5">
            <div className="container flex justify-between items-center mx-auto">
                <span className="flex">
                <img src="../img/plank.png" alt="omitch" width={70} height={5}/>
                <a className="text-4xl self-center font-semibold" >OmitchBets</a>
                </span>
                <ul className="flex mt-4 space-x-8 text-sm font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" title="The Page is using axios">About</Link></li>
                    <li><NavLink to="/games">Games</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
//
//flex
//flex-wrap
//justify-between
//items-center
//mx-auto
