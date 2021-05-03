import * as React from 'react';

type navItemsType = {
    navItems: {
        title: string, 
        link: string
    }[]
}

function Navbar({
    navItems
}: navItemsType) {
    return (<ul>
        {navItems.map((item, index) => {
            return <li key={index}>
                {item.title}
            </li>
        })}        
    </ul>)
}

export default Navbar;
