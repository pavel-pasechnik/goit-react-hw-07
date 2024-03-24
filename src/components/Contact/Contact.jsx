import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { deleteContact } from '../../redux/contactsOps.js';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import css from './Contact.module.css';

export default function Contact({ name, phone, id }) {
  const dispatch = useDispatch();
  const handlerDelete = idToDelete => {
    dispatch(deleteContact(idToDelete))
      .unwrap()
      .then(() => {
        toast.success('Success');
      })
      .catch(() => {
        toast.error('Error');
      });
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
