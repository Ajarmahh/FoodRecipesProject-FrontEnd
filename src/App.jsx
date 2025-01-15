import { useState, useEffect, useRef} from "react"
import NavBar from './NavBar'
import Home from "./Home"
import './App.css'
import Card from "./Card"
import AboutUs from "./AbouUs"
import Form from"./Form"
import MyChatBot from "./MyChatBot"
import { Link } from "react-router-dom"

function App() {
  const[cards, setCards] = useState([]);

  const sectionRefs = useRef({
    aboutUs: null,
    cards: null,
    home: null
    });

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
    async function callCArds(){ const response = await fetch('https://foodrecipesproject-backend.onrender.com')
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
        const API_URL = "https://foodrecipesproject-backend.onrender.com/add_recipe";
  
        const response = await fetch(API_URL, {
          method: "GET",
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
      const response = await fetch(`https://foodrecipesproject-backend.onrender.com/delete_recipe/${id}`, {
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
        <section
          ref={(el) => (sectionRefs.current.home = el)}>
          <Home />
        </section>
        <div className="relative bg-white bg-opacity-90 pb-10 ">

        <Form newRecipe={newRecipe} handleForm={handleForm} onSubmit={handleSubmit}/>
            <section ref={(el) => (sectionRefs.current.cards = el)}>
              <div className="justify-center justify-items-center">
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
            </div> 
        <MyChatBot />
        <section
          ref={(el) => (sectionRefs.current.aboutUs = el)}>
          <AboutUs />
          <Link className="contact-link" to='/contact-us'>Get In Touch</Link>
        </section>
    </div>    
  )
}

export default App