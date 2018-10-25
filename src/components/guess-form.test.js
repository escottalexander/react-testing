import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions'
Enzyme.configure({ adapter: new Adapter() })
const mount = Enzyme.mount;
const shallow = Enzyme.shallow;


describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm dispatch={callback} />);
    const value = "5";
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(makeGuess(value));
  });
});