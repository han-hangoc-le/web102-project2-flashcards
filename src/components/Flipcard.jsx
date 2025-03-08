import './Flipcard.css'

export default function Flipcard({ cardImg, cardName, isFlipped, setFlipped, bgColor }) {
    const handleFlip = () => {
        setFlipped(!isFlipped)
    }

    return (
        <>
            <div className='flipcard' onClick={handleFlip}>
                <div className={`flipcardInner ${isFlipped ? "flipped" : ""}`}>
                    <div className='flipcardFront' style={{backgroundColor: bgColor}}>
                      <img src={cardImg} alt={cardName} className='image'/>
                    </div>
                    <div className='flipcardBack' style={{backgroundColor: bgColor}}>
                        <p>{cardName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}