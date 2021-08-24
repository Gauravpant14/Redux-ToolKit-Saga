import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    name:"gaurav",
    age:20,
    joke:''
}

export const userReducer = createReducer(initialState,(builder) => {
    builder.addCase('UPDATE_NAME_SUCCESS',(state,action) => {
        state.name = action.payload
    })
    builder.addCase('UPDATE_AGE_SUCCESS',(state,action) => {
        state.age = state.age + action.payload
    })
    builder.addCase('GET_JOKE_SUCCESS',(state,action) => {
        state.joke = action.payload
    })
  
})