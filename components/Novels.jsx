import axios from "axios";
import React, { useEffect, useState } from "react";

export default () => {
  const [novel, setNovel] = useState('')
  const [novelList, setNovelList] = useState([])
  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get("http://localhost:1337/api/novels");
        setNovelList(data);
    }
     pullData();
  }, []);

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <input type="text" name="search" onChange={event => setNovel(event.target.value)} />
      {
        novelList.map(novel => (<div>{`${novel.title} by ${novel.author.nameFirst} ${novel.author.nameLast}`}</div>))
      }
    </div>
  )
}