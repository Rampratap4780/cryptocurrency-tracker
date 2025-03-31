import React, { useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router";
import LineChart from "../../LineChart/LineChart";

function Coin() {
  const { coinId } = useParams();
  const [historicalData, setHistoricalData] = useState(null);
  const [coinData, setCoinData] = useState([]);

  const fetchCoinData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      alert('Data load is slow or there was a network error. Please try again later.');
      console.error('Fetch error:', error);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=10&interval=daily`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHistoricalData(data);
    } catch (error) {
      alert('Data load is slow or there was a network error. Please try again later.');
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [coinId]);

  return (
    <div>
      <div className="coin">
        <div className="coin-name">
          {coinData.length > 0 ? (
            coinData.map((value) => (
              <div key={value.id}>
                <img className="crimg" src={value.image} alt={`${value.name} logo`} />
                <p className="crpara"><b>{value.name} ({value.symbol})</b></p>
                <div className="chart-container">
                  <LineChart className="chart" historicalData={historicalData} />
                </div>

                <div className="coin-info">
                  <ul className="styled-list">
                    <li className="title">Crypto Market Rank</li>
                    <li className="value">{value.market_cap_rank}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Current Price</li>
                    <li className="value">{value.current_price}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Market Cap</li>
                    <li className="value">{value.market_cap}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Fully Diluted Valuation</li>
                    <li className="value">{value.fully_diluted_valuation}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Total Volume</li>
                    <li className="value">{value.total_volume}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">24 Hour High</li>
                    <li className="value">{value.high_24h}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">24 Hour Low</li>
                    <li className="value">{value.low_24h}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Price Change (24h)</li>
                    <li className="value">{value.price_change_24h}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Price Change Percentage (24h)</li>
                    <li className="value">{value.price_change_percentage_24h}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Market Cap Change (24h)</li>
                    <li className="value">{value.market_cap_change_24h}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Market Cap Change Percentage (24h)</li>
                    <li className="value">{value.market_cap_change_percentage_24h}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Circulating Supply</li>
                    <li className="value">{value.circulating_supply}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Total Supply</li>
                    <li className="value">{value.total_supply}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Max Supply</li>
                    <li className="value">{value.max_supply}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">All-Time High (ATH)</li>
                    <li className="value">{value.ath}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">ATH Change Percentage</li>
                    <li className="value">{value.ath_change_percentage}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">ATH Date</li>
                    <li className="value">{value.ath_date}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">All-Time Low (ATL)</li>
                    <li className="value">{value.atl}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">ATL Change Percentage</li>
                    <li className="value">{value.atl_change_percentage}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">ATL Date</li>
                    <li className="value">{value.atl_date}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">ROI</li>
                    <li className="value">{value.roi}</li>
                  </ul>

                  <ul className="styled-list">
                    <li className="title">Last Updated</li>
                    <li className="value">{value.last_updated}</li>
                  </ul>
                </div>

              </div>
            ))
          ) : (
            <p className="loader">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coin;

