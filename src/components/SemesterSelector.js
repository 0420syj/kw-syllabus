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
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#ededed',
            primary: 'maroon',
          },
        })}
      />
    </div>
  );
}

export default SemesterSelector;
