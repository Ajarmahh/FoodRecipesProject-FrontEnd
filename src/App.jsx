import { useState, useEffect, useRef} from "react"
import NavBar from './NavBar'
import './App.css'
import Card from "./Card"
import AboutUs from "./AbouUs"

function App() {
  const[cards, setCards] = useState([]);

  const sectionRefs = useRef({
    aboutUs: null,
    cards: null,});

  const [filteredCards, setFilteredCards] = useState([]);
  
  function handleCards(){
    setCards(cards.map(card => console.log(cards))
  )}
  
  useEffect(()=> {
    async function callCArds(){ const response = await fetch("https://foodrecipesproject-backend.onrender.com/")
    const data = await response.json()
    setCards(data)
    setFilteredCards(data)
  }
  callCArds()
   
  }, [])

  function handleSearch(query) {
    if (!query) {
      setFilteredCards(cards); 
    } else {
      setFilteredCards(
        cards.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }
 
  console.log(cards)
  return (
    <>
      <NavBar sectionRefs={sectionRefs} onSearch={handleSearch} />
      
        <section
          ref={(el) => (sectionRefs.current.cards = el)}>
          <div className="cards-container">
          {filteredCards.length === 0 ? null :     
            filteredCards.map((card) =>(
          <Card image={<img className="card-image" src={card.image}/>} 
                key={card.id}
                name={card.name}
                description= {card.description} 
                ingredients={card.ingredients}
                preparation={card.how_to_prepare}
                />))}
          </div>
        </section>  
      
        <section
                ref={(el) => (sectionRefs.current.aboutUs = el)}>
                <AboutUs />
        </section>
    </>    
  )
}

export default App
