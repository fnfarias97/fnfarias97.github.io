import React, { ReactElement, ReactNode, useContext, createContext }  from 'react';

let hero = {
    fullName:"Fernando Farias",
    title: "Full Stack Developer",
    stack: ["React", "Node", "MySQL", "Git", "GitHub", "HTML", "CSS"]
}

const HeroContext = createContext(hero);

export function useHero() {
    return useContext(HeroContext)
}

export default function HeroProvider({ children }: {children: ReactNode}): ReactElement {

    return <HeroContext.Provider value={hero}>
        {children}
    </HeroContext.Provider>
}
