import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BodyTable = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("../data/bbs.json")
        .then(response => setPosts(response.data))
        .catch(error => {console.error("데이터 불러오기 실패", error);
        })
    },[]);
  return (
    <table className="list-table">
        <colgroup>
           <col width="5%" />
           <col />
           <col width="10%" />
           <col width="10%" />
           <col width="10%" />
        </colgroup>
        <thead>
           <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
              <th>조회수</th>
           </tr>
        </thead>   
        <tbody>
            {
                posts.slice().reverse().map((post)=>(
                    <tr key={post.id}>
                        <td className='text-center'>{post.id}</td>
                        <td><Link to={`view/${post.id}`}>{post.title}</Link></td>
                        <td className='text-center'>{post.writer}</td>
                        <td className='text-center'>{post.wdate}</td>
                        <td className='text-center'>{post.hit}</td>
                    </tr>
                ))
            }
        </tbody> 
    </table>
  )
}

export default BodyTable