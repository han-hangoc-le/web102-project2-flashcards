import './Flipcard.css'
import { useState } from "react";

export default function Flipcard({ cardImg, cardName, isFlipped, setFlipped }) {
    const handleFlip = () => {
        setFlipped(!isFlipped)
    }

    return (
        <>
            <div className='flipcard' onClick={handleFlip}>
                <div className={`flipcardInner ${isFlipped ? "flipped" : ""}`}>
                    <div className='flipcardFront'>
                      <img src={cardImg} alt={cardName} className='image'/>
                    </div>
                    <div className='flipcardBack'>
                        <p>{cardName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}