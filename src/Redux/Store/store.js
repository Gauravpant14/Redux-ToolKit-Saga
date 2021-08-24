 import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
 import { userReducer } from '../Reducers/userReducer'
 import createSagaMiddleware from 'redux-saga'
import userSaga from '../Sagas/userSaga';

//  1. we are using configureStore method of toolkit , not using createStore method of redux
//  2. So we will use middileware option from configureStore method and will pass our saga middleware

const sagaMiddleware = createSagaMiddleware();

 export const store = configureStore({
     reducer: userReducer,
     middleware: [...getDefaultMiddleware(),sagaMiddleware]
 })

 sagaMiddleware.run(userSaga)