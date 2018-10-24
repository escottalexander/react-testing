import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessSection from './guess-section';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection guesses={[]} />);
  });
});