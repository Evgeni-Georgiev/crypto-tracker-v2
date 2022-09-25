import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./Coin.scss";
import {getCoinById} from "../http-requests/coin-requests";

export function Coin() {

    const [coin, setCoin] = useState({});

    const params = useParams();

    useEffect(() => {
        getCoinById(params.id).then((response) => {
            setCoin(response.data)
        });
    })

    return (
        <div>
            <div className='coin-container'>
                <div className='content'>
                    <h1>{coin.name}</h1>
                </div>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {/*Check is coin.image exists*/}
                            {coin.image ? <img src={coin.image.small} alt=''/> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}

                        </div>
                        <div className='coin-price'>
                            {coin.market_data?.current_price ? <h2>${coin.market_data.current_price.usd.toLocaleString()}</h2> : null}
                                {/*<h2>${coin.market_data.current_price.usd.toFixed(10)}</h2> : null}*/}

                        </div>
                    </div>
                </div>

                <div className='content'>
                    <table>
                        <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{coin.market_data?.price_change_percentage_1h_in_currency ?
                                <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ?
                                <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ?
                                <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ?
                                <p>{coin.market_data.price_change_percentage_14d_in_currency.usd ? coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1) : null}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ?
                                <p>{coin.market_data.price_change_percentage_30d_in_currency.usd ? coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1) : null}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ?
                                <p>{ coin.market_data.price_change_percentage_1y_in_currency.usd ? coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1) : null}%</p> : null}</td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ?
                                    <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ?
                                    <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                            </div>

                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ?
                                    <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}