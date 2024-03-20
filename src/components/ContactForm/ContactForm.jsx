import { useId } from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';
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
    dispatch(addContact(value));
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
