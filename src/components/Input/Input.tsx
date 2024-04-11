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
    return (
      <input
        {...props}
          className={style.input}
          type="text"
          placeholder={props.value}
          disabled={!!disabled}
        ></input>
    )
  }
);

export default Input;

/*props.afterSlot ? (
      <div className={style.wrapper}>
        <input
        {...props}
          className={style.input}
          type="text"
          placeholder={props.value}
          disabled={!!disabled}
        ></input>
        <div className={style.icon}>
          <Icon color="secondary" />
        </div>
      </div>
    ) : (
      <div className={style.wrapper}>
        <input
          className={style.input}
          type="text"
          value={props.value}
          placeholder="Текст"
          disabled={!!disabled}
        ></input>
      </div>
    ); */