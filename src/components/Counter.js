import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import store from '../store';

const Counter = () => {

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type:'increment'});
  };

  const incrementHandler = () => {
    dispatch({type:'increment'});
  };

      const decrementHandler = () => {
      dispatch({type:'decrement'});
      };
     

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
