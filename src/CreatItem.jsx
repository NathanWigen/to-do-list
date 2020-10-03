import React, { useState } from "react"
import axios from "axios"

function CreatItem(props) {
  const [item, updateItem] = useState("")
  const [note, updateNote] = useState("")
  const [author, updateAuthor] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      item,
      note,
      author,
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/TODO's`;
    await axios.post(airtableURL, { fields }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    })

    props.updateFetchItems(!props.fetchItem)
    updateItem("")
    updateNote("")
    updateAuthor("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item:</label>
      <input name="item" type="text" value={item} onChange={(e) => updateItem(e.target.value)} />
      <label htmlFor="note">Note:</label>
      <input name="note" type="text" value={note} onChange={(e) => updateNote(e.target.value)} />
      <label htmlFor="author">Author:</label>
      <input name="author" type="text" value={author} onChange={(e) => updateAuthor(e.target.value)} />
      <button type="submit">Add to List</button>
    </form>
  )
}

export default CreatItem