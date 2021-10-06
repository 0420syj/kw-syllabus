import * as formData from '../data';

export const fetchData = (year, semester) => (dispatch, getState) => {
  dispatch(startFetch());
  return (
    fetch(`https://objectstorage.ap-seoul-1.oraclecloud.com/n/cnkvorx1cr2k/b/kw-syllabus/o/${year}-${semester}.json`)
      .then(r => r.json())
      .then(json => {
        dispatch(setData(year, semester, json));
      })
      .catch(err => {
        dispatch(setData(year, semester, []));
      })
      .finally(() => {
        dispatch(endFetch());
      })
  );
}

export const changeYear = (selectedOption) => (dispatch, getState) => {
  const selectedYear = selectedOption.value;
  const selectedYearObject = formData.year.find(i => i.value === selectedYear);
  const { semester } = getState();
  const key = `${selectedYear}-${semester.value}`;

  dispatch(startFetch());
  dispatch(setYear(selectedYearObject));

  if(getState()[key]) {
    dispatch(endFetch());
    return;
  } else {
    return dispatch(fetchData(selectedYear, semester.value));
  }
}

export const setYear = (year) => (
  {
    type: 'SET_YEAR',
    data: year,
  }
);

export const changeSemester = (selectedOption) => (dispatch, getState) => {
  const selectedSemester = selectedOption.value;
  const selectedSemesterObject = formData.semester.find(i => i.value === selectedSemester);
  const { year } = getState();
  const key = `${year.value}-${selectedSemester}`;

  dispatch(startFetch());
  dispatch(setSemester(selectedSemesterObject));

  if(getState()[key]) {
    dispatch(endFetch());
    return;
  } else {
    return dispatch(fetchData(year.value, selectedSemester));
  }
}

export const setSemester = (semester) => (
  {
    type: 'SET_SEMESTER',
    data: semester,
  }
);

export const setCollege = (value) => (
  {
    type: 'SET_COLLEGE',
    data: value,
  }
);

export const setMajor = (value) => (
  {
    type: 'SET_MAJOR',
    data: value,
  }
);

export const setData = (year, semester, data) => (
  {
    type: 'SET_DATA',
    year,
    semester,
    data,
  }
);

export const setTitle = (e) => (
  {
    type: 'SET_TITLE',
    data: e.target.value,
  }
);

export const setProf = (e) => (
  {
    type: 'SET_PROF',
    data: e.target.value,
  }
);

export const startFetch = () => (
  {
    type: 'START_FETCH',
  }
);

export const endFetch = () => (
  {
    type: 'END_FETCH',
  }
);

