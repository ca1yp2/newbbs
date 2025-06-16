import React from 'react'

const BodyHeader = () => {
  return (
    <div className='d-flex justify-content-between pb-2'>
        <div className="d-flex">
            <div className="all-text">
                <i className="ri-file-list-line"></i>총 글 수 <span>1,293</span> 건
            </div>
            <div className="now-text">현재 페이지<span>1/12</span></div>
        </div>
        <div className="sortting">
            <span className='me-2'>페이지당 목록</span>
            <select name="sortList" id="sortList" className='list-ct'>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>
    </div>
  )
}

export default BodyHeader