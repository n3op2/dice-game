import React from 'react';

import Header from './Header';
import Player from './Player';
import { Button, Container, AppContext, Table } from './shared';

const renderGame = ({ history, player, computer, started, update }) => {
    if (!started)
        return (
            <Button onClick={() => update({ started: true })} name="start" />
        );

    return (
        <Container style={{ display: 'flex', flexDirection: 'row' }}>
            <Table history={history} />
            <Player {...player} />
            <Player {...computer} />
        </Container>
    );
};

const updateScore = (players, update, log) => {
    if (new Set(players.map((p) => p.val)).size === 1)
        return update({ status: "It's a draw!", playing: false });

    log(players);
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
            {renderGame(state)}
            {state.started && (
                <Button
                    onClick={() =>
                        state.update({
                            playing: true,
                            status: 'rolling dices...',
                            count: state.count + 1,
                        })
                    }
                    name="roll dice"
                />
            )}
            <div>footer: {state.count}</div>
        </Container>
    );
};

export default Game;
