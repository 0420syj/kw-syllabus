import React from 'react';
import Select from 'react-select';
import { college } from '../data';

const CollegeSelector = ({ value, onChange }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>공통과목</span>
      <Select
        options={college}
        value={value}
        onChange={onChange}
        isSearchable={false}
      />
    </div>
  );
}

export default CollegeSelector;
