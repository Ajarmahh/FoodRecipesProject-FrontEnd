import { useState, useEffect, useRef} from "react"
import NavBar from './NavBar'

import './App.css'
import Card from "./Card"
import AboutUs from "./AbouUs"

function App() {
  const[cards, setCards] = useState([])
  const sectionRefs = useRef({
    aboutUs: null,
    cards: null,})
  
  function handleCards(){
    setCards(cards.map(card => console.log(cards))
  )}
  
  useEffect(()=> {
    async function callCArds(){ const response = await fetch("https://foodrecipesproject-backend.onrender.com/")
    const data = await response.json()
    setCards(data)
  }
  callCArds()
   
  }, [])
 
  console.log(cards)
  return (
    <>
      <NavBar sectionRefs={sectionRefs} />
      <div className="cards-container">
        <section
          ref={(el) => (sectionRefs.current.cards = el)}>
          {cards.map((card)=>(
          <Card image={<img className="card-image" src={card.image}/>} 
                key={card.id}
                name={card.name}
                description= {card.description} 
                ingredients={card.ingredients}
                preparation={card.how_to_prepare}
                />))}
        </section>  
      </div>
        <section
                ref={(el) => (sectionRefs.current.aboutUs = el)}>
                <AboutUs />
        </section>
    </>    
  )
}

export default App
