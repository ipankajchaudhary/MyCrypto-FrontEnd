import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CoinChart from './CoinChart'
import axios from 'axios'
import "./CoinDetails.css"
import { Link } from 'react-router-dom'
import NameSection from './CoinDetailsComponents/NameSection'
import PriceSection from './CoinDetailsComponents/PriceSection'
import StateSection from './CoinDetailsComponents/StateSection'
const CoinDetails = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]),
        y: parseInt(el[1]),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "1",
          },
        }),
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "7",
          },
        }),
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "365",
          },
        }),
        axios.get("https://api.coingecko.com/api/v3/coins/markets/", {
          params: {
            vs_currency: "inr",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line 
  }, []);

  const { detail } = coinData

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (

      <div className="grid full-width-layout">
        <div className="sc-16r8icm-0 eMxKgr container">
          <div className="sc-16r8icm-0 j3c624-1 fJKpl">
            <div className="sc-103s2w8-0 eAmmwa">
              <Link to="/Home" className="sc-1eb5slv-0 sc-1308828-0 bwAAhr cmc-link">Cryptocurrencies &nbsp; </Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/Home" className="sc-1eb5slv-0 sc-1308828-0 bwAAhr cmc-link" >Coins</Link>
              <i className="fas fa-chevron-right"></i>
              <span fontSize="2,3" color="text" className="sc-1eb5slv-0 sc-1308828-0 bwAAhr">{id}</span>
            </div>
          </div>
          <div className="n78udj-0 jskEGI">
            <div className="sc-16r8icm-0 kjciSH top-summary-container">
              <NameSection detail={detail} />
              <PriceSection detail={detail} />
              <div className="add-in-portfolio"></div>
              <StateSection detail={detail} />
            </div>
          </div>
        </div>
        <div className="sc-16r8icm-0 jKrmxw container">
          <div display=",,flex" className="sc-16r8icm-0 jKrmxw container">
            <div style={{maxWidth:"930px",flexGrow:"1",display:"flex",flexDirection:"column"}} className="sc-16r8icm-0 dSXRna">
              <div className="sc-16r8icm-0 kjciSH">
                <div className="sc-19zk94m-2 cEhSvA">
                  <div className="sc-1k1vs7f-0 gudABy">
                    <div>
                      <div className="sc-117f5dm-0 cjTISQ">
                        <h3 color="text" className="sc-1q9q90x-0 fyQGwp">to INR Chart</h3>
                      </div>
                      <div className="sc-117f5dm-0 cjTISQ">
                        <div className="sc-16r8icm-0 kjciSH table-control-left table-control-chart-type">
                          <div className="iazzsz-0 cVJmRr ButtonSwitcher">
                            <div className="slider" style={{width: "48px", height: "30px", left: "3px", top: "3px"}}>
                            </div>
                            <button className="x0o17e-0 DChGS iazzsz-1 jCFojM active landed">
                              <span style={{fontSize: "12px", fontWeight: "600", color: "rgb(88, 102, 126)"}}>
                                Price
                              </span>
                            </button>
                            <button className="x0o17e-0 DChGS iazzsz-1 jCFojM  landed">
                              <span style={{fontSize: "12px", fontWeight: "600", color: "rgb(88, 102, 126)"}}>
                                Market Cap
                              </span>
                            </button>
                            <button className="x0o17e-0 DChGS iazzsz-1 jCFojM  landed">
                              <span style={{fontSize: "12px", fontWeight: "600", color: "rgb(88, 102, 126)"}}>
                                TradingView
                              </span>
                            </button>
                          </div>
                        </div>
                        <div variant="roundedSquare" className="cwgaxb-0 iOPuHO" data-tabs="true">
                          <ul className="react-tabs__tab-list" role="tablist">
                            <li className="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-0" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-1" tabIndex="0">
                              1D
                            </li>
                            <li className="react-tabs__tab" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3">7D</li><li className="react-tabs__tab" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-5">
                              1M
                            </li>
                            <li className="react-tabs__tab" role="tab" id="react-tabs-6" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-7">
                              3M
                            </li>
                            <li className="react-tabs__tab" role="tab" id="react-tabs-8" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-9">
                              1Y
                            </li>
                            <li className="react-tabs__tab" role="tab" id="react-tabs-10" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-11">
                              YTD
                            </li>
                            <li className="react-tabs__tab" role="tab" id="react-tabs-12" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-13">
                              ALL
                            </li>
                            <li className="react-tabs_tab" role="tab" id="react-tabs-14" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-15">
                              <div className="sc-16r8icm-0 kjciSH date-picker-icon" aria-expanded="false">
                                <button className="x0o17e-0 bnhhNH sc-7pvt85-0 bjbWNv">
                                </button>
                              </div>
                            </li>
                            <li className="" role="tab" id="react-tabs-16" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-17">
                              <div className="sc-16r8icm-0 kjciSH log-status-box">
                                <div className="sc-16r8icm-0 kjciSH log-status-hr">
                                </div>
                                <div className="sc-16r8icm-0 kjciSH log-status-inner false">
                                  LOG
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <CoinChart data={coinData}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderData()}
    </>
  )
};

export default CoinDetails;
