import './App.css';
import {Coins} from "./components/coins/Coins";
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import {Coin} from "./components/coin/Coin";
import {Trending} from "./components/trending/Trending";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Coins/>}></Route>
                <Route path="/trending" element={<Trending/>}>
                    <Route path=":id" element={<Coin/>}></Route>
                </Route>

                <Route path="/coin" element={<Coin/>}>
                    <Route path=":id" element={<Coin/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
