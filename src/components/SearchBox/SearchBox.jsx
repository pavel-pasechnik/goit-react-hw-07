import { useDispatch, useSelector } from 'react-redux';
import { IoIosSearch } from 'react-icons/io';
import { useId } from 'react';

import { changeFilter } from '../../redux/filtersSlice.js';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const searchBarId = useId();
  const selectNameFilter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.find}>
      <label htmlFor={searchBarId}>Find contact by name</label>
      <input
        className={css.input}
        type='text'
        name='searchBar'
        id={searchBarId}
        value={selectNameFilter}
        onChange={handleSearch}
      />
      <IoIosSearch className={css.search} />
    </div>
  );
}
