import * as React from 'react';
import reactDom from 'react-dom';
import Button from './Button';
import Card from './Card';

const modalPortal = document.getElementById('modal-portal');

const Modal = ({ children, onClose, ...props }) =>
  reactDom.createPortal(
    <div
      className="absolute inset-0 grid justify-center items-center bg-black/40 p-5"
      {...props}
    >
      <Card className="relative w-full sm:w-[800px] min-h-max bg-white">
        <Button
          color="danger"
          className="absolute -top-5 -right-5 w-10"
          onClick={onClose}
        >
          X
        </Button>
        {children}
      </Card>
    </div>,
    modalPortal
  );

const ModalHeader = ({ children, ...props }) => (
  <header className="p-4 border-black border-b-4" {...props}>
    {children}
  </header>
);

const ModalBody = ({ children, ...props }) => (
  <main className="p-4" {...props}>
    {children}
  </main>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
