import React from 'react';
import Select from 'react-select';
import { major } from '../data';

const MajorSelector = ({ value, onChange }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>학과/전공</span>
      <Select
        options={major}
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

export default MajorSelector;
