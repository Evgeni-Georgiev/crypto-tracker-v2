import {CoinRow} from "../coin-row/CoinRow";
import './Coins.scss';
import {Link} from "react-router-dom";
import {Coin} from "../coin/Coin";
import {useEffect, useState} from "react";
import {getMarketCoins} from "../http-requests/coin-requests";

export function Coins() {

    const [search, setSearch] = useState('');
    const [coins, setCoins] = useState([]);

    const getMarket = () => {
        getMarketCoins().then(response => {
            setCoins(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getMarket();
        const interval = setInterval(() => {
            getMarket();
        }, 10000);
        return () => clearInterval(interval);

    }, []);

    const handleChange = (event) => {
        return setSearch(event.target.value);
    }

    const filterCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <div className="coins container">
            <div className="coin-search">
                <h3 className="coin-text">Search Currency</h3>
                <form className="search-form">
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
                </form>
            </div>
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>


                {filterCoins.map((coin) => {
                    return (
                        <Link className="coin-object" to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
                            <CoinRow coins={coin}/>
                        </Link>
                    )
                })}
            </div>
        </div>

    );
}