import React from 'react';
import { mount } from 'enzyme';
import Dice from '../Dice';

const diceValues = [
    { val: 1, name: 'top' },
    { val: 2, name: 'back' },
    { val: 3, name: 'left' },
    { val: 4, name: 'right' },
    { val: 5, name: 'front' },
    { val: 6, name: 'bottom' },
];

describe('Dice Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Dice rolling={true} val={2} />);
    });

    test('renders a component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('sets img class to [dice-rolling] when rolling is in action', () => {
        wrapper.setProps({ rolling: true });
        expect(wrapper.find('img').prop('className')).toBe('dice-rolling');
    });

    test('sets img class to dice after rolling', () => {
        wrapper.setProps({ rolling: false });
        expect(wrapper.find('img').prop('className')).toBe('dice');
    });

    describe('mapping values to dice sides', () => {
        diceValues.forEach((dice) => {
            test(`for [${dice.val}] value renders -> ${dice.name} side`, () => {
                wrapper.setProps({ val: dice.val });
                wrapper.update();
                expect(wrapper.find('img')).toMatchSnapshot();
                expect(wrapper).toMatchSnapshot();
            });
        });
    });
});
