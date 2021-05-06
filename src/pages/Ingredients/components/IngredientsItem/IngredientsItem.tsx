import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import externalCss from '../../Ingredients.module.scss';
import css from './IngredientsItem.module.scss';

interface IngredientItemProps {
  handleClickField(value: boolean): void;
}
const IngredientItem = ({ handleClickField }: IngredientItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    handleClickField(false);
  };
  const handleCheck = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  return (
    <div className={externalCss.tableRow} onClick={() => handleClickField(true)}>
      <div className={externalCss.tableRowData} onClick={handleCheck}>
        <label>
          <input type='checkbox' name='ingredients' />
        </label>
      </div>
      <div className={externalCss.tableRowData}>Name</div>
      <div className={externalCss.tableRowData}>Descript </div>
      <div className={externalCss.tableRowData}>Calories/100g</div>
      <div className={externalCss.tableRowData}>
        <button className={css.editBtn} onClick={handleClick}>
          <MdEdit />
        </button>
        <button className={css.removeBtn}>
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  );
};
export default IngredientItem;
