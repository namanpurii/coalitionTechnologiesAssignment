import React, { useEffect, useState } from 'react'
import logo from "/logo.png"
import logoText from "/logo_text.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div style={{width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "8px 0", backgroundColor: `rgba(255, 255, 255, ${isScrolled ? 1 : 0})`, position: "fixed", top: 0, left: 0, zIndex: 1000, transition: "background-color 0.3s ease"}}>
        <div style={{display: "flex", alignItems: "center", columnGap: "1rem"}}>
        <img src={logo} alt="los angeles mountains logo" onClick={(e)=>{window.location.href="/"}} style={{cursor: "pointer"}}/>
        {isScrolled && <img src={logoText} alt="los angeles mountains logo" onClick={(e)=>{window.location.href="/"}} style={{cursor: "pointer", width: "5rem"}}/>}
        </div>
        <ul style={{listStyleType: "none", display: "flex", alignItems: "center", columnGap: "2rem", fontFamily: "'League Gothic', sans-serif"}}>
            <li key={0} style={{padding: "0 1rem", fontSize: "1.25rem"}}><a href="#history" style={{color: isScrolled? "#414f6b": "white"}}><i>01. HISTORY</i></a></li>
            <li key={1} style={{padding: "0 1rem", fontSize: "1.25rem"}}><a href="#team" style={{color: isScrolled? "#414f6b": "white"}}><i>02. TEAM</i></a></li>
        </ul>
    </div>
  )
}

export default Navbar