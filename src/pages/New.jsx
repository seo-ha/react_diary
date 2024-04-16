import React, { useContext, useEffect } from 'react'
import Header from './../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Editor from '../components/Editor';
import { DiaryDispatchContent } from '../App';

const New = () => {
  
  const {onCreate} = useContext(DiaryDispatchContent);
  const nav = useNavigate()
  
  const onSubmit = (input) =>{
    onCreate(
      input.createDate.getTime(), 
      input.emotionId, 
      input.content
    )
    
    nav('/', { replace: true })
  }
  
  return (
    <div className='New'>
      <Header title={'새 일기 쓰기'} 
              leftChild={<Button text={'< 뒤로가기'}  onClick={()=> nav(-1)}/>}
      />
              
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New
