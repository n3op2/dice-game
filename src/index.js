import ReactDOM from 'react-dom';
import React from 'react';

import { AppContext } from './components/shared';
import Game from './components/Game';
import './index.css';

const initialState = {
    playing: false,
    started: true,
    history: [],
    count: 0,
    status: 'not played',
    player: { score: 0, val: 0, name: 'player', rolling: false },
    computer: { score: 0, val: 0, name: 'computer', rolling: false },
};

const App = () => {
    const [state, setState] = React.useState({
        ...initialState,
        log: (matchResult) => setState(({ history, ...state}) => ({
            ...state,
            history: [
                ...history,
                ...matchResult,
            ],
        })),
        update: (updates) =>
            setState((prevState) => ({
                ...prevState,
                ...updates,
            })),
    });

    return (
        <AppContext.Provider value={state}>
            <Game />
        </AppContext.Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
