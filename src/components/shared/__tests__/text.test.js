import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';

const Component = <Text>some random text here</Text>;

describe('Text Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(Component);
    });

    describe('if not all children are typeof string', () => {
        test('throws an error and does not render', () => {
            expect(() =>
                shallow(
                    <Text>
                        text{[{}, {}, {}]}
                        {class a {}}
                    </Text>
                )
            ).toThrowError('invalid children');
        });
    });

    test('it renders component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
