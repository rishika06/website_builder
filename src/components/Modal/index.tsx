import React, { ReactNode } from "react";
import "./modal.style.css";

type ModalProps = {
  setOpen: (value: boolean) => void;
  children: ReactNode;
  width: string;
  height: string;
};

function Modal({ setOpen, children, width, height }: ModalProps) {
  return (
    <div className="modal-container">
      <div className="modal" style={{ width: width, height: height }}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          x
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
