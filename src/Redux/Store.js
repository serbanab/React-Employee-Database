import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducers/Reducer';

const store = configureStore({
  reducer : {
    employeeReducer : Reducer ,
  }
});


export default store;
  
