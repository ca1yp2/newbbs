import React from 'react'
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const BodyPaging = () => {
  return (
    <div className='mb-2'>
        <ul className="paging">
        <li><a href="#" className="first"><RiArrowLeftDoubleLine /></a></li> 
        <li><a href="#" className="prev"><RiArrowLeftSLine /></a></li>
        <li><a href="#" className="act">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#" className="next"><RiArrowRightSLine /></a></li> 
        <li><a href="#" className="last"><RiArrowRightDoubleLine /></a></li>
        </ul>
    </div>
  )
}

export default BodyPaging