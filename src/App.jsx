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
  // ************** shuffling and displaying cards
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
    } else {
      setFinished(true)
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setFlipped(false); // Reset flip state to front
      setCurrentIndex(currentIndex - 1);
    }
  };

  // ************** finish set handling
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setShuffledCards(shuffleArray(cards))
    setCurrentIndex(0)
    setFinished(false)
    setFlipped(false)
  }

  // ************** changing the bg of the card
  const difficultyColors = {
    easy: "#FFE48A",
    medium: "#FC8552",
    hard: "#D44848"
  };

  const bgColor = difficultyColors[shuffledCards[currentIndex]?.difficulty];

  return (
    <>  
      <Header/>
      <div className='cardContainer'>
        {finished ? (
          <>
            <Flipcard
              cardImg={'/logoImg.png'}
              cardName={'You have nhồm nhoàm-ed all the dishes!'}
              isFlipped={isFlipped}
              setFlipped={setFlipped}
              bgColor={'#FFF5D3'}/>
            <button className='restartButton' onClick={resetGame}>Restart</button>
          </>
        ) : (
          <Flipcard
            cardImg={shuffledCards[currentIndex]?.cardImg}
            cardName={shuffledCards[currentIndex]?.cardName}
            isFlipped={isFlipped}
            setFlipped={setFlipped}
            bgColor={bgColor}/>
        )}
        
      </div>
      <div className='buttonsGroup'>
        <button onClick={handleBack} className='buttons'>Back</button>
        <button onClick={handleNext} className='buttons'>Next</button>
      </div>
    </>
  )
}

export default App
