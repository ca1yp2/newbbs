import React from 'react'
import { Link } from 'react-router-dom'

const BodyButton = () => {
  return (
    <div className="d-flex justify-content-end mt-4">
        <Link to={`write`} className="btn">글쓰기</Link>
    </div>
  )
}

export default BodyButton