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

  it('New Game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [1, 25, 37, 49, 53],
      feedback: "Wrong Answer",
      correctAnswer: 99
    })
    expect(wrapper.state('guesses')).toEqual([1, 25, 37, 49, 53]);
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
  });
});