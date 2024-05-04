import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface JobDetails {
  companyName: string;
  jdLink: string;
  jdUid: string;
  jobDetailsFromCompany: string;
  jobRole: string;
  location: string;
  logoUrl: string;
  maxExp: number;
  maxJdSalary: number;
  minExp: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
}

const initialState: JobDetails[] | [] = [];

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action: { payload: JobDetails[] }) {
      console.log(action);
      return { ...action.payload };
    },
  },
});
export const getJobs = (state: RootState) => {
  return state;
};
// export const { setName } = userSlice.actions;

export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;
