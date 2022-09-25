import "./CoinRow.scss";

export function CoinRow({coins}) {
    return (
        <div className='coin-row'>
            <p>{coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={coins.image} alt='crypto'/>
                <p>{coins.symbol.toUpperCase()}</p>
            </div>
            <p>${coins.current_price.toLocaleString()}</p>
            {coins.price_change_percentage_24h < 0 ?
                (<p className="coin-percent red">{coins.price_change_percentage_24h.toFixed(2)}%</p>)
                :
                (<p className="coin-percent green">{coins.price_change_percentage_24h.toFixed(2)}%</p>)
            }
            <p className='hide-mobile'>${coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>${coins.market_cap.toLocaleString()}</p>
        </div>
    );
}