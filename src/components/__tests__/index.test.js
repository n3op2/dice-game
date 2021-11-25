import React from 'react';
import { shallow } from 'enzyme';
import Game from '../Game';

const mockContext = {
    playing: false,
    started: true,
    history: [],
    count: 0,
    status: 'not played',
    player: { score: 0, val: 0, name: 'player', rolling: false },
    computer: { score: 0, val: 0, name: 'computer', rolling: false },
}

describe('Game Component', () => {
    let wrapper;

    beforeEach(() => {
        React.useContext = jest.fn().mockReturnValue(mockContext);
        wrapper = shallow(<Game />);
    });

    test('renders a component', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
