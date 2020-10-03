import React, { useState } from "react"
import axios from "axios"

function UpdateItems(props) {
  const [item, updateItem] = useState(props.TODOs.fields.item)
  const [note, updateNote] = useState(props.TODOs.fields.note)
  const [author, updateAuthor] = useState(props.TODOs.fields.author)

  const handleSubmit = async (e) => {
    const fields = {
      item,
      note,
      author,
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/reviews/${props.review.id}`;
    await axios.put(
      airtableURL, { fields }, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      }
    )
  }
  props.updateFetchItems(!props.updateFetchItems)
}

return (
  <form className="update-form" onSubmit={handleSubmit}>
  <label htmlFor="item">Item:</label>
  <input
    name="item"
    type="text"
    placeholder="title"
    value={title}
    onChange={(e) => updateItem(e.target.value)}
  />
  <label htmlFor="note">Note:</label>
  <input
    name="note"
    type="text"
    placeholder="text"
    value={text}
    onChange={(e) => updateNote(e.target.value)}
  />
  <label htmlFor="author">Author:</label>
  <input
    name="author"
    type="text"
    placeholder="author"
    value={author}
    onChange={(e) => updateAuthor(e.target.value)}
  />
  <button type="submit">New Item</button>
</form>
)


export default UpdateItems