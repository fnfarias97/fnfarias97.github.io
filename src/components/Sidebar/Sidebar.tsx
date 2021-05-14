import * as React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import HeroProfile from './HeroProfile';

let navItems = [{
    title: "Inicio",
    link: "/"
},{
    title: "Sobre mí",
    link: "/about"    
},{
    title: "Habilidades",
    link: "/skills"    
},{
    title: "Currículum",
    link: "/resume"    
}]


function Sidebar() {
    return (<div className="h-screen w-1/5 bg-white dark:bg-black fixed p-5 text-gray-400">
        <HeroProfile />

        <Navbar navItems={navItems} />
        <Footer/>
    </div>)
}

export default Sidebar;
