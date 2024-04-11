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
  ...props
}) => {
  return loading && props.disabled ? (
    <button
      {...props}
      className={`${style.button} ${className} ${style.loading} ${style.disabled}`}
      disabled
    >
      <Loader size="s" color="#FFFFFF" />
      {children}
    </button>
  ) : props.disabled ? (
    <button
      {...props}
      className={`${style.button} ${style.disabled} ${style.default} ${className}`}
    >
      {children}
    </button>
  ) : loading ? (
    <button
      {...props}
      className={`${style.button} ${className} ${style.loading}`}
      disabled
    >
      <Loader size="s" color="#FFFFFF" />
      {children}
    </button>
  ) : (
    <button
      {...props}
      className={`${style.button}  ${style.default} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
