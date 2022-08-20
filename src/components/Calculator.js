import React from "react";
import { useState } from "react";
import './Calculator.css'
const Calculator=()=>{
    const [val,setVal]=useState(" ")
       const onPress=(e)=>{
              setVal(val.concat(e.target.name))
       }
       const clearInput=()=>{
            setVal(" ")
       }
       const onEval=()=>{
            setVal(eval(val).toString())
       }
    return(
        <>
         <div className="body">
            <h1>Calculator</h1>
            <input type="text" name="result" value={val}></input>
            <button classname="clear"name='C' onClick={clearInput}>C</button>
            <div className="firstRow">
                <button className="Value" name='7' onClick={onPress} >7</button>
                <button className="Value"name='8' onClick={onPress}>8</button>
                <button className="Value" name='9' onClick={onPress}>9</button>
                <button className="Value" name='*' onClick={onPress}>*</button>
            </div>
            <div className="firstRow">
                <button className="Value" name='4' onClick={onPress}>4</button>
                <button className="Value"name='5' onClick={onPress}>5</button>
                <button className="Value"name='6' onClick={onPress}>6</button>
                <button className="Value"name='-' onClick={onPress}>-</button>
            </div>
            <div className="firstRow">
                <button className="Value"name='1' onClick={onPress}>1</button>
                <button className="Value"name='2' onClick={onPress}>2</button>
                <button className="Value" name='3' onClick={onPress}>3</button>
                <button className="plus"name='+' onClick={onPress}>+</button>
            </div>
            <div className="firstRow">
                <button className="Value"name='.' onClick={onPress}>.</button>
                <button className="Value" name='0' onClick={onPress}>0</button>
                <button className="Value"name='/' onClick={onPress}>/</button>
                <button className="Value"name='=' onClick={onEval}>=</button>
            </div>

         </div>
        </>
    )
}
export default  Calculator;