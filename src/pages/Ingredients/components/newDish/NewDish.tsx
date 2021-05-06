import { Form, Formik } from 'formik';
import React from 'react';
import { NewDishForm } from '../../../../utils/validation-schemas';
import css from './NewDish.module.scss';

interface NewDishProps {
  hideModal(): void;
}
interface NewDishFormValues {
  name: string;
  weight: number;
}
const defaultValues: NewDishFormValues = {
  name: '',
  weight: 0
};

export const NewDish = ({ hideModal }: NewDishProps) => (
  <div>
    <header className={css.header}>
      <div className={css.title}>Create new dish</div>
      <button className={css.closeBtn} onClick={hideModal}>
        X
      </button>
    </header>
    <div className={css.modalBody}>List is empty</div>
    <Formik
      onSubmit={() => {
        1;
      }}
      initialValues={defaultValues}
      validationSchema={NewDishForm}
    >
      <Form>
        <div>
          <select name='name' className={css.select}>
            <option value=''>''</option>
          </select>
          <input type='number' name='weight' />
        </div>
        <button type='submit' className={css.btnGreen}>
          Add
        </button>
      </Form>
    </Formik>
  </div>
);
