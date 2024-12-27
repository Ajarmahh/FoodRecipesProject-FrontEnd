import { useState, useEffect, useRef} from "react"
import NavBar from './NavBar'
import './App.css'
import Card from "./Card"
import AboutUs from "./AbouUs"
import Form from"./Form"
import MyChatBot from "./MyChatbot"

function App() {
  const[cards, setCards] = useState([]);

  const sectionRefs = useRef({
    aboutUs: null,
    cards: null,});

  const [filteredCards, setFilteredCards] = useState([]);

  /*function handleCards(){
    setCards(cards.map(card => console.log(cards))
  )}*/

  const[newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    prepare: "", 
    image: ""
  });

  function handleForm(event){
    const {name, value} = event.target
    setNewRecipe(prevNewRecipe=> ({
      ...prevNewRecipe,
      [name]: value
    }))
  }

  
  useEffect(()=> {
    async function callCArds(){ const response = await fetch("http://127.0.0.1:4000/")
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

  function handleSubmit(event) {
    //event.preventDefault(); // Prevent form's default behavior
  
    async function submitRecipe() {
      try {
        const API_URL = "http://127.0.0.1:4000/add_recipe";
  
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRecipe), // Send the form data as JSON
        });
  
        if (response.ok) {
          const createdRecipe = await response.json(); // Get the newly created recipe from the response
  
          // Add the new card to the cards state
          setCards((prevCards) => [...prevCards, createdRecipe]);
          setFilteredCards((prevCards) => [...prevCards, createdRecipe]); // Update filteredCards as well
  
          // Reset the form fields
          setNewRecipe({
            name: "",
            description: "",
            ingredients: "",
            prepare: "",
            image: ""
          });
          
          if (setFormIsOpen) {
            setFormIsOpen(false);
          }
          
        } else {
          console.error("Failed to submit recipe", response.statusText);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }
  
    submitRecipe();
  }

  const handleDelete = async (id) => {
    try {
      console.log("Deleting recipe with id:", id);  
  
      // Send DELETE request with id
      const response = await fetch(`http://127.0.0.1:4000/delete_recipe/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete recipe');
      }
  
      setFilteredCards(filteredCards.filter((card) => card.id !== id));
      console.log('Recipe deleted successfully');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  
  return (
    <div>
        <NavBar sectionRefs={sectionRefs} onSearch={handleSearch} />  
        <Form newRecipe={newRecipe} handleForm={handleForm} onSubmit={handleSubmit}/>
            <section ref={(el) => (sectionRefs.current.cards = el)}>
              <div className="cards-container">
                {filteredCards.length === 0 ? null :     
                  filteredCards.map((card) => (
                  <Card 
                    image={card.image} 
                    key={card.id}
                    name={card.name}
                    description={card.description} 
                    ingredients={card.ingredients}
                    prepare={card.prepare}
                    onDelete={()=> handleDelete(card.id)}
                  />
                ))
              }
              </div>
            </section> 
      
            <section
                    ref={(el) => (sectionRefs.current.aboutUs = el)}>
                    <AboutUs />
            </section>
        <MyChatBot />
    </div>    
  )
}

export default App
