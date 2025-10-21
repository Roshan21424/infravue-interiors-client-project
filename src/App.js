import './App.css';
import Catelog from './Components/Catelog';
import Domains from './Components/Domains';
import FAQSection from './Components/FAQ';
import LandingPage from './Components/LandingPage';
import PartnersRow from './Components/Patners';
import CardGrid from './Components/Points';
import Quote from './Components/Quote';
import ProcessSteps from './Components/Record';
import StyleSentence from './Components/StyleSentence';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Partners from './Components/Patners';
import TravelHero from './Components/Mission';
import ParallaxScroll from './Components/Mission';
import Founder from './Components/Founder';
import { useState } from 'react';
import Preloader from './Components/Preloader';
import WhatsAppButton from './Components/Widget';


function App() {


    const [loading, setLoading] = useState(true)

  return (
    
    <div className="App">
      <Navbar></Navbar>
      <WhatsAppButton></WhatsAppButton>
      <ParallaxScroll></ParallaxScroll>
      <Hero></Hero>
      <StyleSentence></StyleSentence>
      <Domains></Domains>
      <CardGrid></CardGrid>
      <Projects></Projects>
      <ProcessSteps></ProcessSteps>
      <Partners></Partners> 
      <FAQSection></FAQSection> 
      <Founder></Founder> 
      <Quote></Quote> 
      <Footer></Footer>
      </div>
  );
}

export default App;
