import React from 'react'
import logo from "/logo.png"
import logoText from "/logo_text.png"

const Footer = () => {
  return (
    <div style={{width: "100vw", height:"4rem", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "8px 0", backgroundColor: "#414f6b"}}>
        <div style={{display: "flex", alignItems: "center", columnGap: "1rem"}}>
            <img src={logo} alt="los angeles mountains logo" onClick={(e)=>{window.location.href="/"}} style={{cursor: "pointer" }}/>
            <img src={logoText} alt="los angeles mountains logo" onClick={(e)=>{window.location.href="/"}} style={{cursor: "pointer", width: "5rem"}}/>
        </div>
        <p style={{fontFamily: "'League Gothic', sans-serif", color: "#b0b4be", padding: "0 1rem"}}><i>COPYRIGHT 2016. ALL RIGHTS RESERVED</i></p>
    </div>
  )
}

export default Footer