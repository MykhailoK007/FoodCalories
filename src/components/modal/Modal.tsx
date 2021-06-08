import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.scss';

interface ModalProps {
  title: string;
  handleClick(): void;
  closeModal(): void;
}
const Modal = ({ title, handleClick, closeModal }: ModalProps) => {
  const modal: HTMLElement | null = document.getElementById('modal-root');
  const div: HTMLDivElement = document.createElement('div');
  useEffect(() => {
    modal!.append(div);
    return () => {
      modal!.removeChild(div);
    };
  }, [div, modal]);
  const Content = () => (
    <div className={css.modalBg}>
      <div className={css.modalWrapper}>
        <div className={css.title}>{title}</div>
        <div className={css.buttonsWrapper}>
          <button onClick={handleClick}>Accept</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(<Content />, modal!);
};
export default Modal;
