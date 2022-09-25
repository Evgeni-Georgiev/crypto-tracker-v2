import './TrendingRow.scss';

export function TrendingRow({trending}) {
    return (
        <div className='coin-row'>
            <p>{trending.coin_id}</p>
            <p className='hide-mobile'>{trending.name}</p>
            <div className='img-symbol'>
                <img src={trending.large} alt='crypto' />
            </div>
            <p className='hide-mobile'>{trending.symbol.toUpperCase()}</p>
            <p>${trending.price_btc.toFixed(10)}</p>
            <p className='hide-mobile'>{trending.market_cap_rank}</p>
        </div>
    );
}