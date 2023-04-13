import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalState:false,
  contents:[]
}

export const noteSlicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  
    setModalState:(state,action)=>
    {
        action.payload==1?state.modalState=true:state.modalState=false;
    },

    setContent:(state,action)=>
    {
            state.contents.push(action.payload)
    },
    deleteContent:(state,action)=>{
         let newList= state.contents.filter((ele)=>{
            if(ele.id!=action.payload)
            {
              return ele;
            }
        })

      
        state.contents=newList;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setModalState,setContent,deleteContent} = noteSlicer.actions

export default noteSlicer.reducer