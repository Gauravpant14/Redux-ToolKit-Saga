import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    name:"gaurav",
    age:20,
}

export const userReducer = createReducer(initialState,(builder) => {
    builder.addCase('UPDATE_NAME',(state,action) => {
        state.name = action.payload
    })
    builder.addCase('UPDATE_AGE',(state,action) => {
        state.age = action.payload
    })
})