import {useEffect, useState} from "react";
import {TrendingRow} from "../trending-row/TrendingRow";
import "./Trending.scss";
import {getTrending} from "../http-requests/coin-requests";
import {Link} from "react-router-dom";
import {Coin} from "../coin/Coin";

export function Trending() {

    const [search, setSearch] = useState('');
    const [getTrends, setGetTrends] = useState([]);

    useEffect(() => {
        getTrending().then((response) => {
            let list = [];
            response.data.coins.forEach(items => {
                list.push(items.item)
                setGetTrends(list)
            })
        })
    }, [getTrends])

    const handleChange = (event) => {
        return setSearch(event.target.value);
    }

    const filterTrends = getTrends.filter(trend => {
        return trend.name.toLowerCase().includes(search.toLowerCase())
    })


    return (

        <div className="container">
            <div>
                <h3 className="coin-text">Search Currency</h3>
                <form className="search-form">
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
                </form>
                <div className="heading">
                    <p>#</p>
                    <p className="coin-name hide-mobile">Name</p>
                    <p className="coin-name">Coin</p>
                    <p className='hide-mobile'>Symbol</p>
                    <p>Price</p>
                    <p className='hide-mobile'>Mkt Cap Rank</p>
                </div>
                {
                    filterTrends.map((tre) => {
                        return (
                            <Link to={`/coin/${tre.id}`} element={<Coin/>} key={tre.id}>
                                <TrendingRow key={tre.coin_id} trending={tre}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

    );
}