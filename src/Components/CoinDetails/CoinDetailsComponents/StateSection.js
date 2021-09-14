import React from 'react'

const StateSection = ({ detail, currentcurrency}) => {

    const renderStateComponent = () => {
        if (detail) {
            return (
                <div className="statsSection">
                    <div className="statsContainer">
                        <div className="statsBlock">
                            <div className="statsBlockInner">
                                <div className="statsLabel">
                                    Market Cap
                                </div>
                                <div className="statsItemRight">
                                    <div className="statsValue">
                                    &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp;{detail.market_cap}
                                    </div>
                                    <span className=" percent-change">
                                        {detail.market_cap_change_percentage_24h}%
                                    </span>
                                </div>
                            </div>
                            <div className="statsBlockInner">
                                <div className="  statsLabel">
                                    Volume
                                    <div className="  namePill">
                                        24h
                                    </div>
                                </div>
                                <div className="statsItemRight">
                                    <div className="statsValue">
                                    &nbsp;{(currentcurrency==="inr")?"₹":"$"}&nbsp; {detail.total_volume}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="statsBlock" style={{borderRight:"none"}}>
                            
                            
                        
                        <div className=" second-stateBlock">
                            <div className="  statsLabel">
                                Circulating Supply


                            </div>
                            <div display="flex" className=" circulating-supply-value">
                                <div className="statsValue">
                                    {detail.circulating_supply} {detail.symbol.toUpperCase()}
                                </div>
                            </div>

                            <div display="flex" className=" total-supply">
                                <div className="statsLabel">
                                    Max Supply

                                </div>
                                <div className="statsValue">
                                    {detail.max_supply}
                                </div>
                            </div>
                            <div display="flex" className=" total-supply">
                                <div className="statsLabel">
                                    Total Supply
                                </div>
                                <div className="statsValue">
                                    18,813,762
                                </div>
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
            {renderStateComponent()}
        </>
    )
}

export default StateSection
