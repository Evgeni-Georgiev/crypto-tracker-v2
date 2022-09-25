import {FaCoins} from "react-icons/fa";
import "./Header.scss";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <div className="headers">

        <Link to="/">
            <div className="navbar">
                <FaCoins className="icon"/>
                <h2>Coin <span className="purple">Search</span> </h2>
            </div>
        </Link>

            <Link to="/trending">
                <div className="navbar">
                    <FaCoins className="icon"/>
                    <h2>Trending <span className="purple">Coins</span> </h2>
                </div>
            </Link>

        </div>
    );
}