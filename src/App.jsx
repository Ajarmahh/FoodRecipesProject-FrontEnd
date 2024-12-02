import data from "./data"
import './App.css'
import Card from "./Card"

function App() {
  const cards = data.map(card => {
    console.log(data)
    return(
      <Card
        key={card.id}
        {...card}
      />
    )
  })

  return (
    <>
    {cards}
    </>
  )
}

export default App
