import { use, useState } from 'react'



function CalculatorContainer() {
  const [inputText, setInputText] = useState("");

  

function Button({ value }) {

  return (
    <button
      onClick={() => handleButtonClick(value)}
      className='bg-gray-300 border border-gray-400 hover:bg-gray-100 text-gray-800 font-bold py-4 px-6 rounded-xl'
    >
      {value}
    </button>
  )
}
function ButtonFunc({ value }) {
  return (
    <button
      onClick={() => handleButtonClick(value)}
      className='bg-blue-300 border border-blue-400 hover:bg-blue-400 transition-all duration-200 ease-in-out text-white font-bold py-4 px-6 rounded-xl'
    >
      {value}
    </button>
  )
}

async function saveCalculation() { {
    const response = await fetch("http://localhost:5000/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression: inputText }),
    });
    const data = await response.json();
    setInputText(prev => prev + "=" + data.result);
  }

}

function handleKeyDown(event) {
  const Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const Operators = ["+", "-", "*", "/", "(", ")", "%", "."];
  if (Numbers.includes(event.key) || Operators.includes(event.key)) {
    setInputText(prev => prev + event.key);
    console.log(inputText);
  }
  else if (event.key === "Backspace") {
    setInputText(prev => prev.slice(0, -1));
  }
  else if (event.key === "Delete") {
    setInputText("");
  }
  else if (event.key === "Enter") {
    saveCalculation();
  }
}

function handleButtonClick(value) {
  setInputText(prev => prev + value);
  if (value === "AC") {
    setInputText("");
  }
  else if (value === "=") {
    value = "";
    saveCalculation();
  }
}


  return (
    <div
    className='w-100 h-full bg-gray-200 rounded-lg shadow-lg flex flex-col items-center p-4'>
      <input 
      className='bg-white border border-gray-400 rounded-lg p-8 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full'
      type="text"
      id="input" 
      value = {inputText}
      onKeyDown={handleKeyDown}
      />

      
      <div className='grid grid-cols-4 gap-2 mt-4 w-full'>
        <ButtonFunc value="(" />
        <ButtonFunc value=")" />
        <ButtonFunc value="%" />
        <ButtonFunc value="AC" />    
        <Button value="7"  />
        <Button value="8" />
        <Button value="9" />
        <ButtonFunc value="+" />
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <ButtonFunc value="-" />
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <ButtonFunc value="*" />
        <Button value="0" />
        <Button value="." />
        <Button value="=" />
        <ButtonFunc value="/" />
        </div>

      </div>
  );
}


function App() {

  return (
    <div 
    className='flex items-center justify-center my-10'>
      <CalculatorContainer />
    </div>
  )
}

export default App
