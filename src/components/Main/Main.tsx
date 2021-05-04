import * as React from 'react';
import { useHero } from '../../context/HeroContext'
import Hero from './Hero';



function Main() {

    const hero = useHero();

    return (<div className="w-4/5 ml-auto">
        <Hero/>
        <h1>{hero.fullName}</h1>
    </div>)
}

export default Main;
