import React from 'react';
import '../styles.css';
import csgoFragsImg from '../imgs/csgofrags.png';

import anime from 'animejs/lib/anime.es.js';

import SectionHead from '../components/SectionHead';
import ProjectCard from '../components/ProjectCard';

function LearnMore() {

    const successTools = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',


    ]

    const toolList = successTools.map((tool, index) => (
        <li style={styles.toolLi} key={index}>
          <object data={tool} type="image/svg+xml" style={styles.toolImg} width="48" height="48" />
        </li>
      ));




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
                            className='project-card'
                            key='1'
                        />
                        <ProjectCard title='SA.sb'
                            desc='A sound board electron app that allows users to play sounds through their microphone'
                            badges={['Electron', 'Javascript', 'Node', 'CSS']}
                            img={csgoFragsImg}
                            className='project-card'
                            key='2'
                        />
                        <ProjectCard title='TheJJBot'
                            desc='Multi purpose discord bot made for the IT Programming E-Campus 2022/2024 discord server'
                            badges={['DiscordJS', 'Node', 'SQLite', 'Express', 'Javascript']}
                            img={csgoFragsImg}
                            className='project-card'
                            key='3'
                        />
                    </div>
                    <a href='https://github.com' className='font-reg txt-secondary primary-a-button'>View all projects</a>
                </section>
                <section style={styles.section}>
                    <SectionHead title={'Tools for success'} type='right' />
                    <div style={styles.hstack}>
                        <div style={styles.left}>
                            <h1 className='font-reg main-txt' style={styles.bigtext}>The tools I use to <br />succeed in my field.</h1>
                        </div>
                        <div style={styles.right}>
                            <ul style={styles.toolUl}>
                                {toolList}
                            </ul>
                        </div>
                    </div>
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
        marginBottom: '7rem',
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

    },
    hstack: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    bigtext: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
    },
    toolUl: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        listStyle: 'none',
    },
    toolLi: {
        // margin right, top and bottom 10px
        marginRight: '10px',
        marginTop: '10px',
        marginBottom: '10px',

    },
    left:{
        width: '50%',
    },
    right:{
        width: '50%',
    },

}

export default LearnMore;