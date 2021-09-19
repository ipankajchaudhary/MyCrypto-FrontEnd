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
import AddInPortfolio from './CoinDetailsComponents/AddInPortfolio'
import Spinner from '../../assets/Spinner'
const CoinDetails = ({currentcurrency}) => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [timeFormat, setTimeFormat] = useState("24h");

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]),
        y: parseFloat(el[1]),
      };
    });
  };
  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: currentcurrency,
            days: "1",
          },
        }),
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: currentcurrency,
            days: "7",
          },
        }),
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
          params: {
            vs_currency: currentcurrency,
            days: "365",
          },
        }),
        axios.get("https://api.coingecko.com/api/v3/coins/markets/", {
          params: {
            vs_currency: currentcurrency,
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
  }, [currentcurrency]);

  const { detail } = coinData
  const { day,week,year } = coinData
  

  const renderData = () => {
    if (isLoading) {
      return <Spinner/>;
    }
    return (
      <>

      <div className="grid full-width-layout">
        <div className="smallcontainer container">
     
          <div className="link-container-1">
            <div className="link-container-2">
              <Link to="/Home" className="link-class-1">Cryptocurrencies &nbsp; </Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/Home" className="link-class-1" >Coins</Link>
              <i className="fas fa-chevron-right"></i>
              <span fontSize="2,3" color="text" className="link-class-1">{id}</span>
            </div>
          </div>
          <div className="upper-container top-summary-container">
            <NameSection detail={detail} />
            <PriceSection detail={detail} currentcurrency={ currentcurrency}/>

            <StateSection detail={detail}  currentcurrency={ currentcurrency}/>
            <div className="add-in-portfolio">
              <CurrencyConvertor detail={detail} currentcurrency={ currentcurrency}/>
            </div>

            <AddInPortfolio />
          </div>

        </div>
        <div className="container">

          <div className="chart-options">
            <h3 color="text" className="chart-header-text">{id.toUpperCase()} to INR Chart</h3>
          </div>
          <div className="chart-options">

              <button type="button" onClick={() => setTimeFormat("24h")} className="btn btn-outline-secondary">
                24h
              </button>
              <button onClick={() => setTimeFormat("7d")} className="btn btn-outline-secondary btn-sm ">
                7d
              </button>
              <button onClick={() => setTimeFormat("1y")} className="btn btn-outline-secondary btn-sm">
                1y
              </button>
           
          </div>
          <CoinChart data={determineTimeFormat} />

        </div>
      </div>
      
      </>
    )
  }

  return (
    <>
      {renderData()}
  
     
    </>
  )
};

export default CoinDetails;
