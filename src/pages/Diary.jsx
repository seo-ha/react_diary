import React from 'react'
import Header from '../components/Header'
import Viewer from '../components/Viewer'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { UseDiary } from './../hooks/useDiary';
import getStringedDate from '../hooks/getDate'

const Diary = () => {
  
  const params = useParams()
  const nav = useNavigate();
  
  const curDiaryItem = UseDiary(params.id);
  
  if(!curDiaryItem) {
    return <div>데이터 로딩중....!</div>
  }
  
  const {createDate, emotionId, content} = curDiaryItem;
  const title = getStringedDate(new Date(createDate))
  
  return (
    <div className='DiaryWrap'>
      <Header 
            title={`${title}`}
            leftChild={<Button text={'< 뒤로가기'}  onClick={()=> nav(-1)}/>}
            rightChild={<Button text={'수정하기'}  onClick={()=> nav(`/edit/${params.id}`)}/>}
      />
      
      <Viewer emotionId={emotionId} content={content}/>
    </div>
  )
}

export default Diary
