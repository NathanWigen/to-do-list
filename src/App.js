import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateItem from "./CreatItem"
import Item from "./Item"
import './App.css';

function App() {
  const [item, updateNewItem] = useState([])
  const [fetchItem, UpdateFetchItems] = useState = (false)

  useEffect(() => {
    const getItem = async () => {
      const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/TODOs`;
      const resp = await axios.get(airTableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      })
      updateNewItem(resp.data.records)
    }
    getItem()
  }, [fetchItem])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
