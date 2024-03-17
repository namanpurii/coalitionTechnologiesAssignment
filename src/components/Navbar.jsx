import React from 'react'
import logo from "/logo.png"
const Navbar = () => {
  return (
    <div style={{width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "8px 0", backgroundColor: "rgba(255, 255, 255, 0)", position: "absolute", top: 0, left: 0}}>
        <img src={logo} alt="los angeles mountains logo" onClick={(e)=>{window.location.href="/"}} style={{cursor: "pointer"}}/>
        <ul style={{listStyleType: "none", display: "flex", alignItems: "center", columnGap: "2rem"}}>
            <li key={0}><a href="#history">01. HISTORY</a></li>
            <li key={1}><a href="#team">02. TEAM</a></li>
        </ul>
    </div>
  )
}

export default Navbar