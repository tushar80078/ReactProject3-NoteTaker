import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import "@fortawesome/fontawesome-free/css/all.css";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteContent } from '../slices/noteSlicer';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const ShowNotes = () => {
  const notify = () => toast.error('Note Deleted !', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const dispatch=useDispatch();
    const selector=useSelector(state=>state.noteSlicer.contents);
   

    const removeIt=(item)=>{
        dispatch(deleteContent(item));
        notify();
    } 

  return (
    <div className='show'>
       <ToastContainer />
        {
            selector.length==0?<p className='note'>Save Your Notes In Smarter Way !!!</p>:selector.map((ele,i)=>{
                return <div key={i}>
                    <div className="card">
                      <div  className="card-header">
                        <h2>{ele.head}  <FontAwesomeIcon onClick={()=>removeIt(ele.id)} style={{position: 'absolute',top: "10px", right: "30px", cursor: 'pointer', color:"red",  fontSize:"20px", fontWeight:"bolder" }} icon={faClose}/></h2>
                      </div>
                      <div className="card-body">
                          <p>{ele.disc}</p>
                      </div>
                    </div>
                </div>
            })
        }
        
    </div>
  )
}

export default ShowNotes