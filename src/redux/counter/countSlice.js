import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 100,
  student:[],
  verifyUser:"",
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser:(state,actions)=>{
      state.verifyUser = actions.payload;
    }
    
  },
})


export const {setUser} = counterSlice.actions

export default counterSlice.reducer