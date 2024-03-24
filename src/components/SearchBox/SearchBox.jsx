import { changeFilter, selectFilter } from '../../redux/filtersSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosSearch } from 'react-icons/io';
import { useId } from 'react';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const searchBarId = useId();
  const filter = useSelector(selectFilter);
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
        value={filter}
        onChange={handleSearch}
      />
      <IoIosSearch className={css.search} />
    </div>
  );
}
