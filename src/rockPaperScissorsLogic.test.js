import { xBeatsY, randomOption } from './rockPaperScissorsLogic'
import { isCyclicOneBefore } from './utils'

jest.mock('./utils', () => ({
  isCyclicOneBefore: jest.fn()
}))

it('calls isCyclicOneBefore', () => {
  expect(isCyclicOneBefore).toHaveBeenCalledTimes(0)

  xBeatsY('rock', 'paper')
  expect(isCyclicOneBefore).toHaveBeenCalledTimes(1)
  expect(isCyclicOneBefore).toHaveBeenCalledWith('paper', 'rock', ['rock', 'paper', 'scissors'])

  xBeatsY('scissors', 'rock')
  expect(isCyclicOneBefore).toHaveBeenCalledTimes(2)
  expect(isCyclicOneBefore).toHaveBeenCalledWith('rock', 'scissors', ['rock', 'paper', 'scissors'])
})

it('generates a random option', () => {
  const rock = () => 0
  expect(randomOption(rock)).toBe('rock')

  const paper = () => 0.34
  expect(randomOption(paper)).toBe('paper')

  const scissors = () => 0.67
  expect(randomOption(scissors)).toBe('scissors')
})