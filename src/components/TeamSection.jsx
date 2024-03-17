import React, {useState} from 'react'
import bgImage1 from "/pg2_BGImage1.png"
import bgImage2 from "/pg2_BGImage2.png"

const TeamSection = () => {
    const [activeButton, setActiveButton] = useState(0);
    const handleButtonClick = (idx)=>{
        setActiveButton(idx)
    }

  return (
    <div id="team" style={{position: "relative", height: "100vh", overflow: "hidden"}}>
        <img src={activeButton===0 ? bgImage1 : bgImage2} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "80% 20%"}} alt="" />
        <div style={{position: "absolute", top: 0, left: 0, width: "100vw", display:"flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", paddingTop: "62px", flexDirection: "column"}}>
            <div style={{width: "50vw", display: "flex", alignItems: "center"}}>
                <div style={{display: "flex", fontFamily: "'League Gothic', sans-serif", alignItems: "center", justifyContent: "start", flex: 1}}>
                    <h1 style={{fontSize: "8rem"}}>02.</h1>
                    <h2 style={{fontSize: "3rem", position: "relative", left: -15, top: 5}}>CLIMB</h2>
                </div>
                <p style={{fontFamily: "sans-serif", flex: 2.5}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque praesentium accusantium cum consequatur, porro aspernatur repellendus quam eligendi, aperiam dolor voluptatibus velit dolorem aliquam quas neque at quasi corporis harum?</p>
            </div>
            <div style={{height: "3.75rem", width: "100%", backgroundColor: "#414f6b", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{width: "50vw",height: "100%", display: "flex", alignItems: "center"}}>
                    {[0,1].map((_, idx)=>(
                        <button style={{transition: "all 0.3s ease", height: "100%", padding: "1rem", border: "none", fontFamily: "'League Gothic', sans-serif", fontSize: "1.5rem", overflowY: "hidden", textDecoration: "underline", cursor: "pointer", color: activeButton===idx ? "#414f6b" : "#b0b4be", backgroundColor: activeButton===idx? "#b0b4be" : "inherit"}} onClick={()=>{handleButtonClick(idx)}}>{`MOUNTAIN ${idx+1}`}</button>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamSection