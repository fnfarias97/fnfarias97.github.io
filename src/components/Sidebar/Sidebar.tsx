import * as React from 'react';
import profilePic from '../../images/fer-profile.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'

let fullName = "Fernando Farias"

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
    return (<div className="h-screen w-1/5 bg-gray-700">
        <img 
            src={profilePic} 
            alt="Fer profile"
            className="rounded-full"
            width="120px"
        />
        <h1>{fullName}</h1>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github-square"></i>

        <Navbar navItems={navItems} />
        <Footer fullName={fullName}/>
    </div>)
}

export default Sidebar;
