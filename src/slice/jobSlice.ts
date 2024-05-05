import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface JobDetails {
  companyName: string;
  jdLink: string;
  jdUid: string;
  jobDetailsFromCompany: string;
  jobRole: string | null;
  location: string;
  logoUrl: string;
  maxExp: number;
  maxJdSalary: number;
  minExp: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  selected?: boolean;
}

interface FiltersType {
  role?: string[];
  companyName?: string;
  location?: string;
  workType?: string;
  techStack?: string[];
  minExperience?: number;
  minBasePay?: number;
}

type sliceDataType = {
  filters?: FiltersType;
  jobs?: JobDetails[] | [];
};

const initialState: sliceDataType = {
  filters: {
    role: [],
    companyName: '',
    location: '',
    workType: '',
    techStack: [],
    minExperience: 0,
    minBasePay: 0,
  },
  jobs: [],
};
// const initialState: JobDetails[] | [] = [];

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action: { payload: sliceDataType }) {
      console.log(action);
      if (!action.payload?.filters) {
        return {
          filters: state.filters,
          jobs: action.payload.jobs?.map((job) => {
            job.selected = true;
            return job;
          }),
        };
      }

      if (action.payload?.filters) {
        const filters = action.payload?.filters;
        let filteredArr = state.jobs;
        console.log(filters, action.payload);

        if (action.payload?.filters?.role) {
          filteredArr?.forEach((job) => {
            if (action.payload.filters?.role?.includes(job?.jobRole)) {
              job.selected = true;
            } else if (action.payload?.filters?.role?.length == 0) {
              filteredArr?.forEach((job) => {
                job.selected = true;
              });
            } else {
              job.selected = false;
            }
          });
        }
        // console.log(filteredArr, 'in redux');
        // return { filters: action.payload?.filters };
      }
    },
    updateFilters(state, action: { payload: sliceDataType }) {
      if (action.payload.filters) {
        return { jobs: state.jobs, filters: action.payload?.filters };
      }
    },
  },
});
export const getJobs = (state: RootState) => {
  // console.log(state.jobs.jobs, 'in state');
  return state.jobs.jobs || [];
};

export const getFilters = (state: RootState) => {
  return state.jobs.filters;
};
// export const { setName } = userSlice.actions;

export const { setJobs, updateFilters } = jobSlice.actions;
export default jobSlice.reducer;
