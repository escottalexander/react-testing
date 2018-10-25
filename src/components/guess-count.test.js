import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GuessCount } from './guess-count';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the guess count when provided', () => {
        const guessCount = 15;

        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
    });
});