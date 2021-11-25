import React from 'react';

import up from '/Users/paulius/dice-game/assets/dice-one-solid.svg';
import back from '/Users/paulius/dice-game/assets/dice-two-solid.svg';
import left from '/Users/paulius/dice-game/assets/dice-three-solid.svg';
import right from '/Users/paulius/dice-game/assets/dice-four-solid.svg';
import front from '/Users/paulius/dice-game/assets/dice-five-solid.svg';
import down from '/Users/paulius/dice-game/assets/dice-six-solid.svg';

const sides = {
    1: { name: 'top', img: up },
    2: { name: 'back', img: back },
    3: { name: 'left', img: left },
    4: { name: 'right', img: right },
    5: { name: 'front', img: front },
    6: { name: 'bottom', img: down },
};

const Dice = ({ rolling, val }) => {
    const [side, setSide] = React.useState({ img: up, name: 'up' });

    React.useEffect(() => {
        if (val === 0) return null;
        setSide(sides[val]);
    }, [rolling, val]);

    return (
        <img
            name={side.name}
            className={rolling ? 'dice-rolling' : 'dice'}
            src={side.img}
        />
    );
};

export default Dice;
