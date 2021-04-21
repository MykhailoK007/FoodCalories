import React from 'react';
import { CgHeart } from 'react-icons/cg';
import css from './Dish.module.scss';

interface DishProps {
  caloryPerHundred: number;
  image: string;
  title: string;
  description: string;
}
export const Dish = ({ caloryPerHundred, image, title, description }: DishProps) => (
  <div className={css.dishWrapper}>
    <header>
      <span className={css.caloryWrapper}>{caloryPerHundred}kkal/100g</span>
      <div className={css.heartWrapper}>
        <CgHeart />
      </div>
    </header>
    <div className={css.imageWrapper}>
      {image ? <img src={image} alt={title} /> : <span>No image</span>}
    </div>
    <div className={css.title}>{title}</div>
    <div className={css.description}>{description}</div>
  </div>
);
