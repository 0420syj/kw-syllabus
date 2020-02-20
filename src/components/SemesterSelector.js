import React from 'react';
import Select from 'react-select';
import { semester } from '../data';

const SemesterSelector = ({ value, onChange }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>학기</span>
      <Select
        options={semester}
        value={value}
        onChange={onChange}
        isSearchable={false}
      />
    </div>
  );
}

export default SemesterSelector;
