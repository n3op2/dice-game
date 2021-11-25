import React from 'react';
import AppContext from './AppContext';

const Button = ({ onClick, name = 'Unknown' }) => {
    if (!onClick) throw new Error('missing onClick prop');

    const { playing } = React.useContext(AppContext);
    const isDisabled = typeof playing === undefined ? false : playing;

    return (
        <button className="button-1" disabled={isDisabled} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;
