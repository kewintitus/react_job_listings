import { useState } from 'react';
import Select from 'react-select';
import {
  MinWorkExpType,
  SelectedRoleType,
} from '../../Components/JobSearchFilters/JobSearchFilters';

type Props = {
  setSelectedMinExperience: React.Dispatch<
    React.SetStateAction<MinWorkExpType>
  >;
};

const options = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
];

type OptionType = { value: number; label: string };

const ExperienceSelect = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<number>(null);
  const handleChange = (selectedOptions: OptionType[] | []) => {
    // console.log(selectedOptions);
    setSelectedOptions(selectedOptions);
    props.setSelectedMinExperience(selectedOptions.value);
    // props.setSelectedRole(() => {
    //   return selectedOptions.map((data) => data.value);
    // });
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      maxHeight: '40px', // Adjust as needed
      // display: 'flex',
    }),
    // menu: (provided: any, state: any) => ({
    //   ...provided,
    //   maxHeight: '40px', // Adjust the maximum height as needed
    // }),
  };
  return (
    <div style={{ flex: 1 }}>
      <Select
        onChange={handleChange}
        // ref={roleRef}
        placeholder="Min Experience"
        value={selectedOptions}
        options={options}
        // styles={customStyles}
        // isMulti
      />{' '}
    </div>
  );
};

export default ExperienceSelect;
