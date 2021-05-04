import * as React from 'react';
import { useHero } from '../../context/HeroContext'
import profilePic from '../../images/fer-profile.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'

let navItems = [{
    title: "Inicio",
    link: ""
},{
    title: "Sobre mí",
    link: ""    
},{
    title: "Habilidades",
    link: ""    
},{
    title: "Currículum",
    link: ""    
},{
    title: "Contacto",
    link: ""    
}]


function Sidebar() {

    const hero = useHero();

    return (<div className="h-screen w-1/5 bg-white dark:bg-gray-700 fixed p-5">
        <img 
            src={profilePic} 
            alt="Fer profile"
            className="rounded-full"
            width="120px"
        />
        <h1>{hero.fullName}</h1>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github-square"></i>

        <Navbar navItems={navItems} />
        <Footer/>
    </div>)
}

export default Sidebar;
