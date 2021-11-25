import React from 'react';

const defaultStyle = {
    display: 'flex',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
};

const Container = (props) => (
    <div style={{ ...defaultStyle, ...props.style }}>{props.children}</div>
);

export default Container;
