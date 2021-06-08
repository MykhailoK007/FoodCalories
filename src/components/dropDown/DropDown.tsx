import React from 'react';
import cn from 'classnames';
import styles from './DropDown.module.scss';

interface DropDownProps {
  items: DropDownItem[];
  additionalStyles?: {
    wrapper?: string;
    item?: string;
  };
  closeDropDown(): void;
}

export type DropDownItem = {
  id: number;
  text: string;
  handleClick(): void;
};
export const DropDown = ({ items, additionalStyles, closeDropDown }: DropDownProps) => (
  <div className={cn(styles.dropDownBox, additionalStyles?.wrapper)}>
    {items.map(item => (
      <div
        key={item.id}
        onClick={() => {
          closeDropDown();
          item.handleClick();
        }}
        className={cn(styles.dropDownItem, additionalStyles?.item)}
      >
        {item.text}
      </div>
    ))}
  </div>
);
