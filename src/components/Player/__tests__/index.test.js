import React from 'react';
import { mount } from 'enzyme';
import Player from '../';

const mockPlayer = {
    score: 0,
    val: 0,
    name: 'test',
    rolling: false,
};

describe('Player Component', () => {
    let wrapper;
    let mockContext = {
        update: jest.fn(),
        playing: true,
        log: jest.fn(),
        test: mockPlayer,
    };

    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(1); // will be multiplied by 6
        React.useEffect = jest.spyOn(React, 'useEffect');
        React.useContext = jest.fn().mockReturnValue(mockContext);
        wrapper = mount(<Player {...mockPlayer} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    test('it renders a component', () => {
        expect(wrapper.props()).toEqual(mockPlayer);
        expect(wrapper.find('Dice').props()).toEqual({
            val: 0,
            rolling: false,
        });
        expect(wrapper).toMatchSnapshot();
    });

    describe('after the has started', () => {
        test('sets rolling to true', () => {
            expect(mockContext.update).toHaveBeenCalledWith({
                [mockPlayer.name]: expect.objectContaining({
                    rolling: true,
                    val: 0,
                }),
            });
        });

        test('sets rolling to true and update dice', () => {
            wrapper.setProps({ rolling: true });
            expect(wrapper.find('Dice').prop('rolling')).toBe(true);
            expect(wrapper.find('Dice').find('img').prop('className')).toEqual(
                'dice-rolling'
            );
        });

        test('updates val and sets rolling to false', async () => {
            wrapper.setProps({ rolling: true });
            await new Promise(r => setTimeout(r, 2000))
            expect(mockContext.update).toHaveBeenLastCalledWith({
                test: {
                    ...mockPlayer,
                    rolling: false,
                    val: 6,
                },
            });
        });

        test('re-renders dice component', () => {
            wrapper.setProps({ rolling: true, val: 6 });
            expect(wrapper.find('Dice')).toMatchSnapshot();
        });
    });
});
