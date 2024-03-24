import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addContact } from '../../redux/contactsOps.js';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useId } from 'react';

import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value))
      .unwrap()
      .then(() => {
        toast.success('Success');
      })
      .catch(() => {
        toast.error('Error');
      });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
        <Form>
          <label htmlFor={nameId}>Name</label>
          <Field type='text' name='name' id={nameId}></Field>
          <span className={css.name}>
            <ErrorMessage name='name' as='span' />
          </span>
          <label htmlFor={numberId}>Number</label>
          <Field type='text' name='number' id={numberId}></Field>
          <span className={css.number}>
            <ErrorMessage name='number' as='span' />
          </span>
          <button className={css.submit} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
