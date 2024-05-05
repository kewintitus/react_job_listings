import { useEffect, useState } from 'react';
import RoleSelect from '../../UI/MultiSelectComponent/RoleSelect';
import classes from './JobSearchFilters.module.css';
import { useDispatch } from 'react-redux';
import { setJobs, updateFilters } from '../../slice/jobSlice';

type Props = {};

export type SelectedFiltersType = {
  role: string[];
  companyName: string;
  location: string;
  workType: string;
  techStack: string[];
  minExperience: string;
  minBasePay: number;
};

export type SelectedRoleType = string[] | [];
export type SelectedCompanyType = string | null;
export type SelectedLocationType = string | null;
export type SelectedWorkTypeType = string | null;
export type SelectedTechStackType = string[] | [];
export type MinWorkExpType = number | null;
export type minBasePay = number | null;

const JobSearchFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>({
    role: [],
    companyName: '',
    location: '',
    workType: '',
    techStack: [],
    minExperience: '',
    minBasePay: 0,
  });
  const [selectedRole, setSelectedRole] = useState<SelectedRoleType>([]);
  const [selectedCompany, setSelectedCompany] =
    useState<SelectedCompanyType>('');
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocationType>('');
  const [selectedWorkType, setSelectedWorkType] =
    useState<SelectedWorkTypeType>('');
  const [selectedTechStack, setSelectedTechStack] =
    useState<SelectedTechStackType>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJobs({ filters: { role: selectedRole } }));
    dispatch(updateFilters({ filters: { role: selectedRole } }));
    console.log('effect triggered');
  }, [
    selectedRole,
    selectedCompany,
    selectedLocation,
    selectedWorkType,
    selectedTechStack,
  ]);

  return (
    <div className={classes.filtersWrapper}>
      <RoleSelect
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
      ></RoleSelect>
      <RoleSelect
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
      ></RoleSelect>
    </div>
  );
};

export default JobSearchFilters;
