//@flow
import { isCyclicOneBefore } from './utils';

/**
 * Sum type of available choices (rock, paper, scissors)
 */
export type Option = 'rock' | 'paper' | 'scissors';

/**
 * Array of available choices, 'rock', 'paper', 'scissors'
 */
export const options: Option[] = ['rock', 'paper', 'scissors'];

/**
 * True if x beats y
 */
export const xBeatsY = 
  (x: Option, y: Option): -1 | 0 | 1 =>
    isCyclicOneBefore(y, x, options);


// a helper type for randomOption()
// sad that Flow (or IDE) 
// doesn't infer the type from `= Math.random`
type RandomFn = () => number;

/**
 * Pick rock, paper or scissors at random
 */
export const randomOption = 
  (randomFn: RandomFn = Math.random): Option => {
    const randomIndex = Math.floor(randomFn() * options.length)
    return options[randomIndex]
  };