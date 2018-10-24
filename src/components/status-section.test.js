import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StatusSection from './status-section';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={[]} />);
  });
});