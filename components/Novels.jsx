import React, { useState } from 'react'
export default () => {
  const [name, setName] = useState('')

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <input type="text" name="search" onChange={event => setName(event.target.value)} />
      <div className="name">{name}</div>
    </div>
  )
}