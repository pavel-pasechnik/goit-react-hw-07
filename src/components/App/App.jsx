import { selectError, selectLoading } from '../../redux/contactsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../../redux/contactsOps.js';
import { useEffect } from 'react';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p className={css.error}>Something went wrong. Please reload the page!</p>}
      {loading ? <p>Loading...</p> : <ContactList />}

      <Toaster />
    </div>
  );
}
