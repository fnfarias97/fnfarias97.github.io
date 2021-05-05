import React, { ReactElement, ReactNode, useContext, createContext }  from 'react';
import hero from './hero.json'

const HeroContext = createContext(hero);

export function useHero() {
    return useContext(HeroContext)
}

export default function HeroProvider({ children }: {children: ReactNode}): ReactElement {

    return <HeroContext.Provider value={hero}>
        {children}
    </HeroContext.Provider>
}
