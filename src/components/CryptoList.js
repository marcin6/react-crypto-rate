import React from 'react';
import './../styles/CryptoList.css';

export default function CryptoList({ currency }) {
  return (
    <>
      {currency.map(curr =>
        <div className="cryptolist-container" key={curr.id}>
          <div className="cryptolist-currency">
            <img src={curr.image} alt="" />
            <h3>{curr.name}</h3>
            <p className="cryptolist-symbol">{curr.symbol}</p>
          </div>
          <div className="cryptolist-data">
            <p className="cryptolist-element">
              <span>Current Price</span>
              <span>${curr.current_price}</span>
            </p>
            <p className="cryptolist-element">
              <span>Market Cap</span>
              <span>${curr.market_cap.toLocaleString()}</span>
            </p>
            <p className="cryptolist-element">
              <span>Price Change % 24h</span>
              <span className={curr.price_change_percentage_24h < 0 ? ('red') : ('green')}>{curr.price_change_percentage_24h.toFixed(2)}%</span>
            </p>
            <p className="cryptolist-element">
              <span>Total Volume</span>
              <span>${curr.total_volume.toLocaleString()}</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

