import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Novel from './Novel'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [novelList, setNovelList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/novels')

      setNovelList(data)
    }
    pullData()
  }, [])
  useEffect(() => {}, [searchTerm])

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        // eslint-disable-next-line max-len
        novelList.map(novel => (<Novel key={novel.id} id={novel.id} title={novel.title} author={`${novel.author.nameFirst} ${novel.author.nameLast}`} />))
      }
    </div>
  )
}
