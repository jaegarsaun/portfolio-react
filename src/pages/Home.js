import React from 'react';
import '../styles.css';

import anime from 'animejs/lib/anime.es.js';




function Home() {
    window.onload = () => {
        anime({
            targets: '.header-txt',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 500,
        })
        anime({
            targets: '.header-bold',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 1000,
        })
        anime({
            targets: '.header-btn',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 1500,
        })
    }

    const handleClick = () => {
        // When clicked, animate the "header" to zoom all the way in then disappear
        anime({
            targets: '.header',
            scale: [1, 10],
            opacity: [1, 0],
            easing: 'easeInOutQuad',
            duration: 700,
        })
        // Then, set display to none
        setTimeout(() => {
            // Change page to LearnMore
            window.location.href = '/learn-more';
        }
            , 700)
    }


    return (
        <div className="App" style={styles.app}>
        <main style={styles.mainCont}>
        <header
            style={styles.header}
            className={'header'}
        >
            <p className="main-txt font-reg header-txt" style={styles.headerTxt} >Heyo, I'm Jaegar</p>
            <h1 className="main-txt header-bold" style={styles.headerBold}>
                My passion is <span class="clr-text">building</span> and <br></br><span class="clr-text">designing</span> for the web.
            </h1>
            <button className='header-btn' onClick={handleClick}>Learn More</button>
        </header>
        </main>
        <div className="app-background"></div>
      </div>
    )
}

const styles = {
    app: {
      display: 'flex',
      justifyContent: 'center',
  
    },
    mainCont: {
      width: '100%',
      maxWidth: '1200px',
  
  
    },
    header: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    headerTxt: {
        textAlign: 'center',
        fontSize: '1.5rem',
    },
    headerBold: {
        textAlign: 'center',
        fontSize: '3.75rem',
    }
}

export default Home;