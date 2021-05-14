import * as React from 'react';
import { useHero } from '../../context/HeroContext'
import profilePic from '../../images/fer-profile.jpeg'


function HeroProfile() {

    const hero = useHero();

    return (<div className="w-100 flex-col text-center">
        <img 
            src={profilePic} 
            alt="Fer profile"
            className="rounded-full mx-auto border-8 border-gray-900 hover:border-gray-800"
            width="140px"
        />
        <h1 className="text-2xl my-2 font-bold text-white">{hero.fullName}</h1>
        <div className="flex justify-center gap-6 text-2xl my-2">
            <a href={hero.social.linkedin}><i className="not-italic fab fa-linkedin hover:text-white"></i></a>
            <a href={hero.social.github}><i className="not-italic fab fa-github-square hover:text-white"></i></a>
        </div>
    </div>)
}

export default HeroProfile;
