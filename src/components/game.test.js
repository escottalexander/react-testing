import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from './game';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
});