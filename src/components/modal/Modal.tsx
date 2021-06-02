import React from 'react';
import cn from 'classnames';
import css from './Modal.module.scss';

interface ModalProps {
  condition?: boolean;
  children?: React.ReactNode;
  handleClick?(): void;
  isViewMode?: boolean;
  isCreateMode?: boolean;
  header?: boolean;
}
const Modal = ({
  condition = false,
  children,
  handleClick,
  isViewMode = true,
  isCreateMode,
  header = true
}: ModalProps) => (
  <div
    className={cn(css.modalWrapper, {
      [css.showModalWrapper]: condition
    })}
  >
    <div className={css.modal}>
      {header && (
        <header className={css.header}>
          <div>
            {isViewMode && 'Ingredient name'}
            {!isViewMode && (!isCreateMode ? 'Edit' : 'New ingredient')}
          </div>
          <button className={css.closeBtn} onClick={handleClick}>
            X
          </button>
        </header>
      )}
      <div className={css.modalBody}>{children}</div>
    </div>
  </div>
);
export default Modal;
