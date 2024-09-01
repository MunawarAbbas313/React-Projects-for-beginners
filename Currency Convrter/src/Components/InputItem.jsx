import React from "react";

function InputItems({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenyOptons = [],
    selectCurrency = "usd",
    
})
{

    return(
    <>
     <div className="MainRight">
                   <div className="cent">
                    <label htmlFor="" className="labelin">{label}</label>
                    <input 
                      value={amount}
                    
                      onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    type="number" placeholder="Amount" />
                    <div className="datay">
                        <p>Currency Type</p>
                        <select 
                         value={selectCurrency}
                         onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                        name="" id="">
                            {currenyOptons.map((currency)=>(
            <option key={currency} value={currency}>
               {currency}
            </option>
           ))}
                        </select>
                    </div>
                    
                   </div>
                </div>
    </>
    )
}

export default InputItems;