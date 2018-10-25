import { makeGuess, restartGame } from '../actions';
import reducer from './index'

describe('makeGuess', () => {
    it('Should make guess', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 9
        };
        state = reducer(state, makeGuess(1));
        state = reducer(state, makeGuess(5));
        state = reducer(state, makeGuess(9));
        expect(state).toEqual({
            guesses: [1, 5, 9],
            feedback: 'You got it!',
            auralStatus: '',
            correctAnswer: 9
        });
    });
});

describe('restartGame', () => {
    it('Should restart game', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 9
        };
        const newAnswer = 10;
        state = reducer(state, restartGame(10));
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 10
        });
    });
});