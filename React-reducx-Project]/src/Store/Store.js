import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Todo/TodoSilicer';
// import the reducer and add the imported reducer to the reducer inside config store method 
export const Store = configureStore({
    reducer :todoReducer
});