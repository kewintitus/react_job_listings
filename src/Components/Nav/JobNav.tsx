import classes from './JobNav.module.css';

// type Props = {};

const JobNav = () => {
  return (
    <div className={classes.jobNavWrapper}>
      <div className={classes.jobNavItem}>Applied Jobs</div>
      <div className={`${classes.jobNavItem} ${classes.jobNavItem__active}`}>
        Search Jobs
      </div>
      <div className={classes.jobNavItem}>Suggested Jobs</div>
    </div>
  );
};

export default JobNav;
