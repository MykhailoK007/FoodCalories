import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import Modal from '../Modal';
import styles from './styles.module.scss';
import { Input } from '../../Input';
import { addIngredient } from '../../../store/actions/ingredient.actions';
import { AddIngredientRequest } from '../../../api/ingredient/types';
import { FormikInput } from '../../formikAdapter/FormikInput';

interface INewIngredient {
  handleClick: () => void;
  mode: 'edit' | 'new';
  id?: string;
}

const defaultValues: AddIngredientRequest = {
  name: '',
  caloriesPer1g: 0,
  picture: '',
  description: ''
};
const NewIngredient = ({ handleClick, mode, id }: INewIngredient) => {
  const title = mode === 'new' ? 'New Ingredient' : 'Edit ingredient';
  const dispatch = useDispatch();
  return (
    <Modal title={title} closeModal={handleClick}>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => {
          dispatch(addIngredient.request({ ...values, id, mode }));
          handleClick();
        }}
      >
        <Form>
          <div className={styles.body}>
            <FormikInput label='Name' type='text' name='name' />
            <FormikInput label='Calories/1g' type='number' name='caloriesPer1g' />
            <FormikInput label='image' type='text' name='picture' />
            <FormikInput label='description' type='text' name='description' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </Modal>
  );
};
export default NewIngredient;
