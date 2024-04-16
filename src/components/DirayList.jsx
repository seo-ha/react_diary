import React, { useState } from 'react'
import Button from './Button'
import DiaryItem from './DiaryItem'
import { useNavigate } from 'react-router-dom'

const DirayList = ({data}) => {

  const nav = useNavigate();
  
  const [sortType, setSortType] = useState("latest");
  
  const onChangeSortType = (e) =>{
    setSortType(e.target.value);
  }
  
  const getSortedDate = ()=>{
    return data.toSorted((a,b)=>{
      if(sortType === 'oldest') {
        return Number(a.createDate) - Number(b.createDate);
      } else {
        return Number(b.createDate) - Number(a.createDate);
      }
    })
  }
  
  const sortedData = getSortedDate()
  
  return (
    <div className='DiaryLIst'>
      <div className='menu_bar'>
          <select name="" id="" onChange={onChangeSortType}>
            <option value={"latest"}>최신순</option>
            <option value={"oldest"}>오래된 순</option>
          </select>
          <Button text={'새 일기 쓰기'} className={'negative'}  onClick={()=>nav(`/new`)}/>
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default DirayList
