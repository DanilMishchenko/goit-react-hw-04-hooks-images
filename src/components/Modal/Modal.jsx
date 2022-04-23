import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseOverlay, onCloseButton, children }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseButton();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onCloseButton]);

  return createPortal(
    <Overlay onClick={onCloseOverlay}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
};
