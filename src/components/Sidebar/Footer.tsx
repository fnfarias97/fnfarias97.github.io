import * as React from 'react';
import { useHero } from '../../context/HeroContext'

function Footer() {

    const hero = useHero();

    return (<footer className="fixed bottom-0 left-0 p-4">
        &copy; {hero.fullName}
    </footer>)
}

export default Footer;