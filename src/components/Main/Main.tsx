import * as React from 'react';
import { useHero } from '../../context/HeroContext'
import Content from './Content/Content';
import Hero from './Hero';

function Main() {

    const hero = useHero();

    return (<div className="w-4/5 ml-auto">
        <Hero/>

        <Content title="Sobre mí">
            {hero.about}
        </Content>
        <Content title="Habilidades">
            {hero.skills}
        </Content>
        <Content title="Currículum">
            {/* {hero.resume} */}
        </Content>
    </div>)
}

export default Main;
