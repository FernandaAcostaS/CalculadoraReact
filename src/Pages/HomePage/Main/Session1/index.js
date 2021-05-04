import React, { useState, useEffect, useRef } from "react";

import { Container } from './styles';

//import Header from '../../../../Components/Header';





function Session1() {
  

  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    
    <Container>

      <h1>Calculadora Estilosa </h1>


      <div className="calculadora">

        <div className="display">
          <from>
            <input type="text" value={result} ref={inputRef} />
          </from>
        </div>
                
         <div className="first">
          <button id="clear" onClick={clear} > <span> A/C </span></button>
          <button name="7" onClick={handleClick}  > <span> 7 </span></button>
          <button name="4" onClick={handleClick}  > <span> 4 </span></button>
          <button name="1" onClick={handleClick}  > <span> 1 </span></button>
          <button name="0" onClick={handleClick}  > <span> 0 </span></button>
         </div> 

         <div className="second">
          <button name="8" onClick={handleClick}  > <span> 8 </span></button>
          <button name="5" onClick={handleClick}  > <span> 5 </span></button>
          <button name="2" onClick={handleClick}  > <span> 2 </span></button>
          <button name="." onClick={handleClick}  > <span> . </span></button>
        </div>

        <div className="third">
          <button name="9" onClick={handleClick}  > <span> 9 </span></button>
          <button name="6" onClick={handleClick}  > <span> 6 </span></button>
          <button name="3" onClick={handleClick}  > <span> 3 </span></button>
          <button id="result" onClick={calculate} > <span> = </span></button>
        </div>

        <div className="fourth">
          <button id="backspace" onClick={backspace} > <span> C</span></button>
          <button name="/" onClick={handleClick} > <span> / </span></button>
          <button name="*" onClick={handleClick} > <span> x </span></button>
          <button name="-" onClick={handleClick} > <span> - </span></button>
          <button name="+" onClick={handleClick} > <span> + </span></button>
        </div>
      
      </div>

    </Container>

  );
  
}

export default Session1;

