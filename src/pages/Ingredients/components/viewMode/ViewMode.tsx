import React from 'react';
import { BiDish } from 'react-icons/bi';
import css from './ViewMode.module.scss';

interface ViewModeProps {
  picture?: string;
}
const ViewMode = ({ picture }: ViewModeProps) => (
  <div>
    <div className={css.avatarWrapper}>{picture ? <img src='' alt='DishPhoto' /> : <BiDish />}</div>
    <div className={css.calories}>
      Calories
      <div className={css.count}>kkal/100g</div>
    </div>
    <div className={css.description}>
      <div className={css.subtitle}>Description</div>
      <div className={css.body}>Description</div>
    </div>
  </div>
);
export default ViewMode;
