import React from 'react';
import style from './style.module.css';

export type LoaderProps = {
  size?: 's' | 'm' | 'l';
  className?: string;
};

const Loader: React.FC<LoaderProps> = (props) => {
  let preloader_className = props.className
    ? `${style[props.className]}`
    : `${style.preloader}`;

  return props.size === 'l' ? (
    <img className={preloader_className} src="./images/Size=l.png" />
  ) : props.size === 'm' ? (
    <img className={preloader_className} src="./images/Size=m.png" />
  ) : props.size === 's' ? (
    <img className={preloader_className} src="./images/Size=s.png" />
  ) : (
    <img className={preloader_className} src="./images/Size=l.png" />
  );
};

export default Loader;
