import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import externalCss from '../../Ingredients.module.scss';
import css from './IngredientsItem.module.scss';
import { removeIngredient } from '../../../../store/actions/ingredient.actions';
import NewIngredient from '../../../../components/modal/newIngredient';
import { toggleModals } from '../../../../utils/helpers';

interface IngredientItemProps {
  id: string;
  name: string;
  description: string;
  caloriesPer1g: number;
}
const IngredientItem = ({ id, name, description, caloriesPer1g }: IngredientItemProps) => {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const handleRemoveBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(removeIngredient.request(id));
  };
  const handleCheck = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  return (
    <div className={externalCss.tableRow}>
      <div className={externalCss.tableRowData} onClick={handleCheck}>
        <label>
          <input type='checkbox' name='ingredients' />
        </label>
      </div>
      <div className={externalCss.tableRowData}>{name}</div>
      <div className={externalCss.tableRowData}>{description} </div>
      <div className={externalCss.tableRowData}>{caloriesPer1g}</div>
      <div className={externalCss.tableRowData}>
        <button className={css.editBtn} onClick={() => toggleModals(setEditModal)}>
          <MdEdit />
        </button>
        <button className={css.removeBtn} onClick={handleRemoveBtn}>
          <RiDeleteBin6Fill />
        </button>
      </div>
      {editModal && (
        <NewIngredient mode='edit' id={id} handleClick={() => toggleModals(setEditModal)} />
      )}
    </div>
  );
};
export default IngredientItem;
