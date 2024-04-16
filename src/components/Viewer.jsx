import React from 'react'
import { emotion } from '../util/constants'

function Viewer({emotionId, content}) {
 
    const emotionItem = emotion.find(
        (item)=> String(item.emotionId) === String(emotionId)
    )
    
  return (
    <div className='Viewer'>
      <section>
        <strong>오늘의 감정</strong>
        <div className={`imgBox imgBox${emotionId}`}>
            <img src={`/emotion/emotion${emotionId}.png`} alt="" />
            <span>{emotionItem.emotionName}</span>
        </div>
      </section>
      <section>
        <strong>오늘의 일기</strong>
        <textarea name="" id="">{content}</textarea>
      </section>
    </div>
  )
}

export default Viewer
