import { useState, useEffect, useRef } from "react";
import './App.css';
import { Link } from "react-router-dom";
import { AboutUs, Card, Home, Form, MyChatBot, NavBar } from "./components";

function App() {
  const [cards, setCards] = useState([]);
  const sectionRefs = useRef({
    aboutUs: null,
    cards: null,
    home: null
  });

  const [filteredCards, setFilteredCards] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    prepare: "",
    image: ""
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the user is authenticated

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }

    async function callCards() {
      const response = await fetch('http://127.0.0.1:4000/');
      const data = await response.json();
      setCards(data);
      setFilteredCards(data);
    }
    callCards();
  }, []);

  const handleForm = (event) => {
    const { name, value } = event.target;
    setNewRecipe((prevNewRecipe) => ({
      ...prevNewRecipe,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form's default behavior

    if (!isAuthenticated) {
      alert("Please log in to add a recipe.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const API_URL = "http://127.0.0.1:4000/add_recipe";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`  // Send the token in the header
        },
        body: JSON.stringify(newRecipe)
      });

      if (response.ok) {
        const createdRecipe = await response.json();
        setCards((prevCards) => [...prevCards, createdRecipe]);
        setFilteredCards((prevCards) => [...prevCards, createdRecipe]);
        setNewRecipe({
          name: "",
          description: "",
          ingredients: "",
          prepare: "",
          image: ""
        });
      } else {
        console.error("Failed to submit recipe", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to delete a recipe.");
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:4000/delete_recipe/${id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bearer ${token}` // Send token in header for authorization
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete recipe');
      }

      setFilteredCards(filteredCards.filter((card) => card.id !== id));
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <NavBar sectionRefs={sectionRefs} onSearch={handleSearch} />
      <section ref={(el) => (sectionRefs.current.home = el)}>
        <Home />
      </section>
      <div className="relative bg-white bg-opacity-90 pb-10">
        <Form newRecipe={newRecipe} handleForm={handleForm} onSubmit={handleSubmit} />
        <section ref={(el) => (sectionRefs.current.cards = el)}>
          <div className="justify-center justify-items-center">
            {filteredCards.length === 0 ? null :
              filteredCards.map((card) => (
                <Card
                  image={card.image}
                  key={card.id || Date.now()}
                  name={card.name}
                  description={card.description}
                  ingredients={card.ingredients}
                  prepare={card.prepare}
                  isAuthenticated={isAuthenticated}
                  onDelete={() => handleDelete(card.id)}
                />
              ))
            }
          </div>
        </section>
      </div>
      <MyChatBot />
      <section ref={(el) => (sectionRefs.current.aboutUs = el)}>
        <AboutUs />
        <Link className="contact-link" to='/contact-us'>Get In Touch</Link>
      </section>
    </div>
  );
}

export default App;