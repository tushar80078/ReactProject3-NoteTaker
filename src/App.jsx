import { useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.css";
import './App.css'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopUp from './components/PopUp';
import { useDispatch } from 'react-redux';
import { setModalState } from './slices/noteSlicer';
import ShowNotes from './components/ShowNotes';


function App() {
  const dispatch=useDispatch();

  const changeModalState=()=>{
    dispatch(setModalState(1));
  }
  return (
    <div className="todo-container">
      <div className="card cardB">
        <div className="">
          <h1>Note Taker</h1>
        </div>

        <PopUp/>

        <div className=''>
         
        <ShowNotes/>

      
        </div>
        

        <div className='plus-icon'>
          <FontAwesomeIcon onClick={changeModalState} icon={faPlusCircle}  size="5x"  />
        </div>
      </div>      
    </div>
  )
}

export default App
