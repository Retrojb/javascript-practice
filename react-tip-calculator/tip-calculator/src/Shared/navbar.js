import React, { useState } from "react";

// Add a router for these
// pass as props
const NavBar = () => {
    const [wid, setWid ] = useState('25%');

    const openSideNav = () => {
        setWid('25%');
    }
    const closeSideNav = () => {
        setWid('0%');
    }
    return (
        <>
        <button onClick={openSideNav}>Expand</button>
        <div className="nav-container" style={{ width: wid}}>
            <button onClick={closeSideNav}>X</button>
            <a href="#section">About</a>
            <a href="#section">Tip Calculator</a>
            <a href="#section">Stop Watch</a>
            <a href="#section">Countdown Timer</a>
        </div>
        </>
    );
}

export default NavBar;