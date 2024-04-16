import React, { useContext, useEffect, useState } from 'react'
import Header from './../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';
import { DiaryDispatchContent, DiaryStateContent } from '../App';
import { UseDiary } from '../hooks/useDiary';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate()
  const {onDelete, onUpdate} = useContext(DiaryDispatchContent);
  
  const curDiaryItem = UseDiary(params.id)
  
  const onClickDelete = () =>{
    if ( window.confirm('일기를 삭제하겠습니까?') === true) {
      onDelete(params.id)
      nav('/', {replace : true});
    }
      

  }
  
  const onSubmit = (input) => {
    
    if(window.confirm('수정하겠습니까?')){
      
      onUpdate(
        params.id,
        input.createDate.getTime(), 
        input.emotionId, 
        input.content
      )
      nav('/', { replace: true })
    }
  }

  return (
    <div className='Edit'>
       <Header title={'일기 수정하기'} 
              leftChild={<Button text={'< 뒤로가기'}  onClick={()=> nav(-1)} />}
              rightChild={<Button text={'삭제하기'} className={'positive'} onClick={onClickDelete}/>}
      />
              
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
  )
}

export default Edit
