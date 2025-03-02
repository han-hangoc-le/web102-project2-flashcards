import './Flipcard.css'

export default function Flipcard() {
    return (
        <>
            <div className='card'>
                <img src='/bunmam.jpg' className='image'/>
            </div>

            <div className='flipcard'>
                <div className='flipcardInner'>
                    <div className='flipcardFront'>
                      <img src='/bunmam.jpg' className='image'/>
                    </div>
                    <div className='flipcardBack'>
                        <p>This is bunmam.</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" style={{ width: '300px' , height: '300px' }}/>
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </>
    )
}