import React from "react";
import { useEffect, useState } from "react";
import '../styles.css';
import anime from 'animejs/lib/anime.es.js';
function SectionHead(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (e) => {
        e.target.classList.add('spanHovered');
      };
    
      const handleMouseLeave = (e) => {
        e.target.classList.remove('spanHovered');
      };

    // Break down the props.title and wrap each letter in a span
  const title = props.title.split('').map((letter, index) => (
    <span
      key={index}
      className="letter"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {letter}
    </span>
  ));



    return (
        // if props type is left then display the title on the left side of the line
        // if props type is right then display the title on the right side of the line
        <div style={styles.cont}>
            {props.type === 'left' ? <div style={styles.titleLeft} className="font-bold main-txt">{title}</div> : null}
            <div style={styles.line}></div>
            {props.type === 'right' ? <div style={styles.titleRight} className="font-bold main-txt">{title}</div> : null}
        </div>
    )
}

const styles={
    cont: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '2rem',

    },
    line: {
        display: 'flex',
        flexGrow: '1',
        height: '3px',
        borderRadius: '5px',
        backgroundColor: 'var(--primary-clr)',
    },
    titleLeft:{
        fontSize: '1.75rem',
        marginRight: '20px',
    },
    titleRight: {
        fontSize: '1.75rem',
        marginLeft: '20px',
    }
    
    
}

export default SectionHead;