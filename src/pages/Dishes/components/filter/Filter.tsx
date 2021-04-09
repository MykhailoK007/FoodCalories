import React, { useState } from 'react';
import { BsFilterRight } from 'react-icons/bs';
import cn from 'classnames';
import css from './Filter.module.scss';

interface FilterProps {
  fields: string[];
}
export const Filter = ({ fields }: FilterProps) => {
  const [toggleTooltip, setToggleTooltip] = useState<boolean>(false);
  const handleClick = () => setToggleTooltip(prev => !prev);
  return (
    <nav
      className={cn(css.filterWrapper, {
        [css.showTooltip]: toggleTooltip
      })}
    >
      <div className={css.filterButton} onClick={handleClick}>
        <BsFilterRight />
      </div>
      <button className={css.hidePopUpBtn}>X</button>
      <ul>
        <li>Sort by:</li>
        {fields.map((el: string, index: number) => (
          <li key={el}>
            <label>
              {index === 0 ? (
                <input type='radio' name='nav' defaultChecked />
              ) : (
                <input type='radio' name='nav' />
              )}
              <span onClick={handleClick}>{el}</span>
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
};
