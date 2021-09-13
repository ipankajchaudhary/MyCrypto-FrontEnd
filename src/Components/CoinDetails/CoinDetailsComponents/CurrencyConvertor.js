import React from 'react'

const CurrencyConvertor = () => {


    return (
        <div>
            <h3 color="text" class="sc-1q9q90x-0 ixTvhU">DOGE to INRConverter</h3>
            <div class="sc-16r8icm-0 sc-19zk94m-5 gshXSv">
                <div class="sc-19zk94m-0 fVBBJq">
                    <div class="sc-16r8icm-0 sc-1etv19d-0 khlhNO" style={{overflow: "hidden"}}>
                        <div class="sc-16r8icm-0 sc-1etv19d-1 jBYVsP">
                            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="converter-coin-logo" class="sc-1etv19d-2 fMHov" />
                            <div class="sc-16r8icm-0 kjciSH">
                                <p font-size="11px" color="text2" class="sc-1eb5slv-0 dGjdeQ">
                                    DOGE
                                </p>
                                <p font-size="1" font-weight="500" class="sc-1eb5slv-0 kZlTnE converter-item-name" color="text">
                                    Dogecoin
                                </p>
                            </div>
                            <div class="sc-16r8icm-0 sc-1etv19d-4 iQGGZq">
                                <input type="number" pattern="/^-?d+.?d*$/" maxlength="8" class="sc-1etv19d-3 dnqMFs" value="1" />
                            </div>
                        </div>
                        <div class="sc-16r8icm-0 sc-1etv19d-1 gzsCUI">
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/INR.svg" alt="converter-coin-logo" class="sc-1etv19d-2 fMHov" />
                            <div class="sc-16r8icm-0 kjciSH">
                                <p font-size="11px" color="text2" class="sc-1eb5slv-0 dGjdeQ">
                                    INR
                                </p>
                                <p font-size="1" font-weight="500" class="sc-1eb5slv-0 kZlTnE converter-item-name" color="text">
                                    Indian Rupee
                                </p>
                            </div>
                            <div class="sc-16r8icm-0 sc-1etv19d-4 iQGGZq">
                                <input type="number" pattern="/^-?d+.?d*$/" maxlength="8" class="sc-1etv19d-3 dnqMFs" value="17.91" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConvertor
