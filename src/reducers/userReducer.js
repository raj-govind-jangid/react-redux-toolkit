import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { updateAge, updateStatus } from "../actions"/\

const initialState = {
    name:"Ramesh",
    age:20,
    status:"Coder"
}

export const fetchUserName = createAsyncThunk(
    'fetchuser',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const res2 = await res.json()
        return res2[0].name
    }
  )

const userReducer = createSlice({
    name:"person",
    initialState,
    reducers:{
        updateName(state,action){
            state.name = action.payload
        },
        updateAge(state,action){
            state.age = action.payload
        },
        updateStatus(state,action){
            state.status = action.payload
        },
    }
})

export const {updateName, updateAge, updateStatus} = userReducer.actions

export default userReducer.reducer

// export default createReducer(initialState,(builder)=>{
//     builder.addCase(updateAge,(state,action)=>{
//         state.age = action.payload
//     })
//     builder.addCase('UPDATE_NAME',(state,action)=>{
//         state.name = action.payload
//     })
//     builder.addCase(updateStatus,(state,action)=>{
//         state.status = action.payload
//     })
// })



// export default (state=initialState,action) => {
//     if(action.type == 'UPDATE_AGE'){
//         return {
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
// }