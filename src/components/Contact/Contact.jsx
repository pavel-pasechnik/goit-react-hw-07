import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice.js';

import css from './Contact.module.css';

export default function Contact({ name, phone, id }) {
  const dispatch = useDispatch();
  const handlerDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.name}>
          <IoPersonSharp />
          <p>{name}</p>
        </div>
        <div className={css.phone}>
          <FaPhoneAlt />
          <p>{phone}</p>
        </div>
      </div>
      <button className={css.button} type='button' id={id} onClick={() => handlerDelete(id)}>
        Delete
      </button>
    </>
  );
}
