import { Suspense, useState } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import PricingContainer from './components/price-section/PricingContainer'
import Values from './components/Values'
import GetStarted from './components/GetStarted'
import Plans from './components/Plans'
import Footer from './components/Footer'


const fetchedPriceData = async() =>{
  const res = await fetch("/data.json");
  return res.json();
}

const priceData = fetchedPriceData();

function App() {
const [selected, setSelected] = useState([]);
  return (
    <>
        <Navbar selected={selected}></Navbar>
        <HeroBanner></HeroBanner>
        <Values></Values>
        <Suspense fallback = {<span className="loading loading-bars loading-xl"></span>}>
            <PricingContainer priceData = {priceData} selected={selected} setSelected={setSelected} ></PricingContainer>
        </Suspense>

        <GetStarted></GetStarted>
        <Plans></Plans>
        <Footer></Footer>
    </>
  )
}

export default App
