import React, { useRef } from 'react';
import classes from './MinBasePay.module.css';
import { MinBasePayType } from '../../Components/JobSearchFilters/JobSearchFilters';

type Props = {
  setMinBasePay: React.Dispatch<React.SetStateAction<MinBasePayType>>;
};

const MinBasePay = (props: Props) => {
  const basePayRef = useRef<HTMLInputElement | null>(null);

  const inputChangeHandler = () => {
    console.log(basePayRef.current?.value);
    props.setMinBasePay(Number(basePayRef.current?.value));
  };
  return (
    <input
      ref={basePayRef}
      placeholder="BasePay (LPA)"
      onChange={inputChangeHandler}
      className={classes.basePayInput}
      type="number"
    ></input>
  );
};

export default MinBasePay;
