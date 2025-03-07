import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Flipcard from './components/Flipcard.jsx'
import cards from './CardData.json'

// Function to shuffle an array using Fisher-Yates shuffle
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);

  // Shuffle the cards once when the component mounts
  useEffect(() => {
    setShuffledCards(shuffleArray(cards));
  }, []);

  const handleNext = () => {
    if (currentIndex < shuffledCards.length - 1) {
      setFlipped(false); // Reset flip state to front
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setFlipped(false); // Reset flip state to front
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>  
      <Header/>
      <div className='cardContainer'>
        <Flipcard
        cardImg={cards[currentIndex].cardImg}
        cardName={cards[currentIndex].cardName}
        isFlipped={isFlipped}
        setFlipped={setFlipped}/>
      </div>
      <div className='buttonsGroup'>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default App
