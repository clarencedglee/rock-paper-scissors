import { isCyclicOneBefore } from './utils'

it('checks if one array item immediately precedes another', () => {
    const empty = []
    expect(() => isCyclicOneBefore('one', 'two', empty))
    .toThrow()

    const notFound = ['not here']
    expect(() => isCyclicOneBefore('one', 'two', notFound))
    .toThrow()

    const leftItem = ['one']
    expect(() => isCyclicOneBefore('one', 'two', leftItem))
    .toThrow()

    const rightItem = ['two']
    expect(() => isCyclicOneBefore('one', 'two', rightItem))
    .toThrow()

    const sameForTwo = ['one', 'two']
    expect(isCyclicOneBefore('one', 'one', sameForTwo))
    .toBe(0)

    const trueForTwo = ['one', 'two']
    expect(isCyclicOneBefore('one', 'two', trueForTwo))
    .toBe(1)

    const trueForThree = ['one', 'two', 'three']
    expect(isCyclicOneBefore('two', 'three', trueForThree))
    .toBe(1)

    const trueCyclic = ['one', 'two', 'three']
    expect(isCyclicOneBefore('three', 'one', trueCyclic))
    .toBe(1)

    const falseForThree = ['one', 'two', 'three']
    expect(isCyclicOneBefore('two', 'one', falseForThree))
    .toBe(-1)

    const falseForThree2 = ['one', 'two', 'three']
    expect(isCyclicOneBefore('three', 'two', falseForThree2))
    .toBe(-1)

    const falseForCyclic = ['one', 'two', 'three']
    expect(isCyclicOneBefore('one', 'three', falseForCyclic))
    .toBe(-1)
});
