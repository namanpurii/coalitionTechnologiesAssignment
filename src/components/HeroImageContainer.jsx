import React from 'react'
import heroImage from "/hero_image.png"

const HeroImageContainer = () => {
  return (
    <div style={{height: "100vh", overflow: "hidden"}}>
        <img src={heroImage} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "90% 10%"}} alt="" />
        <div style={{fontFamily: "'League Gothic', sans-serif", fontOpticalSizing: "auto", fontWeight: "400", fontStyle: "normal", fontVariationSettings: '"wdth" 100', position: "absolute", width: "100%", top: "20vh", left: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h2 style={{fontSize: "9rem", color: "#4d4d4d"}}>LOS ANGELES</h2>
            <h1 style={{fontSize: "9.5rem", color: "#414f6b"}}>MOUNTAINS</h1>
        </div>
    </div>
  )
}

export default HeroImageContainer