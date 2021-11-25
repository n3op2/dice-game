import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

const Component = <Button onClick={console.log} name="test" />;

describe('Text Component', () => {
    let wrapper;

    beforeEach(() => {
        React.useContext = jest.fn().mockReturnValue({ rolling: true });
        wrapper = shallow(Component);
    });

    afterEach(jest.clearAllMocks);

    describe('invalid or missing props', () => {
        beforeEach(() => {
            React.useContext = jest.fn().mockReturnValue('none');
        });

        test('renders even if no props loaded from context', () => {
            expect(shallow(Component)).toMatchSnapshot();
        });

        test('throws if onClick function is not provided', () => {
            expect(() => shallow(<Button />)).toThrowError(
                'missing onClick prop'
            );
        });

        test('renders with "Unknown" if name props is not provided', () => {
            expect(() =>
                shallow(<Button onClick={console.log} />)
            ).toMatchSnapshot();
        });
    });

    describe('if state is rolling set to true', () => {
        test('renders a disabled component', () => {
            React.useContext = jest.fn().mockReturnValue({ rolling: false });
            expect(shallow(Component)).toMatchSnapshot();
        });
    });

    test('gets context (state)', () => {
        expect(React.useContext).toHaveBeenCalledWith(expect.toMatchSnapshot());
    });

    test('renders a component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
