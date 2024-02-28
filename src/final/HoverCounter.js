import React from 'react'
import enchancedCounter from './enchancedCounter';

const HoverCounter = (props) => {


  return (
    <div>
      <h3 onMouseEnter={props.incrementCount}>Hovered {props.count} times</h3>
    </div>
  )
}

export default enchancedCounter(HoverCounter);
