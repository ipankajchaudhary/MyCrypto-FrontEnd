import React from 'react'

const PriceSection = ({detail,currentcurrency}) => {

    const renderpricecomponent = () => {
        if (detail) {

            return (
        
                    <div className="priceSection">
                        <h1 className="priceHeading">{detail.name} Price<small>({detail.symbol.toUpperCase()})</small></h1>
                        <div className="priceTitle">
                            <div className="priceValue ">{(currentcurrency==="inr")?"₹":"$"}&nbsp;{detail.current_price}</div>
                            <span className=" price-change-btn ud">
                                <span className=" price-change-btn upd">
                                    {" "}
                                    {detail.price_change_percentage_24h < 0 ? <i className="fas fa-sort-down align-middle mr-3"></i> : <i className="fas fa-sort-up align-middle mr-1"></i>}
                                    {detail.price_change_percentage_24h < 0 ? Math.abs(detail.price_change_percentage_24h).toFixed(2) : detail.price_change_percentage_24h.toFixed(2)}
                                </span>


                            </span>
                        </div>

                        <div className="sliderSection">
                            <div className=" low-price-container low">
                                <span className=" Low-High-Text">
                                    Low:
                                </span>
                                <span className=" Low-High-data">
                                &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp;
                                    {detail.low_24h}
                                </span>
                            </div>

                            <div className=" High-price-container high">
                                <span className=" Low-High-Text">High:
                                </span>
                                <span className=" Low-High-data">
                                &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp;{detail.high_24h}
                                </span>
                            </div>
                            <div className=" namePillBase" display="inline-block">24h
                            </div>
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
