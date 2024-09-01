import React from "react";



function InputBox(){
    const to = "to"
    const from = "from"
    return(
        <>
            <div className="Conatiner">
            <div className="Content">
                <div className="scroller">
                    <div className="scroller-content">
                        <ul className="scrolUl">
                            <li className="scItem">Get All Exchange Rates Here</li>
                            <li className="scItem">PKR</li>
                            <li className="scItem">USD</li>
                            <li className="scItem">INR</li>
                            <li className="scItem">POUNDS</li>
                            <li className="scItem">EUR</li>
                            <li className="scItem">AED</li>
                            <li className="scItem">AUD</li>
                            <li className="scItem">CAD</li>
                            <li className="scItem">YAN</li>
                        </ul>
                    </div>
                </div>
            <h1 className="heading">
                Currency
                 <span className="hsapn"> Converter</span>
             </h1>
             <div className="main">
                <div className="MainLeft">
                    <img src="https://images.pexels.com/photos/21299740/pexels-photo-21299740/free-photo-of-business-finance.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="leftImg" />
                </div>
                <div className="mainRIght">
                <img src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="leftImg" />
                </div>
              

            </div>
            </div>
           
            </div>
        </>
    )
}

export default InputBox;