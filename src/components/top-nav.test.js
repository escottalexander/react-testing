import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TopNav } from './top-nav';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });
});