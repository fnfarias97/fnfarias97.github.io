import * as React from 'react';
import bgPic from '../../images/bg-dark.jpg';
import './Hero.css'

import { useHero } from '../../context/HeroContext';
// import { useDarkMode } from '../../context/useDarkMode'



function Hero() {

    const hero = useHero();
    let myTitle = <span style={{fontStyle:"italic"}}>{hero.title}</span>
    let myAnimationStyle = {animation:""}
    // const [theme, toggleTheme] = useDarkMode();

    return (<div id="bg-image" className="opacity-95 h-screen bg-cover bg-fixed px-16 flex"
    style={{backgroundImage:`linear-gradient(90deg, rgba(180, 58, 163, 0.6), rgba(253, 29, 29, 0.5), rgba(253, 250, 69, 0.5)), url(${bgPic})`}}>
        {/* <button onClick={() => toggleTheme}>Toggle Dark Mode</button> */}
        <div className="my-auto text-white ">
            <h1 className="text-6xl py-4 font-bold">{hero.fullName}</h1>
            <h2 className=" text-3xl font-bold">
                <div className="slider-wrapper flex content-center justify-start">
                    {hero.title}:
                    <div className="slider overflow-hidden h-10">
                        {hero.skills.map((item, index) => {
                            index === 0?
                            myAnimationStyle={animation:"slide 20s linear infinite"} :
                            myAnimationStyle={animation:""}

                            return <div 
                            className={`slider-text${index} px-4 mb-6`}
                            style={myAnimationStyle} 
                            key={index}>{item}</div>
                        })}
                    </div>
                </div>
            </h2>

            <p className="text-2xl my-6">¿Qué es un {myTitle}?
            Este perfil es el de un desarrollador informático, con conocimientos tanto de front end como de back end que se encarga de coordinar las acciones de desarrollo de ambas partes</p>
        </div>
    </div>)
}

export default Hero;
