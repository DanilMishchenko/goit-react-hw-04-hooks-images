import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseButton();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.props.onCloseOverlay}>
        <ModalContainer>{this.props.children}</ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}
