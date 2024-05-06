import React, { useRef } from 'react';
import classes from './MinBasePay.module.css';
import { MinBasePayType } from '../../Components/JobSearchFilters/JobSearchFilters';

type Props = {
  setMinBasePay: React.Dispatch<React.SetStateAction<MinBasePayType>>;
};

const MinBasePay = (props: Props) => {
  const basePayRef = useRef<HTMLInputElement | null>(null);

  const inputChangeHandler = (e) => {
    console.log(basePayRef.current?.value);
    props.setMinBasePay(basePayRef.current?.value || null);
  };
  return (
    <input
      ref={basePayRef}
      placeholder="BasePay (LPA)"
      onChange={inputChangeHandler}
      className={classes.basePayInput}
      type="text"
    ></input>
  );
};

export default MinBasePay;
