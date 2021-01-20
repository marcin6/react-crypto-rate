import React, { useState, useEffect } from 'react';
import CryptoList from './components/CryptoList';
import axios from 'axios';
import './styles/App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const currency = data.filter(curr => curr.name.toLowerCase().includes(search.toLowerCase()));

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Rate</h1>
        <input type="text" onChange={handleChange} placeholder="Search Crypto" />
      </header>
      <div className="App-content">
        <CryptoList currency={currency} />
      </div>
    </div>
  )
}