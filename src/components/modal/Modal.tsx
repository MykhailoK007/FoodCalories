import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.scss';

interface ModalProps {
  title: string;
  closeModal(): void;
  children: React.ReactNode;
}
const Modal = ({ title, closeModal, children }: ModalProps) => {
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
        {children}
        <div className={css.buttonsWrapper}>
          {/* <button onClick={handleClick}>Accept</button> */}
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(<Content />, modal!);
};
export default Modal;
