import React from 'react';

const Text = ({ children = [] }) => {
    // ideally prop-type
    const isValidChildren =
        typeof children === 'string' ||
        children.every((child) => typeof child === 'string');

    if (!isValidChildren) throw new Error('invalid children');
    return <div className="text">{children}</div>;
};

export default Text;
