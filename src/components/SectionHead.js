import React from "react";
import '../styles.css';

function SectionHead(props) {
    return (
        // if props type is left then display the title on the left side of the line
        // if props type is right then display the title on the right side of the line
        <div style={styles.cont}>
            {props.type === 'left' ? <h1 style={styles.titleLeft} className="font-reg main-txt">{props.title}</h1> : null}
            <div style={styles.line}></div>
            {props.type === 'right' ? <h1 style={styles.titleRight} className="font-reg main-txt">{props.title}</h1> : null}
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