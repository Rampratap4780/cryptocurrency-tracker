import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
import './Home.css';

function Home() {
    const [coins, setCoins] = useState([]);
    const [input, setInput] = useState('');

    async function generateCoin(string) {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${string}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCoins(data);
        } catch (error) {
            alert('Data load is slow or there was a network error. Please try again later.');
            console.error('Fetch error:', error);
        }
    }
    

    useEffect(() => {
        generateCoin("");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        generateCoin(input.toLowerCase());
    };

    return (
        <>
            <div className='home'>
                <div className='hero'>
                    <h1>Largest Crypto Marketplace</h1>
                    <p>
                        Discover the Largest Cryptocurrency Marketplace! Join us today and dive into the fascinating world of cryptocurrencies. Explore a wide range of digital assets and gain insights into the future of finance. Sign up now to be a part of this revolutionary journey!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search crypto...bitcoin,eth'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type='submit' >Search</button>
                    </form>
                </div>
                <div className='crypto-table'>
                    <div className='table-layout'>
                        <p>#</p>
                        <p>Coins</p>
                        <p>Price</p>
                        <p style={{ textAlign: 'center' }}>24H Change</p>
                        <p className='market-cap'>Market Cap</p>
                    </div>
                </div>

                <div className='coins'>
                    {coins.map((value) => {
                        const changePercentage = value.market_cap_change_percentage_24h.toFixed(3);
                        const changeColor = changePercentage >= 0 ? 'green' : 'red';

                        return (
                            <Link to={`/coin/${value.id}`} key={value.name} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className='cards'>
                                    <h2>{value.market_cap_rank}</h2>
                                    <p>
                                        <img src={value.image} alt={`${value.name} logo`} /> {value.name} ({value.symbol})
                                    </p>
                                    <h2>${value.current_price.toFixed(2)}</h2>
                                    <h2 style={{ color: changeColor }}>{changePercentage}%</h2>
                                    <h3>${value.market_cap.toLocaleString()}</h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
