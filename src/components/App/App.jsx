import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
