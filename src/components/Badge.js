import React from "react";
import "../styles.css";

function Badge(props) {
    return (
        <div style={styles.badge}>
            <p style={styles.txt} className="font-reg txt-secondary">{props.txt}</p>
        </div>
    )
}

const styles = {
    badge: {
        backgroundColor: 'var(--badge-clr)',
        borderRadius: '5px',
        padding: '5px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        marginTop: '10px',

    },
    txt: {
        fontSize: '.75rem',
    }
}

export default Badge;