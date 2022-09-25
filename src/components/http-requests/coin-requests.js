import axios from "axios";


const makerCoinsApi = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`;
const trendApi = `https://api.coingecko.com/api/v3/search/trending`;
const searchById = `https://api.coingecko.com/api/v3/coins`;

export function getMarketCoins() {
    return axios.get(makerCoinsApi);
}

export function getTrending() {
    return axios.get(trendApi);
}

export function getCoinById(id) {
    return axios.get(`${searchById}/${id}`)
}