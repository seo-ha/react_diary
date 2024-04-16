import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const DiaryItem = ({id, createDate, content , emotionId}) => {
    
    const nav = useNavigate();

  return (
    <div className='DiaryItem'>
        <div className={`imgBox imgBox${emotionId}`} onClick={()=>nav(`/diary/${id}`)}>
            <img src={`/emotion/emotion${emotionId}.png`} alt="" />
        </div>
        <div className='textBox' onClick={()=>nav(`/diary/${id}`)}>
            <p>{new Date(createDate).toLocaleDateString()}</p>
            <span>{content}</span>
        </div>
        <div className='btn'>
            <Button text={'수정하기'} onClick={()=>nav(`/edit/${id}`)}/>
        </div>
    </div>
  )
}

export default DiaryItem
