import React from "react";

import s from './Button.module.css'

const Button = ({ onBtnClick, text }) => (
  <button type="button"
    onClick={onBtnClick}
    className={s.Button}
  >
    {text}
  </button>
)

export default Button