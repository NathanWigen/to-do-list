import React, { useState } from "react"
import axios from "axios"
import UpdateItems from "./UpdateItems"

function Item(props) {
  const [deleted, updateDeleted] = useState(false)

  const handleDelete = async () => {
    updateDeleted(true)
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/TODO's/${props.item.id}`
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      props.UpdateFetchItem(!props.fetchItem)
      setDeleted(false)
    }, 2000)
  }

  return (
    <div className="item">
      <h3>{props.TODOs.fields.item}</h3>
      <h4>{props.TODOs.fields.note}</h4>
      <h5>{props.TODOs.fields.author}</h5>
      <button onClick={handleDelete}>{deleted ? "add" : "remove"}</button>
      <UpdateItems
        item={props.item}
        fetchItem={props.fetchItem}
        UpdateFetchItem={props.UpdateFetchItem}
        />
    </div>
  )
}

export default Item