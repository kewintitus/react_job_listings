import { combineReducers } from '@reduxjs/toolkit';
import jobSlice from '../slice/jobSlice';

const rootReducer = combineReducers({ jobs: jobSlice });

export default rootReducer;
