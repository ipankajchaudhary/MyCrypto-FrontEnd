import React from 'react'

const CurrencyConvertor = () => {


    return (
        <div style={{width:"430px"}}>
            <h3 color="text" className=" convertor-container">DOGE to INRConverter</h3>
            <div className="  convertor-inner-container">
      
                    <div className="  convertor-inner-inner-container">
                        <div className="  from-container">
                            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="converter-coin-logo" className=" currency-image" />
                            <div className=" name-n-logo-container">
                                <p fontSize="11px" color="text2" className="symbol-container">
                                    DOGE
                                </p>
                                <p fontSize="1" fontWeight="500" className="name-convertor converter-item-name" color="text">
                                    Dogecoin
                                </p>
                            </div>
                            <div className="  convertor-input">
                                <input type="number" pattern="/^-?d+.?d*$/" maxLength="8" className=" input-class" />
                            </div>
                        </div>
                        <div className="  to-container">
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/INR.svg" alt="converter-coin-logo" className=" currency-image" />
                            <div className=" name-n-logo-container">
                                <p fontSize="11px" color="text2" className="symbol-container">
                                    INR
                                </p>
                                <p fontSize="1" fontWeight="500" className="name-convertor converter-item-name" color="text">
                                    Indian Rupee
                                </p>
                            </div>
                            <div className="  convertor-input">
                                <input type="number" pattern="/^-?d+.?d*$/" maxLength="8" className=" input-class"/>
                            </div>
                        </div>
                    </div>
              
            </div>
        </div>
    )
}

export default CurrencyConvertor
