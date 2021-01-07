import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Novel from './Novel'

export default () => {
  const [title, setTitle] = useState('')
  const [novelList, setNovelList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/novels')

      setNovelList(data)
    }
    pullData()
  }, [])

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <input type="text" name="search" onChange={event => setTitle(event.target.value)} />
      {
        // eslint-disable-next-line max-len
        novelList.map(novel => (<Novel key={novel.id} id={novel.id} title={novel.title} author={`${novel.author.nameFirst} ${novel.author.nameLast}`} />))
      }
    </div>
  )
}
