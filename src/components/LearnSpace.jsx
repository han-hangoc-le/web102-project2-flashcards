import './LearnSpace.css'
import { useState, useEffect } from 'react'
import Flipcard from './Flipcard.jsx'
import cards from '../CardData.json'

const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

export default function LearnSpace() {
    // ************** shuffling mechanics - next/back buttons
  const [shuffledCards, setShuffledCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);

  useEffect(() => { // Shuffle the cards once when the component mounts
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
        <div className='buttonsGroup' style={{ paddingTop:'0'}}>
            <button onClick={resetGame} className='buttons'>Shuffle</button>
        </div>
       </> 
    )
}