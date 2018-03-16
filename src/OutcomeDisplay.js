import React from 'react'

type Props = {
  outcome: -1 | 0 | 1 | undefined
};

export default (props: Props) => {
  // TODO: better visibility on no children? maybe throw?
  if (!props.children) return ''

  let content = typeof props.outcome === 'number'
    ? props.children[props.outcome + 2]
    : props.children[0]

  return <span className="outcome-display">{content}</span>
};