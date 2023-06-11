import React from "react";
import "../styles.css";
import Badge from "./Badge";
import { useState } from "react";


function ProjectCard(props) {
    const badgeList = props.badges.map((badge) => {
        return (
            <li styles={styles.badgeLi}>
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


    return (
        <div style={styles.card}>
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