import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenyOptons = [],
    selectCurrency = "usd",

    className = "",
}){
  

    return(
        <div className={`bg-white p-2 rounded-lg text-sm ${className} `}>
        <div className="w-1/2 " >
        <label htmlFor="" className="text-black/40 mb-2 inline-block text-lg">
         {label}
        </label>
        <input type="number" className="outline-none w-full bg-transparent py-0 text-lg"
           placeholder="Amount"
           value={amount}
           onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
        </div>
        <div className="w-full flex-wrap  justify-end text-right">
         <p className="text-black/40 mb-2 w-full"> Currency Type</p>
         <select name="" id=""
         value={selectCurrency}
         onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
         className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
         
           {currenyOptons.map((currency)=>(
            <option key={currency} value={currency}>
               {currency}
            </option>
           ))}
         
         </select>
        </div>
        </div>
    )
}

export default InputBox;