import React from 'react';
import '../styles.css';
import csgoFragsImg from '../imgs/csgofrags.png';
import { useEffect } from 'react';
// import svgs

import { ReactComponent as GithubSVG } from '../imgs/svg/github.svg';
import { ReactComponent as GitSVG } from '../imgs/svg/git.svg';
import { ReactComponent as FigmaSVG } from '../imgs/svg/figma.svg';
import { ReactComponent as PhotoshopSVG } from '../imgs/svg/photoshop.svg';
import { ReactComponent as VisualStudioSVG } from '../imgs/svg/vscode.svg';
import { ReactComponent as SQLSVG } from '../imgs/svg/sql.svg';
import { ReactComponent as NodeSVG } from '../imgs/svg/node.svg';
import { ReactComponent as ExpressSVG } from '../imgs/svg/express.svg';
import { ReactComponent as MongoDBSVG } from '../imgs/svg/mongodb.svg';
import { ReactComponent as ReactSVG } from '../imgs/svg/react.svg';
import { ReactComponent as ChakraUI } from '../imgs/svg/chakraui.svg';
import { ReactComponent as JavascriptSVG } from '../imgs/svg/javascript.svg';
import { ReactComponent as HTMLSVG } from '../imgs/svg/html.svg';
import { ReactComponent as CSSSVG } from '../imgs/svg/css.svg';
import { ReactComponent as IntelliJSVG } from '../imgs/svg/intellij.svg';
import { ReactComponent as ElectronSVG } from '../imgs/svg/electron.svg';
import { ReactComponent as JavaSVG } from '../imgs/svg/java.svg';



import anime from 'animejs/lib/anime.es.js';

import SectionHead from '../components/SectionHead';
import ProjectCard from '../components/ProjectCard';

function LearnMore() {

    const successTools = [
        // An array of SVGs
        <GithubSVG />,
        <GitSVG />,
        <FigmaSVG />,
        <PhotoshopSVG />,
        <VisualStudioSVG />,
        <SQLSVG />,
        <NodeSVG />,
        <ExpressSVG />,
        <MongoDBSVG />,
        <ReactSVG />,
        <JavascriptSVG />,
        <HTMLSVG />,
        <CSSSVG />,
        <IntelliJSVG />,
        <ElectronSVG />,
        <JavaSVG />,
        <ChakraUI />,
    ]

    const toolList = successTools.map((tool, index) => {
        // Render each SVG
        return (
            <li style={styles.toolLi} key={index} className='svg'>
                {tool}
            </li>
        )

    });

    useEffect(() => {
        // Run the animation after the component has rendered
        // Loop the animation
        anime({
            targets: '.svg',
            scale: [
              {value: .1, easing: 'easeOutSine', duration: 900},
              {value: 1, easing: 'easeInOutQuad', duration: 1200}
            ],
            delay: anime.stagger(500, {grid: [14, 5], from: 'center'}),
            alternate: true,
            loop: true,
            });
        
    }, [toolList]); // Run the animation whenever the toolList changes








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
                    <SectionHead title={'About Me'} type='right' />
                    <div style={styles.bio}>
                        <p className='font-reg txt-secondary' style={styles.bioTxt}>
                            Hi, I'm <span className='clr-text font-bold'>Jaegar</span>, a passionate IT Programming student with a focus on <span className='clr-text font-bold'>frontend development</span>. I love building and designing web applications. I'm currently studying at <span className='clr-text font-bold'>Nova Scotia Community College</span> and always eager to work on new projects. Graduating from high school early, I've received recognition for my <span className='clr-text font-bold'>dedication and enthusiasm</span>. Let's create something amazing together!
                        </p>
                    </div>
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
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
    },
    toolLi: {
        // margin right, top and bottom 10px
        marginRight: '15px',
        marginTop: '10px',
        marginBottom: '15px',

    },
    left: {
        width: '50%',
    },
    right: {
        width: '50%',
    },
    bio: {
        width: '100%',
        marginBottom: '3rem',
    },
    bioTxt: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        textAlign: 'center',
    },

}

export default LearnMore;