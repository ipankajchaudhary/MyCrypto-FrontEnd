import React from 'react'

const PriceSection = ({detail}) => {

    const renderpricecomponent = () => {
        if (detail) {

            return (
        
                    <div className="sc-16r8icm-0 kjciSH priceSection">
                        <h1 className="priceHeading">{detail.name} Price<small>({detail.symbol.toUpperCase()})</small></h1>
                        <div className="sc-16r8icm-0 kjciSH priceTitle">
                            <div className="priceValue ">${detail.current_price}</div>
                            <span className="sc-15yy2pl-0 gEePkg ud">
                                <span className="sc-15yy2pl-0 gEePkg upd">
                                    {" "}
                                    {detail.price_change_percentage_24h < 0 ? <i className="fas fa-sort-down align-middle mr-3"></i> : <i className="fas fa-sort-up align-middle mr-1"></i>}
                                    {detail.price_change_percentage_24h < 0 ? Math.abs(detail.price_change_percentage_24h).toFixed(2) : detail.price_change_percentage_24h.toFixed(2)}
                                </span>


                            </span>
                        </div>

                        <div className="sc-16r8icm-0 kjciSH sliderSection">
                            <div className="sc-16r8icm-0 lipEFG low">
                                <span className="n78udj-4 geXYfI">
                                    Low:
                                </span>
                                <span className="n78udj-5 dBJPYV">
                                    ${detail.low_24h}
                                </span>
                            </div>

                            <div className="sc-16r8icm-0 SjVBR hight">
                                <span className="n78udj-4 geXYfI">High:
                                </span>
                                <span className="n78udj-5 dBJPYV">
                                    ${detail.high_24h}
                                </span>
                            </div>
                            <div className="sc-16r8icm-0 irKQAw namePillBase" display="inline-block">24h

                            </div>
                        </div>
                        <div className="n78udj-3 emihhf">
                            <span>
                                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" height="24" width="24" alt="BTC" />
                                &nbsp; &nbsp;
                                <b>Bitcoin</b>&nbsp; BTC
                            </span>
                            <span>
                                <div className="imn55z-0 hCqbVS price">
                                    <span>
                                        Price:
                                    </span>
                                    <div>$46,059.79</div>
                                    &nbsp;
                                    <span className="u2x6b4-0 chbrcp udc">
                                        <span className="icon-Caret-up">
                                        </span>0.86%
                                    </span>
                                </div>
                                <span className="sc-80eeb0-1 iuAjRY">
                                    <button className="x0o17e-0 eCXbyL sc-7pvt85-0 ccOrkS atml" >Add to Main Watchlist  &nbsp;
                                        <span className="icon-Star">
                                        </span>
                                    </button>
                                </span>
                            </span>
                        </div>
                    </div>
                
            )

        }
    }

    return (
        <>
            {renderpricecomponent()}
        </>
    )
}

export default PriceSection
