import React, { useState } from 'react'

const CurrencyConvertor = ({ detail, currentcurrency }) => {

    const [from, setfrom] = useState(1)


    const renderCurrencyConvertor = () => {
        if (detail) {

            return (
                <div className="container-size">
                    <h3 color="text" className=" convertor-container">{detail.symbol.toUpperCase()} to INR Converter</h3>
                    <div className="  convertor-inner-container">

                        <div className="  convertor-inner-inner-container">
                            <div className="  from-container">
                                <img src={detail.image} alt="converter-coin-logo" className=" currency-image" />
                                <div className=" name-n-logo-container">
                                    <p fontSize="11px" color="text2" className="symbol-container">
                                        {detail.symbol.toUpperCase()}
                                    </p>
                                    <p fontSize="1" fontWeight="500" className="name-convertor converter-item-name" color="text">
                                        {detail.name}
                                    </p>
                                </div>
                                <div className="  convertor-input">
                                    <input type="number" pattern="/^-?d+.?d*$/" min="0" maxLength="8" className=" input-class" onChange={e => setfrom(e.target.value)} value={from} />
                                </div>
                            </div>
                            <div className="  to-container">
                                <img src={(currentcurrency === "inr") ? "https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/INR.svg" : "https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"} alt="converter-coin-logo" className=" currency-image" />
                                <div className=" name-n-logo-container">
                                    <p fontSize="11px" color="text2" className="symbol-container">
                                        {currentcurrency.toUpperCase()}
                                    </p>
                                    <p fontSize="1" fontWeight="500" className="name-convertor converter-item-name" color="text">
                                        {(currentcurrency === "inr") ? "Indian Rupee" : "Dollar"}
                                    </p>
                                </div>
                                <div className="  convertor-input">
                                    <input type="number" pattern="/^-?d+.?d*$/" maxLength="8" className=" input-class" value={from * detail.current_price} readOnly/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    }


    return (
        <>
            {renderCurrencyConvertor()}
        </>
    )
}

export default CurrencyConvertor
