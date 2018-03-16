import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

jest.mock('./rockPaperScissorsLogic', () => ({
  // always...
  // lose if x is rock, 
  // tie  if x is paper
  // win  if x is scissors
  xBeatsY: (x, y, options) => ({rock: -1, paper: 0, scissors: 1}[x]),
  randomOption: () => 'rock',
  options: ['rock', 'paper', 'scissors']
}))

it('renders initial state', () => {
  const component = renderer.create(<App/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders lose state', () => {
  const component = renderer.create(<App/>);
  component.getInstance().choose('rock')()
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders tie state', () => {
  const component = renderer.create(<App/>);
  component.getInstance().choose('paper')()
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders win state', () => {
  const component = renderer.create(<App/>);
  component.getInstance().choose('scissors')()
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});