import React from 'react';
import style from './style.module.css';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <>
      {props.checked && !props.disabled ? (
        <label className={style.checkboxChecked}>
          <input type="checkbox" onChange={handleChange} {...props} />
        </label>
      ) : props.checked && props.disabled ? (
        <label className={style.checkboxDisabledChecked}>
          <input type="checkbox" onChange={handleChange} {...props} />
        </label>
      ) : !props.checked && props.disabled ? (
        <label className={style.checkboxDisabled}>
          <input type="checkbox" onChange={handleChange} {...props} />
        </label>
      ) : (
        <label className={style.checkbox}>
          <input type="checkbox" onChange={handleChange} {...props} />
        </label>
      )}
    </>
  );
};

export default CheckBox;
