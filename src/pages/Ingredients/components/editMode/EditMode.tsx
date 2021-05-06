import { Form, Formik } from 'formik';
import React from 'react';
import { FormikInput } from '../../../../components/shared/formikAdapter/FormikInput';
import { InputProps } from '../../../../models/formik';
import { EditIngredientForm } from '../../../../utils/validation-schemas';
import css from './EditMode.module.scss';

interface EditModeProps {
  inputFields: InputProps[];
  isCreateNewIngredient?: boolean;
}
interface IngredientFormValues {
  name: string;
  calories: string;
  picture: string;
  description: string;
}
const defaultValues: IngredientFormValues = {
  name: '',
  calories: '',
  picture: '',
  description: ''
};
const EditMode = ({ inputFields, isCreateNewIngredient }: EditModeProps) => {
  const handleClick = () => {
    isCreateNewIngredient ? 'create' : 'edit';
  };
  return (
    <Formik
      onSubmit={() => {
        1;
      }}
      initialValues={defaultValues}
      validationSchema={EditIngredientForm}
    >
      <Form>
        {inputFields.map(el => (
          <FormikInput type={el.type} name={el.name || ''} label={el.label} />
        ))}
        <div className={css.btnWrapper}>
          <button type='submit' className={css.submitBtn} onClick={handleClick}>
            Submit
          </button>
          <button type='reset' className={css.resetBtn}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default EditMode;
