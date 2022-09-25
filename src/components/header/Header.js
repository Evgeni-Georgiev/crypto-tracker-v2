import {Link} from "react-router-dom";
import {FaBitcoin} from "react-icons/fa";
import {BiTrendingUp} from "react-icons/bi";
import "./Header.scss";

export function Header() {
    return (
        <div className="headers">

        <Link to="/">
            <div className="navbar">
                {/*<FaCoins className="icon"/>*/}
                <FaBitcoin className="icon"/>
                <h2>Coin <span className="purple">Search</span> </h2>
            </div>
        </Link>

            <Link to="/trending">
                <div className="navbar">
                    <BiTrendingUp className="icon"/>
                    <h2>Trending <span className="purple">Coins</span> </h2>
                </div>
            </Link>
        </div>
    );
}