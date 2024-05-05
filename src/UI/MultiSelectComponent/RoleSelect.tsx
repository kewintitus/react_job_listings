import { useState } from 'react';
import Select from 'react-select';
import { SelectedRoleType } from '../../Components/JobSearchFilters/JobSearchFilters';

type Props = {
  setSelectedRole: React.Dispatch<React.SetStateAction<SelectedRoleType>>;
};

const options = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'ios', label: 'IOS' },
  { value: 'android', label: 'Android' },
  { value: 'tech lead', label: 'Tech Lead' },
  { value: 'backend', label: 'Backend' },
];

type OptionType = { value: string; label: string };

const RoleSelect = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const handleChange = (selectedOptions: OptionType[] | []) => {
    setSelectedOptions(selectedOptions);
    props.setSelectedRole(() => {
      return selectedOptions.map((data) => data.value);
    });
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
        value={selectedOptions}
        options={options}
        // styles={customStyles}
        isMulti
      />{' '}
    </div>
  );
};

export default RoleSelect;
