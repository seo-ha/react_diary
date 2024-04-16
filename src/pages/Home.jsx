import React, { useContext, useState } from 'react'
import Header from './../components/Header';
import Button from '../components/Button';
import DirayList from '../components/DirayList';
import { DiaryStateContent } from '../App';

const getmonthlyData = (pivotDate, data) =>{
  
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1 ,0,59,59,59).getTime();

  return data.filter((item)=> beginTime <= item.createDate && item.createDate <= endTime)
}

const Home = () => {
  
  const data = useContext(DiaryStateContent);
  const [pivotDate, setPivotDate] = useState(new Date());
  
  const monthlyDate = getmonthlyData(pivotDate,data);
  
  const onIncreaseMonth = () =>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () =>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  
  return (
    <div>
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}  
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
        />
        <DirayList data={monthlyDate} />
    </div>
  )
}

export default Home
