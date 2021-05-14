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
    return (<ul className="my-16">
        {navItems.map((item, index) => {
            return <li key={index} className="text-lg my-8 mx-4 hover:text-white">
                {item.title}
            </li>
        })}        
    </ul>)
}

export default Navbar;
