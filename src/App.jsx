import './App.css'
import HeroImageContainer from './components/HeroImageContainer.jsx'
import Navbar from './components/Navbar.jsx'
import HistorySection from './components/HistorySection.jsx'
import TeamSection from './components/TeamSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <HeroImageContainer />
      <Navbar />
      <HistorySection />
      <TeamSection />
      <Footer />
    </>
  )  
}

export default App
