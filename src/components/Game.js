import React from 'react';

import Header from './Header';
import Player from './Player';
import { Button, Container, AppContext, Table } from './shared';

const renderGameElements = (props) => {
    const { history, player, computer, started, update } = props;

    if (!started) return <Button
        onClick={() => update({ started: true })}
        name="start"
    />

    return (
        <Container style={{ display: 'flex', flexDirection: 'row', height: 300 }}>
            <Table history={history} />
            <Player {...player} />
            <Player {...computer} />
            <Container>{started && <Button
                onClick={() => update({
                    playing: true,
                    status: 'rolling dices...',
                    count: props.count + 1,
                })}
                name="roll dice"
            />}</Container>
        </Container>
    );
};

const updateScore = (players, update, log) => {
    log.add(players);
    if (new Set(players.map((p) => p.val)).size === 1)
        return update({ status: "It's a draw!", playing: false });

    const winner = players.reduce((leading, next) =>
        leading.val > next.val ? leading : next
    );
    winner.score++;

    return update({
        status: `${winner.name} has won this game!`,
        [winner.name]: winner,
        playing: false,
    });
};

const Game = () => {
    const state = React.useContext(AppContext);
    const { player, computer, update, log } = state;

    React.useEffect(() => {
        if (!player.rolling && !computer.rolling) {
            updateScore([player, computer], update, log);
        }
    }, [player, computer]);

    return (
        <Container>
            <Header />
            {renderGameElements(state)}
            <div>footer: {state.count}</div>
        </Container>
    );
};

export default Game;
