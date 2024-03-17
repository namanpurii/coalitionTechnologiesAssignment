import React, { useEffect, useState } from 'react'
import bgImage from "/pg1_BGImage.png"
import carouselImage1 from  "/carousel_img1.png"
import carouselImage2 from  "/carousel_img2.png"
import "./historySection.css"

const HistorySection = () => {
  const [activeButton, setActiveButton] = useState(0)
  const [someStyle, setSomeStyle] = useState({display: "flex", columnGap: "0.75rem", transition: "all 1s ease-in-out"})
  const buttonClassNames = ["first", "second", "third", "fourth"]
  const twelveCards = [...Array(12)]

  useEffect(()=>{
    let n = 4;
    const intervalId = setInterval(()=>{
      handleButtonClick((activeButton+1)%n);
    }, 5000)
    return ()=>{
      clearInterval(intervalId)
    }
  }, [activeButton])

  const handleButtonClick = (idx)=>{
    setActiveButton(idx)
    if(buttonClassNames[idx] == "first"){
      setSomeStyle({...someStyle, transform: "translateX(-0%)"}) 
    }
    else if(buttonClassNames[idx] == "second") {
      setSomeStyle({...someStyle, transform: "translateX(-25%)"})
    }
    else if(buttonClassNames[idx] == "third") {
      setSomeStyle({...someStyle, transform: "translateX(-50%)"})
    }
    else {setSomeStyle({...someStyle, transform: "translateX(-75%)"})}
  }

  return (
    <div id="history" style={{overflow: "hidden", position: "relative", height: "100vh"}}>
        <img src={bgImage} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "90% 10%"}} alt="" />
        <div style={{width: "50vw", position: "absolute", top: "62px", left: "25vw", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center"}}>
            <div style={{display: "flex", fontFamily: "'League Gothic', sans-serif", alignItems: "center", justifyContent: "start"}}>
                <h1 style={{fontSize: "8rem"}}>01.</h1>
                <h2 style={{fontSize: "3rem", position: "relative", left: -15, top: 5}}>HISTORY</h2>
            </div>
            <p style={{fontFamily: "sans-serif"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque praesentium accusantium cum consequatur, porro aspernatur repellendus quam eligendi, aperiam dolor voluptatibus velit dolorem aliquam quas neque at quasi corporis harum?</p>
        </div>
        <div style={{position: "absolute", bottom: 0, left: 0, height: "36.5%", width: "100vw", backgroundColor: "rgba(65, 79, 102, 0.82)"}}>
          <div style={{display: "flex", alignItems: "start", justifyContent: "center", height: "100%", width: "55%", margin: "0 auto", flexDirection: "column"}}>
            <div style={someStyle}>
              {twelveCards.map((_, idx)=>(
                    <div key={idx}>
                        <img src={idx%2==0?carouselImage1:carouselImage2} alt="" style={{display: "block", width: "17rem"}}/>
                    </div>
                  ))}
            </div>
            <div className='map' style={{alignSelf: "center"}}>
              {[0, 1, 2, 3].map((_,idx)=> (
                <button key={idx} className={`${buttonClassNames[idx]}` + (activeButton === idx ? " active" : "")} onClick={()=> handleButtonClick(idx)}></button>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default HistorySection