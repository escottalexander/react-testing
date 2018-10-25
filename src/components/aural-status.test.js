import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AuralStatus } from './aural-status';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders the add button initially', () => {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.hasClass('visuallyhidden')).toEqual(true);
  });

});
