import * as React from 'react';
import style from './style.module.css';

export type TextProps = {
  /** Дополнительный класс */
  className?: string;
  /** Стиль отображения */
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  /** Html-тег */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  /** Начертание шрифта */
  weight?: 'normal' | 'medium' | 'bold';
  /** Контент */
  children: React.ReactNode;
  /** Цвет */
  color?: 'primary' | 'secondary' | 'accent';
  /** Максимальное кол-во строк */
  maxLines?: number;
};

const Text: React.FC<TextProps> = (props) => {
  let className = props.className ? `${style[props.className]}` : ``;
  let view_className = props.view ? `${style[props.view]}` : ``;
  let weight_className = props.weight ? `${style[props.weight]}` : ``;
  let color_className = props.color ? `${style[props.color]}` : ``;
  let maxLines_className = props.maxLines ? `${style[props.maxLines]}` : ``;

  if (props.tag === 'h1') {
    return (
      <h1
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </h1>
    );
  } else if (props.tag === 'h2') {
    return (
      <h2
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </h2>
    );
  } else if (props.tag === 'h3') {
    return (
      <h3
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </h3>
    );
  } else if (props.tag === 'h4') {
    return (
      <h4
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </h4>
    );
  } else if (props.tag === 'h5') {
    return (
      <h5
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </h5>
    );
  } else if (props.tag === 'h6') {
    return (
      <h6
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </h6>
    );
  } else if (props.tag === 'div') {
    return (
      <div
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </div>
    );
  } else if (props.tag === 'span') {
    return (
      <span
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </span>
    );
  } else {
    return (
      <p
        className={`${className} ${view_className} ${weight_className} ${color_className} ${maxLines_className}`}
      >
        {props.children}
      </p>
    );
  }
};

export default Text;
