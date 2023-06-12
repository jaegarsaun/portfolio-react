import React from "react";
import "../styles.css";
import Badge from "./Badge";
import { useState } from "react";
import anime from 'animejs/lib/anime.es.js';


function ProjectCard(props) {
    const badgeList = props.badges.map((badge, index) => {
        return (
            <li styles={styles.badgeLi} key={index}>
                <Badge txt={badge} />
            </li>
        )
    });




    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    // Fade in each Project Card one after the other on load
    window.onload = () => {
        anime({
            targets: '.card',
            opacity: [0, 1],
            translateY: [-100, 0],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: anime.stagger(200),
        })
    }

    return (
        <div style={styles.card} className="card">
            <div style={styles.imgWrapper} className={isHovered ? 'img-card img-card-hover' : 'img-card'} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                {/* img with the source of ../imgs/csgofrags.png */}
                <img src={props.img} alt="CSGO Frags" style={styles.img} />

            </div>
            <div style={styles.txtCont}>
                <h1 style={styles.title} className="font-reg main-txt">{props.title}</h1>
                <p style={styles.desc} className="font-reg txt-secondary">{props.desc}</p>
            </div>
            <ul style={styles.badgeUl}>
                {badgeList}
            </ul>
        </div>
    )
}

const styles = {
    card: {
        width: '375px',
        height: '400px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        opacity: '0',

    },
    imgWrapper: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        padding: '10px',
    },
    txtCont: {
        width: '100%',
        height: 'auto',
        marginTop: '10px',
    },
    title: {
        fontSize: '1.25rem',
        marginBottom: '10px',
    },
    desc: {
        fontSize: '1rem',
    },
    badgeCont: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },
    badgeUl: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        listStyle: 'none',
    },
    badgeLi: {
        // margin right, top and bottom 10px
        marginRight: '10px',
        marginTop: '10px',
        marginBottom: '10px',

    },
    img: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
    },

}

export default ProjectCard;