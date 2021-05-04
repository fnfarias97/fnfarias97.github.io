import * as React from 'react';
import bgPic from '../../images/bg-dark.jpg'

import { useHero } from '../../context/HeroContext'
// import { useDarkMode } from '../../context/useDarkMode'


function Hero() {

    const hero = useHero();
    // const [theme, toggleTheme] = useDarkMode();
    
    return (<div className="opacity-75 h-screen bg-cover"
    style={{backgroundImage: `url(${bgPic})`}}>
        {/* <button onClick={() => toggleTheme}>Toggle Dark Mode</button> */}

        <h1>{hero.fullName}</h1>
        <h2>{hero.title}: </h2>
    </div>)
}

export default Hero;
