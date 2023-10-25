import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const buttonPress = (symbol: string) => {
    console.log(symbol);
  }

  return (
    <>
      <div className="container">
        <h1>Calculator Application</h1>
          <div id="calculator">
            <div id="display">
              <div id="answer"></div>
              <div id="expression"></div>
            </div>
            <button 
            id="clear" 
            onClick={() => buttonPress("clear")} 
            className="light-gray"
            >C
            </button>

            <button 
            id="negative" 
            onClick={() => buttonPress("clear")} 
            className="light-gray"
            >+/-
            </button>

            <button 
            id="percentage" 
            onClick={() => buttonPress("clear")} 
            className="light-gray"
            >%
            </button>

            <button 
            id="divide" 
            onClick={() => buttonPress("clear")} 
            className="yellow"
            >/
            </button>

            <button 
            id="seven" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >7
            </button>

            <button 
            id="eight" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >8
            </button>

            <button 
            id="nine" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >9
            </button>

            <button 
            id="multiply" 
            onClick={() => buttonPress("clear")} 
            className="yellow"
            >*
            </button>

            <button 
            id="four" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >4
            </button>

            <button 
            id="five" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >5
            </button>

            <button 
            id="six" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >6
            </button>

            <button 
            id="subtract" 
            onClick={() => buttonPress("clear")} 
            className="yellow"
            >-
            </button>

            <button 
            id="one" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >1
            </button>

            <button 
            id="two" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >2
            </button>

            <button 
            id="three" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >3
            </button>

            <button 
            id="add" 
            onClick={() => buttonPress("clear")} 
            className="yellow"
            >+
            </button>

            <button 
            id="zero" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >0
            </button>

            <button 
            id="decimal" 
            onClick={() => buttonPress("clear")} 
            className="dark-gray"
            >.
            </button>
            
            <button 
            id="equals" 
            onClick={() => buttonPress("clear")} 
            className="yellow">=</button>
          </div>

      </div>
    </>
  )
}

export default App
