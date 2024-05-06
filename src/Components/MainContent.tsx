import { forwardRef } from 'react';
import classes from './MainContent.module.css';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { getJobs } from '../slice/jobSlice';
import JobNav from './Nav/JobNav';
import JobSearchFilters from './JobSearchFilters/JobSearchFilters';

const MainContent = forwardRef<HTMLDivElement>((props, ref) => {
  const selectedJobs = useSelector(getJobs);
  console.log(selectedJobs);

  return (
    <div className={classes.mainContentArea}>
      <Paper className={classes.welcomeHeader}>👋Hello User</Paper>
      <JobNav></JobNav>
      <JobSearchFilters></JobSearchFilters>
      <div className={classes.jobsWrapper}>
        {selectedJobs?.map((job) => {
          if (job.selected)
            return (
              <div className={classes.jobCard}>
                <div className={classes.jobHeader}>
                  <img src={job.logoUrl} className={classes.companyImage}></img>
                  <div className={classes.companyJobHead}>
                    <div className={classes.companyName}>{job.companyName}</div>
                    <div className={classes.jobRole}>{job.jobRole}</div>
                  </div>
                </div>
                <div className={classes.jobLocation}>{job.location}</div>
                <div className={classes.salaryRange}>{`Estimated Salary ₹ ${
                  job.minJdSalary || 0
                } - ${job.maxJdSalary} LPA ✅`}</div>
                <div className={classes.abtCompanyHeader}>About Company</div>
                <div className={classes.aboutUs}>About Us</div>
                <div className={classes.jobDescription}>
                  {job.jobDetailsFromCompany}
                </div>
                <div className={classes.jobExperience}>
                  Minimum experience: {job.minExp || 0} Years
                </div>
                <button className={classes.jobApplyBtn}>⚡Easy Apply</button>
              </div>
            );
        })}
        <div ref={ref}></div>
      </div>
      <div></div>
    </div>
  );
});

export default MainContent;
