import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CoinChart from './CoinChart'
import axios from 'axios'
import "./CoinDetails.css"
import { Link } from 'react-router-dom'
import NameSection from './CoinDetailsComponents/NameSection'
import PriceSection from './CoinDetailsComponents/PriceSection'
import StateSection from './CoinDetailsComponents/StateSection'
import CurrencyConvertor from './CoinDetailsComponents/CurrencyConvertor'
const CoinDetails = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]),
        y: parseFloat(el[1]),
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
        })
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
              <div className="add-in-portfolio">
                <CurrencyConvertor/>
              </div>
              <StateSection detail={detail} />
            </div>
          </div>
        </div>
        <div className="sc-16r8icm-0 jKrmxw container">
          <div display=",,flex" className="sc-16r8icm-0 jKrmxw container">
           
              <div className="sc-16r8icm-0 kjciSH">
                <div className="sc-19zk94m-2 cEhSvA">
                  <div className="sc-1k1vs7f-0 gudABy">
                    <div style={{ marginTop: "15px" }}>
                      <div className="sc-117f5dm-0 cjTISQ">
                        <h3 color="text" className="sc-1q9q90x-0 fyQGwp">{id.toUpperCase()} to INR Chart</h3>
                      </div>
                      <div className="sc-117f5dm-0 cjTISQ">

                        <div variant="roundedSquare" className="cwgaxb-0 iOPuHO" data-tabs="true">
                          <ul className="react-tabs__tab-list" role="tablist">
                            <li className="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-0" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-1" tabIndex="0">
                              1D
                            </li>
                            <li className="react-tabs__tab" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3">7D</li><li className="react-tabs__tab" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-5">
                              1M
                            </li>

                            <li className="react-tabs__tab" role="tab" id="react-tabs-8" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-9">
                              1Y
                            </li>
                          </ul>
                        </div>
                      </div>
                      <CoinChart data={coinData} />
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {renderData()}
    </>
  )
};

export default CoinDetails;
