import * as React from 'react';

function Footer({fullName}: {fullName: string}) {
    return (<footer>
        &copy; {fullName}
    </footer>)
}

export default Footer;