import { useState } from 'react'
import NavBar from './Components/NavBar'
import InputItems from './Components/InputItem'
import InputBox from './Components/InputBox'
import UseCurrencyInfo from './Hooks/Hooks'
import './App.css'


function App() {
  const [amount , setAmount ] = useState(0);
  const [from , setFrom] = useState("usd");
  const [To, setTo] = useState("pkr");
  const [converAmount , setConvertedAmount] = useState(0);
  const currencyInfo = UseCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

 

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[To])
  }


  return (
    <>
     <form action="" onSubmit={(e)=>{
      e.preventDefault();
      convert();
     }} >
     <NavBar/>
 
     <InputBox/>
     <div className="ite">
     <InputItems 
      label="Form"
      amount={amount}
      currenyOptons={options}
      onCurrencyChange={(currency)=>setFrom(currency)}
      selectCurrency={from}
      onAmountChange={(amount)=>setAmount(amount)}
     />
    
    <InputItems
        label="To"
        amount={converAmount}
        currenyOptons={options}
        onCurrencyChange={(currency)=>setTo(currency)}
        selectCurrency={To}
    />
     </div>
    <div className="btt">
    <button  className="conBtn">Convert {from.toUpperCase()} to {To.toUpperCase()}</button>
    </div>
    </form>
    
    
   
    </>
  )
}

export default App
