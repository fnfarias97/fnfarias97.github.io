import * as React from 'react';
import bgPic from '../../images/bg-dark.jpg'

import { useHero } from '../../context/HeroContext'
// import { useDarkMode } from '../../context/useDarkMode'


function Hero() {

    const hero = useHero();
    // const [theme, toggleTheme] = useDarkMode();
    
    return (<div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 z-10"><div className="opacity-75 h-screen bg-cover bg-fixed px-16 flex"
    style={{backgroundImage: `url(${bgPic})`}}>
        {/* <button onClick={() => toggleTheme}>Toggle Dark Mode</button> */}
        <div className="my-auto text-white text-opacity-100">
            <h1 className="text-6xl py-4">{`<h1>${hero.fullName}</h1>`}</h1>
            <h2 className="text-3xl">{`<h2>${hero.title}: </h2>`}</h2>
            <h3 className="text-3xl my-4">{`¿Qué es un ${<span>full stack developer?</span>}
            Este perfil es el de un desarrollador informático, con conocimientos tanto de front end como de back end que se encarga de coordinar las acciones de desarrollo de ambas partes`}</h3>
        </div>
    </div></div>)
}

export default Hero;
