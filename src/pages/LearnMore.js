import React from 'react';
import '../styles.css';
import csgoFragsImg from '../imgs/csgofrags.png';

import anime from 'animejs/lib/anime.es.js';

import SectionHead from '../components/SectionHead';
import ProjectCard from '../components/ProjectCard';

function Home() {
    return (
        <div className="App" style={styles.app}>
            <main style={styles.mainCont}>
                <section style={styles.section}>
                    <SectionHead title={'Projects'} type='left' />
                    <div style={styles.cardCont}>
                        <ProjectCard title='CSGO Frags'
                            desc='A web app that allows users to search for Counter-Strike: Global Offensive grenade lineups.'
                            badges={['React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'Chakra UI']}
                            img={csgoFragsImg}
                        />
                        <ProjectCard title='SA.sb'
                            desc='A sound board electron app that allows users to play sounds through their microphone'
                            badges={['Electron', 'Javascript', 'Node', 'CSS']}
                            img={csgoFragsImg}
                        />
                        <ProjectCard title='TheJJBot'
                            desc='Multi purpose discord bot made for the IT Programming E-Campus 2022/2024 discord server'
                            badges={['DiscordJS', 'Node', 'SQLite', 'Express', 'Javascript']}
                            img={csgoFragsImg}
                        />
                    </div>
                    <a href='https://github.com' className='font-reg txt-secondary primary-a-button'>View all projects</a>
                </section>
                <section style={styles.section}>
                    <SectionHead title={'Tools for success'} type='right' />
                </section>
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
    section: {
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    cardCont: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',
        gridGap: '12px',
        maxWidth: '100%',
        alignItems: 'center',
        justifyItems: 'center',
        margin: '0 auto',

    }
}

export default Home;