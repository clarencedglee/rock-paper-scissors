//@flow

// I can see this function being useful in other applications
// and so have separated it out
// It can do with better organisation than just being in a utils file

/**
 * Checks if `left` is one position before `right` in `choices`
 */
export const isCyclicOneBefore = 
  <A>(left: A, right: A, choices: A[]): -1 | 0 | 1 => {
    if (left === right) return 0

    const leftIndex  = choices.indexOf(left)
    if (leftIndex  === -1) throw new Error('left was not found in choices')

    const rightIndex = choices.indexOf(right)
    if (rightIndex === -1) throw new Error('right was not found in choices')

    const diff = rightIndex - leftIndex

    // if the difference between indices is one,
    // then left is one before right
    if (diff === 1) return 1

    // Otherwise if the difference between indices
    // is one short of the array length
    // then `right` is head of the array
    // and `left` is the tail
    // which is also one before if we put heads and tails together
    const cyclicDiff = (choices.length - 1) * -1
    if (diff === cyclicDiff) return 1

    // We've even managed to make neither heads nor tails of it,
    // `left` is not one before `right`
    return -1
  }