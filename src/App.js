import './App.css';
import * as math from 'mathjs'
import { useState } from 'react';
import Textarea from './components/textarea.js';
import Buttons from './components/buttons';
const App=() => {
const[text,setText]=useState("")
const[result,setResult]=useState("");
const addText = (val) =>{
  setText((text) =>[...text,val+""]);
}
const calculate =()=>{
  const input = text.join("");
  setResult(math.evaluate(input));
}
const reset =()=>{
  setText("");
  setResult("");
}
const backspace =()=>{
  setText(text.slice(0,text.length-1));
}
  return (
    <div className="App">
<div className='wrapper'>
  <div className='text-area'>
  <Textarea text={text} result={result}/></div>
  <div className='btn-row'>
  <Buttons className='function-buttons' symbols='C' handleClick={reset} color='#353935' />
  <Buttons symbols='%' handleClick={addText} color='#353935'/>
  <Buttons symbols='&#x232b;' handleClick={backspace} color='#353935' />
  <Buttons symbols='/' handleClick={addText} color='#353935'/>
  </div>
  <div className='btn-row'>
  <Buttons symbols='7' handleClick={addText} />
  <Buttons symbols='8' handleClick={addText}/>
  <Buttons symbols='9' handleClick={addText}/>
  <Buttons symbols='*' handleClick={addText} color='#353935'/>
  </div>
  <div className='btn-row'>
  <Buttons symbols='4' handleClick={addText}/>
  <Buttons symbols='5' handleClick={addText}/>
  <Buttons symbols='6' handleClick={addText}/>
  <Buttons symbols='-' handleClick={addText} color='#353935'/>
  </div>
  <div className='btn-row'>
  <Buttons symbols='1' handleClick={addText}/>
  <Buttons symbols='2' handleClick={addText}/>
  <Buttons symbols='3' handleClick={addText}/>
  <Buttons symbols='+' handleClick={addText} color='#353935'/>
  </div>
  <div className='btn-row'>
  <Buttons symbols='00' handleClick={addText}/>
  <Buttons symbols='0' handleClick={addText}/>
  <Buttons symbols='.' handleClick={addText}/>
  <Buttons symbols='=' handleClick={calculate} color='	#FF4500'/>
  </div>

  </div>
    </div>
  );
}

export default App;
