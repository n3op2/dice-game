import React from 'react';
import { AppContext } from '../shared';

const Header = () => {
    const { status } = React.useContext(AppContext);

    return <h1>{status}</h1>;
};

export default Header;
