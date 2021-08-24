import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name:"gaurav",
    age:20,
    joke:''
}

// builder.addCase('UPDATE_NAME_SUCCESS',(state,action) => {
//     state.name = action.payload
// })
// builder.addCase('UPDATE_AGE_SUCCESS',(state,action) => {
//     state.age = state.age + action.payload
// })
// builder.addCase('GET_JOKE_SUCCESS',(state,action) => {
//     state.joke = action.payload
// })

export const userReducer = createSlice({
    name:"any_name",
    initialState,
    reducers:{
        updateName(state,action){
            state.name = action.payload
        },
        updateAges(state,action){
            state.age = state.age + action.payload
        },
        updateJoke(state,action){
            state.joke = action.payload
        }
    }
})

//while using creatSlice method ,we have to export actions from the reducer..as we did here
export const {updateName,updateAges,updateJoke} = userReducer.actions
//also we have to export the reducer ..as we did here
export default userReducer.reducer