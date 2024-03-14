import './App.css';
import Value from './Value';
import { useState } from 'react';
import Value2 from './Value2';
import Button from './Button';
import colorNames from 'colornames';

function App() {

  const [valueBox1,setValueBox1]=useState('');
  const [hxaValue,setHxaValue] = useState('');
  const [textColor,setTextColor]=useState(true);


  const value1OnChange = (e) => {
    setValueBox1(e.target.value);
    setHxaValue(colorNames(e.target.value))
  }

  const value2OnChange = (e) => {
    setValueBox1(e.target.value);
    setHxaValue(colorNames(e.target.value))
  }

  const handleClick = () => {
    setTextColor(!textColor);
  }

console.log(hxaValue);
  return (
      <form className='valueBox' onSubmit={(e)=> e.preventDefault()}>
         <Value 
           value1OnChange={value1OnChange}
           valueBox1={valueBox1}
           hxaValue={hxaValue}
           textColor={textColor}
         />
         <br />
         <Value2 
            value2OnChange={value2OnChange}
            valueBox2={valueBox1}
         />
         <br />
         <Button 
         handleClick={handleClick}
         textColor={textColor}
         />
      </form>
  );
}

export default App;
