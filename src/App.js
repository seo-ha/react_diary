
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import Edit from './pages/Edit';

function reducer (state, action){
  let nextState;
  
  switch (action.type) {
    case 'init' : 
      return action.data;
    case 'create': { 
      nextState = [action.data,...state]
      break
    }
    case 'update':{
      nextState =  state.map((item)=>
        String(item.id) === String(action.data.id) ? action.data : item)
        break;
      }
    case 'delete': {  
      nextState = state.filter((item)=> String(item.id) !== String(action.id))
      break;
    }
    default:
      return state;
  }
  
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContent = createContext();
export const DiaryDispatchContent = createContext();

function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [data,dispatch] = useReducer(reducer,[]);
  const idRef = useRef(0);
  
  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if(!storedData){
      return;
    }
    const parsedDate = JSON.parse(storedData);
    
    if(!Array.isArray(parsedDate)){
      setIsLoading(false);
      return ;
    }
    
    let maxId = 0;
    parsedDate.forEach(item => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    });
    
    console.log(maxId);
    
    idRef.current = maxId + 1 ;
    
    dispatch({
      type : 'init',
      data : parsedDate
    })
    
    setIsLoading(false);
  },[])
  
  const onCreate = (createDate, emotionId, content) => {
    dispatch ({
      type:'create',
      data : {
        id : idRef.current++,
        createDate,
        emotionId,
        content
      }
    })
  }
  
  const onUpdate = (id,createDate, emotionId,content)=>{
    dispatch({
      type : 'update',
      data : {
        id,
        createDate,
        emotionId,
        content
      }
    })
  }
  
  const onDelete = (id)=>{
    dispatch({
      type : 'delete',
      id
    })
  }
  
  if(isLoading) {
    return <div>로딩중입니다...@@</div>
  }
  
  return (
    <div className="App">

      <DiaryStateContent.Provider value={data} >
        <DiaryDispatchContent.Provider value={{onCreate, onDelete, onUpdate}}>
          
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/new' element={<New/>}></Route>
            <Route path='/diary/:id' element={<Diary/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
          </Routes>
          
        </DiaryDispatchContent.Provider>
      </DiaryStateContent.Provider>
    </div>
  );
}

export default App;
