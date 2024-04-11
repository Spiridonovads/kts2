import React from 'react';
import style from './style.module.css';
import Icon from '../icons/ArrowDownIcon';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, className, disabled, ...props }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    return (
      <div className={`${className} ${style.wrapper}`}>
        <input
          {...props}
          className={style.input}
          type="text"
          placeholder={props.value ? props.value : 'Текст'}
          disabled={!!disabled}
          onChange={handleChange}
        ></input>
        {props.afterSlot && (
          <div className={style.icon}>
            <Icon color="secondary" />
          </div>
        )}
      </div>
    );
  }
);

export default Input;

