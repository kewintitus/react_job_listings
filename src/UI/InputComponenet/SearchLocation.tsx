import React, { useRef } from 'react';
import classes from './SearchLocation.module.css';
import { SelectedLocationType } from '../../Components/JobSearchFilters/JobSearchFilters';

type Props = {
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<SelectedLocationType>
  >;
};

const SearchLocation = (props: Props) => {
  const locationSearchRef = useRef<HTMLInputElement | null>(null);

  const inputChangeHandler = (e) => {
    console.log(locationSearchRef.current?.value);
    props.setSelectedLocation(locationSearchRef.current?.value || null);
  };
  return (
    <input
      ref={locationSearchRef}
      placeholder="Location"
      onChange={inputChangeHandler}
      className={classes.companyInput}
      type="text"
    ></input>
  );
};

export default SearchLocation;
