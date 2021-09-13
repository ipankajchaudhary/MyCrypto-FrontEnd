import React from 'react'

const StateSection = ({ detail }) => {

    const renderStateComponent = () => {
        if (detail) {
            return (
                <div className="sc-16r8icm-0 fggtJu statsSection">
                    <div className="hide statsContainer">
                        <div className="statsBlock">
                            <div className="statsBlockInner">
                                <div className="sc-16r8icm-0 cEbjrm statsLabel">
                                    Market Cap
                                </div>
                                <div className="statsItemRight">
                                    <div className="statsValue">
                                        ${detail.market_cap}
                                    </div>
                                    <span className="u2x6b4-0 chbrcp">
                                        {detail.market_cap_change_percentage_24h}%
                                    </span>
                                </div>
                            </div>
                            <div className="statsBlockInner">
                                <div className="sc-16r8icm-0 cEbjrm statsLabel">
                                    Volume
                                    <div className="sc-16r8icm-0 iBOlpQ namePill">
                                        24h
                                    </div>
                                </div>
                                <div className="statsItemRight">
                                    <div className="statsValue">
                                        $28,404,466,301
                                    </div>
                                    <span className="u2x6b4-0 chbrcp">
                                        <span className="icon-Caret-down">
                                        </span>
                                        24.28%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="statsBlock" style={{borderRight:"none", marginLeft:"22px",paddingLeft:"116px"}}>
                            
                            
                        
                        <div className="n78udj-6 dCjIMS">
                            <div className="sc-16r8icm-0 cEbjrm statsLabel">
                                Circulating Supply


                            </div>
                            <div display="flex" className="sc-16r8icm-0 inUVOz">
                                <div className="statsValue">
                                    18,813,675.00 BTC
                                </div>
                                <div className="supplyBlockPercentage">
                                    90%
                                </div>
                            </div>

                            <div display="flex" className="sc-16r8icm-0 dwCYJB">
                                <div className="statsLabel">
                                    Max Supply

                                </div>
                                <div className="maxSupplyValue">
                                    21,000,000
                                </div>
                            </div>
                            <div display="flex" className="sc-16r8icm-0 hWTiuI">
                                <div className="statsLabel">
                                    Total Supply
                                </div>
                                <div className="maxSupplyValue">
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
