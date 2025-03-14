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
      setUserInput("")
      setIsCorrect(null)
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
    setStreak(0)
    setUserInput("")
    setIsCorrect(null)
  }

  // ************** user answer handling
  const [userInput, setUserInput] = useState("")
  const [isCorrect, setIsCorrect] = useState(null)
  const [streak, setStreak] = useState(0)
  const [longestStreak, setlongestStreak] = useState(0)

  const handleSubmit = () => {
    if (userInput.trim().toLowerCase() === shuffledCards[currentIndex].cardName.trim().toLowerCase()) {
        setIsCorrect(true)
        if (streak + 1 > longestStreak) setlongestStreak(streak + 1)
        setStreak(streak + 1)
    } else {
        setIsCorrect(false)
        setStreak(0)
    }
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
       <div className='streakTracker'>
            <p className='para'>Current Streak: {streak}</p>
            <p className='para'>Longest Streak: {longestStreak}</p>
       </div>
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

        <div className='typingAnswer'>
            <div className='answerBox'>
                <input
                    type='text'
                    placeholder='Enter your dish name...'
                    value = {userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className={`inputField ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}/>
                <p className={`feedback ${isCorrect === true ? 'correctText' : isCorrect === false ? 'incorrectText' : ''}`} style={{margin:'0'}}>
                    {isCorrect === true ? 'You got it!' : isCorrect === false ? 'Uh oh... Try again!' : ''}
                </p>
            </div>
            
            <button onClick={handleSubmit} className='buttons'>Submit</button>
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