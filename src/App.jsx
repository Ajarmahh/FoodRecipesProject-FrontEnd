import { useState, useEffect} from "react"

import './App.css'
import Card from "./Card"

function App() {
  const[cards, setCards] = useState([])
  
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
      {cards.map(card=>(
      <Card key={card.id}
            title={card.name}
            text = {card.description}  />))}
    </>
  )
}

export default App
