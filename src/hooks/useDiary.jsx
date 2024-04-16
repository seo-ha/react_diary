import { React, useContext, useEffect, useState } from 'react';
import { DiaryStateContent } from '../App';
import { useNavigate } from 'react-router-dom';

export const UseDiary = (id)=>{
    
    const nav = useNavigate()
    
    const data = useContext(DiaryStateContent);
  
    const [curDiaryItem, setCurDiaryItem] = useState()
    
    useEffect(()=>{
      
      const currentDiaryItem =  data.find((item)=> String(item.id) === String(id))
      
      if(!currentDiaryItem) {
        window.confirm('님 잘 못 들어옴')
          nav('/', {replace: true})
        
      }
      
      setCurDiaryItem(currentDiaryItem);
      
    },[id,data]);
    
    return curDiaryItem;
}