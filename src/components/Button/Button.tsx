import React from 'react';
import style from './style.module.css';
import Loader from '../Loader';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  loading,
  children,
  className,
  disabled,
  ...props
}) => {
  return loading && disabled ? (
    <button
      {...props}
      className={`${className} ${style.button} ${style.loading} ${style.disabled}`}
      disabled={true}
    >
      <Loader size="s" color="#FFFFFF" />
      {children}
    </button>
  ) : disabled ? (
    <button
      {...props}
      className={`${className} ${style.button} ${style.disabled} ${style.default}`}
      disabled={true}
    >
      {children}
    </button>
  ) : loading ? (
    <button
      {...props}
      className={`${style.button} ${className} ${style.loading}`}
      disabled={true}
    >
      <Loader size="s" color="#FFFFFF" />
      {children}
    </button>
  ) : (
    <button
      {...props}
      className={`${style.button}  ${style.default} ${className} ${style.animation}`}
    >
      {children}
    </button>
  );
};

export default Button;
