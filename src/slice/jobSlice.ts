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
  role?: string[] | null | [] | undefined;
  companyName?: string | null | undefined;
  location?: string;
  workType?: string;
  techStack?: string[];
  minExperience?: number | null | undefined;
  minBasePay?: number | null;
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
      console.log('setting all true');
      if (!action.payload?.filters) {
        return {
          filters: state.filters,
          jobs: action.payload.jobs?.map((job) => {
            return job;
          }),
        };
      }
      let filteredArr = state.jobs;

      if (action.payload?.filters) {
        const filters = action.payload?.filters;
        // let filteredArr = state.jobs;
        console.log(filters, action.payload, 'infilter');

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
        if (action.payload?.filters?.minExperience) {
          console.log('setting minexp');
          filteredArr?.forEach((job) => {
            if (
              job.minExp >= action.payload?.filters?.minExperience &&
              job.selected == true
            ) {
              job.selected = true;
            } else {
              job.selected = false;
            }
          });
        }
        if (action.payload?.filters?.companyName) {
          filteredArr?.forEach((job) => {
            const lCompanyName = job.companyName.toLowerCase();
            const lFilterCompanyName =
              action.payload.filters?.companyName?.toLowerCase();

            if (
              lCompanyName.includes(lFilterCompanyName) &&
              job.selected == true
            ) {
              job.selected = true;
            } else {
              job.selected = false;
            }
          });
        }
        if (
          action.payload?.filters?.location ||
          action.payload?.filters?.location == ''
        ) {
          filteredArr?.forEach((job) => {
            const lowerLocation = job.location.toLowerCase();
            const lFilterLocation =
              action.payload?.filters?.location?.toLowerCase();

            if (
              lowerLocation.includes(lFilterLocation) &&
              job.selected == true
            ) {
              job.selected = true;
            } else {
              job.selected = false;
            }
          });
        }

        if (
          action.payload?.filters?.minBasePay ||
          action.payload?.filters?.minBasePay == 0
        ) {
          filteredArr?.forEach((job) => {
            const minJobPay = job.minJdSalary;
            const minRequiredPay = action.payload?.filters?.minBasePay;
            // if (minJobPay || minRequiredPay) return;
            if (minJobPay >= minRequiredPay && job.selected) {
              job.selected = true;
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

export const getCompanyNames = (state: RootState) => {
  const companies = state.jobs.jobs?.map((job) => {
    return job.companyName;
  });
  return [...new Set(companies)];
};

// export const getLocations = (state: RootState) => {
//   const locations = state.jobs.jobs?.map((job) => {
//     return job.location;
//   });
//   console.log([...new Set(locations)]);
//   return [...new Set(locations)];
// };
// export const { setName } = userSlice.actions;

export const { setJobs, updateFilters } = jobSlice.actions;
export default jobSlice.reducer;
