import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import IngredientItem from './components/IngredientsItem/IngredientsItem';
import css from './Ingredients.module.scss';
import Modal from '../../components/modal/Modal';
import ViewMode from './components/viewMode/ViewMode';
import EditMode from './components/editMode/EditMode';
import { InputProps } from '../../models/formik';
import { NewDish } from './components/newDish';
import { getIngredients } from '../../store/actions/ingredient.actions';
import { AppState } from '../../store/store';
import NewIngredient from '../../components/modal/newIngredient';
import { toggleModals } from '../../utils/helpers';

const tableHeadData = ['', 'Name', 'Description', 'Calories/100g', 'Actions'];
const inputFields: InputProps[] = [
  { name: 'name', label: 'Name' },
  { name: 'calories', label: 'Calories/1g' },
  { name: 'image', label: 'Image url' },
  { name: 'description', label: 'Description', type: 'text' }
];

const Ingredient = () => {
  const [newIngredientModal, setNewIngredientModal] = useState(false);
  const dispatch = useDispatch();
  const { ingredients } = useSelector(({ ingredient }: AppState) => ingredient);

  useEffect(() => {
    dispatch(getIngredients.request());
  }, []);

  return (
    <div>
      <header className={css.headerContent}>Ingredients</header>
      <div className={css.contentBody}>
        <header>
          <button className={css.btnGreen} onClick={toggleModals.bind(this, setNewIngredientModal)}>
            + Add new
          </button>
          <button className={css.btnPurple}>+ Add new Dish</button>
        </header>
        <div className={css.table}>
          <div className={cn(css.tableRow, css.tableHeadRow)}>
            {tableHeadData.map(el => (
              <div className={css.tableRowData}>{el}</div>
            ))}
          </div>
          {ingredients.map(({ id, ...props }) => (
            <IngredientItem key={id} id={id} {...props} />
          ))}
        </div>
      </div>
      {newIngredientModal && (
        <NewIngredient mode='new' handleClick={() => toggleModals(setNewIngredientModal)} />
      )}
    </div>
  );
};
export default Ingredient;
