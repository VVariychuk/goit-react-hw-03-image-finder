import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.onEsc)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc)
   }

  onEsc = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  onBdpClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }
  render() {
    const { children } = this.props
    return createPortal(
      <div className={s.Overlay}
        onClick={this.onBdpClick}
      >
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    )
  }
};