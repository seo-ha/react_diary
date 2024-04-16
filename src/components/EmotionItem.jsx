import React from 'react'

function EmotionItem({emotionId, emotionName, isSelected, onClick}) {
  return (
    <div className={`emotionBox ${isSelected ? `emotion_on_${emotionId}` : ''}`} onClick={onClick}>
      <img src={`/emotion/emotion${emotionId}.png`} alt="" />
      <span>{emotionName}</span>
    </div>
  )
}

export default EmotionItem
