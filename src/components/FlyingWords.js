import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../styles.css';
const FlyingWords = () => {
  const words = ['Dedicated', 'Enthusiastic', 'Determined', 'Hard Worker', 'Passionate', 'Creative', 'Innovative', 'Curious', 'Eager', 'Driven', 'Focused', 'Motivated', 'Ambitious', 'Adaptable', 'Reliable', 'Responsible', 'Organized', 'Team Player', 'Leader', 'Problem Solver', 'Communicative', 'Collaborative', 'Flexible']
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    const animateWord = () => {
      const currentWord = words[currentWordIndex];
      anime({
        targets: wordRef.current,
        translateX: [
          { value: -1000, duration: 0 },
          { value: 1000, duration: 0 },
          { value: 0, duration: 2000 },
          { value: -1000, duration: 2000 },
        ],
        delay: 1000,
        loop: false,
        complete: () => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        },
      });
    };

    animateWord();
  }, [currentWordIndex]);

  return (
    <div>
      <p
        ref={wordRef}
        style={styles.word}
        className={words[currentWordIndex] + ' font-bold clr-text'}
      >
        {words[currentWordIndex]}
      </p>
    </div>
  );
};

const styles = {
  word: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3rem',
  },
};

export default FlyingWords;


