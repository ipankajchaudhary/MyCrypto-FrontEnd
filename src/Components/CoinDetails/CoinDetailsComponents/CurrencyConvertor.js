import React from 'react'

const CurrencyConvertor = () => {


    return (
        <div style={{width:"430px"}}>
            <h3 color="text" className="sc-1q9q90x-0 ixTvhU">DOGE to INRConverter</h3>
            <div className="sc-16r8icm-0 sc-19zk94m-5 gshXSv">
                <div className="sc-19zk94m-0 fVBBJq">
                    <div className="sc-16r8icm-0 sc-1etv19d-0 khlhNO" style={{overflow: "hidden"}}>
                        <div className="sc-16r8icm-0 sc-1etv19d-1 jBYVsP">
                            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="converter-coin-logo" className="sc-1etv19d-2 fMHov" />
                            <div className="sc-16r8icm-0 kjciSH">
                                <p fontSize="11px" color="text2" className="sc-1eb5slv-0 dGjdeQ">
                                    DOGE
                                </p>
                                <p fontSize="1" fontWeight="500" className="sc-1eb5slv-0 kZlTnE converter-item-name" color="text">
                                    Dogecoin
                                </p>
                            </div>
                            <div className="sc-16r8icm-0 sc-1etv19d-4 iQGGZq">
                                <input type="number" pattern="/^-?d+.?d*$/" maxLength="8" className="sc-1etv19d-3 dnqMFs" />
                            </div>
                        </div>
                        <div className="sc-16r8icm-0 sc-1etv19d-1 gzsCUI">
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/INR.svg" alt="converter-coin-logo" className="sc-1etv19d-2 fMHov" />
                            <div className="sc-16r8icm-0 kjciSH">
                                <p fontSize="11px" color="text2" className="sc-1eb5slv-0 dGjdeQ">
                                    INR
                                </p>
                                <p fontSize="1" fontWeight="500" className="sc-1eb5slv-0 kZlTnE converter-item-name" color="text">
                                    Indian Rupee
                                </p>
                            </div>
                            <div className="sc-16r8icm-0 sc-1etv19d-4 iQGGZq">
                                <input type="number" pattern="/^-?d+.?d*$/" maxLength="8" className="sc-1etv19d-3 dnqMFs"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConvertor
