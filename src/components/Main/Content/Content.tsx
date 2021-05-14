import * as React from 'react';
import { ReactNode } from 'react';

function Content({title, children}: {title: string, children: ReactNode}) {

    return (<div className="px-4 py-8">
        <h1 className="text-4xl my-4 text-pink-600">{title}</h1>
        <h2 className="text-lg">{children}</h2>
    </div>)
}

export default Content;
