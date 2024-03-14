import React, { useState } from 'react'
import { increment,decrement,incrementByValue,reset } from './counterSlice';
import { useSelector,useDispatch } from 'react-redux';
import withAuthenticationHOC from '../../withAuthenticationHOC';
const Counter = () => {

    const count = useSelector((state)=> state.counter.count);
    const [incrementValue,setIncrementValue]=useState(0);
    const addValue= Number(incrementValue)||0;
    const dispatch =useDispatch();
    const resetAll = () =>{
        setIncrementValue(0);
        dispatch(reset());
    }
  return (
    <section>
        <h2>Counter APP</h2>
        <p>{count}</p>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <input type={'text'} onChange={(e)=>setIncrementValue(e.target.value)} value={incrementValue} />
        <button onClick={()=>dispatch(incrementByValue(addValue))}>Increase By Value</button>
        <button onClick={resetAll}>Reset</button>
    </section>

  )
}

export default withAuthenticationHOC(Counter);