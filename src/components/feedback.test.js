import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Feedback } from './feedback';
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders the feedback', () => {
    const feedback = "this is feedback";

    const wrapper = shallow(<Feedback feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });

});
