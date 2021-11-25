import React from 'react';

import Dice from './Dice';
import { AppContext, Container, Text } from '../shared';

const rnd = () => Math.ceil(Math.random() * 6);

const Player = (props) => {
    const { update, playing, ...ctx } = React.useContext(AppContext);
    const { name } = props;
    const self = { ...ctx[name], ...props };

    React.useEffect(() => {
        if (playing && !self.rolling)
            update({ [name]: { ...self, rolling: true } });
    }, [playing]);

    React.useEffect(() => {
        if (playing && self.rolling) {
            // await new Promise(r => setTimeout(r, Math.random() * 1000 + 100))
            update({ [name]: { ...self, val: rnd(), rolling: false } });
        }
    }, [self.rolling]);

    return (
        <Container style={{ width: 200 }}>
            <Text>name: {name}</Text>
            <Dice rolling={self.rolling} val={self.val} />
            <Text>score: {self.score.toString()}</Text>
        </Container>
    );
};

export default Player;
