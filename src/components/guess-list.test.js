import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GuessList } from './guess-list';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Renders the list of guesses', () => {
    const guesses = [1, 2, 3];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(guesses.length);
  });
});