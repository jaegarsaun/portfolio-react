import React from 'react';
import '../styles.css';
import csgoFragsImg from '../imgs/csgofrags.png';

import anime from 'animejs/lib/anime.es.js';

import SectionHead from '../components/SectionHead';
import ProjectCard from '../components/ProjectCard';

function LearnMore() {

    const successTools = [
        // An array of SVGs

        `<svg viewBox="0 0 128 128">
        <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
        </svg>`,

        /*
        React
        Node
        MongoDB
        Express
        Javascript
        HTML
        CSS
        Electron
        Chakra UI
        MongoDB
        Mongoose
        SQLite
        Github
        Git
        Figma
        Photoshop
        Visual Studio

        
        */


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
    left: {
        width: '50%',
    },
    right: {
        width: '50%',
    },

}

export default LearnMore;