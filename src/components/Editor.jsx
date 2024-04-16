import React, { useEffect, useState } from 'react'
import EmotionItem from './EmotionItem'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { emotion } from '../util/constants';
import getStringedDate from '../hooks/getDate';


function Editor({initData, onSubmit}) {
    
    
    const nav = useNavigate();
    
    const [input, setInput] = useState({
        createDate : new Date(),
        emotionId : 3,
        content : ''
    });
    
    const onChangeInput = (e)=>{
    
        let name = e.target.name;
        let value = e.target.value;
        
        if(name === 'createDate') {
            value = new Date(value);
        }
        
        setInput({
            ...input,
            [name] : value,
        });
    }
    
    const onClickSubmitButton = ()=>{
        onSubmit(input);
    }
    
    
    useEffect(()=>{
        if(initData) {
            setInput({
                ...initData,
                createDate : new Date(Number(initData.createDate))
            })
        }
    },[initData])
    
  return (
    <div className='Editor'>
      <section>
        <strong>오늘의 날짜</strong>
        <input type="date" name='createDate' id="" onChange={onChangeInput} value={getStringedDate(input.createDate)}/>
      </section>
      <section>
        <strong>오늘의 기분</strong>
        <div className='flexBox'>
            {emotion.map((item) => 
            <EmotionItem 
                onClick={()=>onChangeInput({
                    target : {
                        name : 'emotionId',
                        value : item.emotionId
                    }
                })} 
                key={item.emotionId} {...item} isSelected={item.emotionId === input.emotionId} 
            />)}
        </div>
      </section>
      <section>
        <strong>오늘의 일기</strong>
        <textarea name="content" id="" placeholder='오늘은 어땠나요?' value={input.content} onChange={onChangeInput}></textarea>
      </section>
      <section>
        <div className='flexBox'>
            <Button text={'취소 하기'} className={'positive'} onClick={()=>nav(-1)}/>
            <Button text={'작성 완료'} className={'negative'} onClick={onClickSubmitButton} />
        </div>
      </section>
    </div>
  )
}

export default Editor
