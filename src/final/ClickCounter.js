import React from 'react';
import enchancedCounter from './enchancedCounter';

const ClickCounter= (props) => {

 return (
    <div>
      <button onClick={props.incrementCount}>Counter Clicked {props.count} times</button>
    </div>
  )
}

export default enchancedCounter(ClickCounter);
