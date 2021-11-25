import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

const Component = (
    <Container>
        <ul>
            <li></li>
        </ul>
        <div className="a">some text</div>
    </Container>
);

describe('Container Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(Component);
    });

    test('overrites default style with supplied props', () => {
        wrapper = shallow(
            <Container style={{ display: 'none', flexDirection: 'row' }} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders a component with all child nodes', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
