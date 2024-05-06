import React, { useRef } from 'react';
import classes from './CompanySearch.module.css';
import { SelectedCompanyType } from '../../Components/JobSearchFilters/JobSearchFilters';

type Props = {
  setSelectedCompany: React.Dispatch<React.SetStateAction<SelectedCompanyType>>;
};

const CompanySearch = (props: Props) => {
  const companySearchRef = useRef<HTMLInputElement | null>(null);

  const inputChangeHandler = () => {
    // console.log(companySearchRef.current?.value);
    props.setSelectedCompany(companySearchRef.current?.value || null);
  };
  return (
    <input
      ref={companySearchRef}
      placeholder="Company"
      onChange={inputChangeHandler}
      className={classes.companyInput}
      type="text"
    ></input>
  );
};

export default CompanySearch;
