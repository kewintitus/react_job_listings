import { useEffect, useState } from 'react';
import RoleSelect from '../../UI/MultiSelectComponent/RoleSelect';
import classes from './JobSearchFilters.module.css';
import { useDispatch } from 'react-redux';
import { setJobs, updateFilters } from '../../slice/jobSlice';
import ExperienceSelect from '../../UI/SelectComponent/ExperienceSelect';
import CompanySearch from '../../UI/InputComponenet/CompanySearch';
import SearchLocation from '../../UI/InputComponenet/SearchLocation';
import MinBasePay from '../../UI/InputComponenet/MinBasePay';

export type SelectedFiltersType = {
  role: string[] | null | undefined;
  companyName: string | null;
  location: string;
  workType: string;
  techStack: string[];
  minExperience: number | null | undefined;
  minBasePay: number | null | undefined;
};

export type SelectedRoleType = string[] | [];
export type SelectedCompanyType = string | null;
export type SelectedLocationType = string;
export type SelectedWorkTypeType = string | null;
export type SelectedTechStackType = string[] | [];
export type MinWorkExpType = number | null;
export type MinBasePayType = number | null;

const JobSearchFilters = () => {
  const [selectedRole, setSelectedRole] = useState<SelectedRoleType>([]);
  const [selectedCompany, setSelectedCompany] =
    useState<SelectedCompanyType>('');
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocationType>('');
  // const [selectedWorkType, setSelectedWorkType] =
  //   useState<SelectedWorkTypeType>('');
  // const [selectedTechStack, setSelectedTechStack] =
  //   useState<SelectedTechStackType>([]);
  const [selectedMinExperience, setSelectedMinExperience] =
    useState<MinWorkExpType>(null);

  const [minBasePay, setMinBasePay] = useState<MinBasePayType>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setJobs({
        filters: {
          role: selectedRole,
          minExperience: selectedMinExperience,
          companyName: selectedCompany,
          location: selectedLocation,
          minBasePay: minBasePay,
        },
      })
    );
    dispatch(
      updateFilters({
        filters: {
          role: selectedRole,
          minExperience: selectedMinExperience,
          companyName: selectedCompany,
          location: selectedLocation,
          minBasePay: minBasePay,
        },
      })
    );
    console.log('effect triggered');
  }, [
    selectedRole,
    selectedCompany,
    selectedLocation,
    selectedMinExperience,
    minBasePay,
    dispatch,
  ]);

  return (
    <div className={classes.filtersWrapper}>
      <RoleSelect
        // selectedFilters={selectedFilters}
        setSelectedRole={setSelectedRole}
      ></RoleSelect>
      <ExperienceSelect
        setSelectedMinExperience={setSelectedMinExperience}
      ></ExperienceSelect>
      <CompanySearch setSelectedCompany={setSelectedCompany}></CompanySearch>
      <SearchLocation
        setSelectedLocation={setSelectedLocation}
      ></SearchLocation>
      <MinBasePay setMinBasePay={setMinBasePay}></MinBasePay>
      {/* <RoleSelect
        // selectedFilters={selectedFilters}
        setSelectedRole={setSelectedRole}
      ></RoleSelect>
      <RoleSelect
        // selectedFilters={selectedFilters}
        setSelectedRole={setSelectedRole}
      ></RoleSelect>
      <RoleSelect
        // selectedFilters={selectedFilters}
        setSelectedRole={setSelectedRole}
      ></RoleSelect> */}
    </div>
  );
};

export default JobSearchFilters;
