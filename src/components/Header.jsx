import './Header.css'

export default function Header() {
    return (
        <>
            <img src='/logoImg.png' stype={{width:'30%', height:'auto'}}/>
            <h1 className='title'>Beyond Phở Real</h1>
            <h2 className='subtitle'>Learn the names of Vietnamese delicous food</h2>
            <p className='para'>Xin chào, my name is Han Le. I created this little flashcard stacks for you to learn more about our food cuisine.
                <br/>Hope your stomach will "rột rột" and you will get the urge to "nhồm nhoàm" some Vietnamese food afterwards!</p>
            <p className='subtitle' style={{marginBottom: '0', fontSize: '140%', marginBottom: '2%'}}>Number of cards: 24</p>

            

            <p className='subtitle' style={{marginBottom: '0', fontSize: '140%'}}>There are 3 difficulty levels:</p>

            <div className='levelGroup'>
                <div className='levelBox'>
                    <div className='colorBox' style={{backgroundColor: '#FFE48A'}}/>
                    <p className='para'>Nước mắm - Classic.</p>
                </div>
                <div className='levelBox'>
                    <div className='colorBox' style={{backgroundColor: '#FC8552'}}/>
                    <p className='para'>Mắm nêm - A bit funky...</p>
                </div>
                <div className='levelBox'>
                    <div className='colorBox' style={{backgroundColor: '#D44848'}}/>
                    <p className='para'>Mắm tôm - Warning!</p>
                </div>
            </div>
            <p className='para'>(To get the best experience, flip the card back before clicking the next button!)</p>
        </>
    )
}