import React, { useState, useEffect, useRef} from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Search = () => {
  const [selected, setSelected] = useState("--검색선택");
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectBoxRef = useRef(null);
  const options = [ {label:"--검색선택--", value:""}, {label: "이름검색", value: "writer"}, {label: "제목검색", value:"title"}, {label: "내용검색", value:"content"}];

  //바탕 클릭 시 드롭다운 닫기
  useEffect(()=>{
    const handleClickOutside = (e) => {
      if(selectBoxRef.current && !selectBoxRef.current.contains(e.target)){
        setDropdownOpen(false);
      }
      return () => document.addEventListener("click", handleClickOutside);
    }
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.value);
    setSelected(option.label);
    setDropdownOpen(false);
  }
  const handleReset = () => {
    setSelected("--검색선택--");
    setDropdownOpen(false);
    setSelectedOption("");
  }
  return (
    <div className='search-box'>
        <form name='search-form' className='d-flex justify-content-center'>
            <div className={`select-box ${dropdownOpen ? "active" : ""}`} ref={selectBoxRef}>
                <div className="selected" onClick={()=>setDropdownOpen(!dropdownOpen)}>
                    {selected}
                    {dropdownOpen ? <RiArrowUpSLine style={{float : "right", marginTop : "5px"}} /> :<RiArrowDownSLine style={{float : "right", marginTop : "5px"}} />}
                </div>
                <ul className="options">
                    {options.map(option => (
                        <li key={option.value} onClick={() => handleOptionSelect(option)}>{option.label}</li>
                    ))}
                </ul>
            </div>
            <input type="search" className="search-input" placeholder="검색..." />
            <input type="hidden" id="option" name="option" value={selectedOption}/>
            <button type="submit" className="btn-search">검색</button>
            <button type="reset" className="btn-search" onClick={handleReset}>초기화</button>
        </form>
    </div>
  )
}

export default Search