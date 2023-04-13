import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../App.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalState } from '../slices/noteSlicer';
import Button from '@mui/material/Button';
import "@fortawesome/fontawesome-free/css/all.css";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setContent } from '../slices/noteSlicer';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const PopUp = () => {
    const notify = () => toast.success("Saved SuccessFully",{
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        const er = () => toast.error('Note Have A Title !', {
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
    const selector=useSelector(state=>state.noteSlicer.modalState);
    const [open, setOpen] = useState(selector);
    const myUuid = uuidv4();

    const [note,setNote]=useState({head:"",disc:""});

    useEffect(()=>{
        setOpen(selector);
    },[selector])

    const handlechange=(event)=>{
        setNote({...note,[event.target.name]:event.target.value});
    }

    const handleClick=()=>{
        if(note.head.length>0)
        {
            dispatch(setContent({...note, id: myUuid}));
        dispatch(setModalState(2));
        notify();
        setNote({
            head:"",
            disc:""
        })
        }else
        {
            er();
        }
        

    }

    return (
        <div>
             <ToastContainer />
            {
                selector==true?<div className="modal">
                <div className="modal-content">
                    <div style={{
      position: 'absolute',
      top: "10px",
      right: "30px",
      cursor: 'pointer',
      color:"red",
      fontSize:"20px",
      fontWeight:"bolder"
    }}
    onClick={() => dispatch(setModalState(2))}><FontAwesomeIcon icon={faClose}/></div>
                  <Box>
                    <h2>Add a new note  </h2>
                    <form noValidate autoComplete="off">
                      <TextField
                        onChange={handlechange}
                        name="head"
                        value={note.head}
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        InputProps={{style: {color: 'white',fontWeight:"bold", fontFamily: "'Poppins', sans-serif", borderColor: '#EFCC0A'
                            }
                        }}
                        InputLabelProps={{style: {color: '#EFCC0A', fontWeight:"bold", fontFamily: "'Poppins', sans-serif"  }}}
                      />
                      <br />
                      <TextField id="outlined-multiline-static" label="Note" multiline rows={4} variant="outlined" fullWidth  InputProps={{
                            style: {
                                color: 'white',
                                fontWeight:"bold",
                                fontFamily: "'Poppins', sans-serif",
                                borderColor: '#EFCC0A',
                                marginTop:"20px"
                            }
                        }}
                        onChange={handlechange}
                        value={note.disc}
                        name="disc"
                        InputLabelProps={{
                            style: {
                                color: '#EFCC0A',
                                fontWeight:"bold",
                                fontFamily: "'Poppins', sans-serif",
                            }
                        }}
                      />
                      <div style={{marginTop:"10px"}}>
                      <Button onClick={handleClick} variant="contained">Save <ToastContainer /></Button>
                      </div>
                    
                   </form>
                  </Box>
                </div>
              </div>:""
            }        
        </div>
    )
}

export default PopUp
