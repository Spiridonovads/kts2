import React from 'react';
import style from './style.module.css';

export type LoaderProps = {
  size?: 's' | 'm' | 'l';

  className?: string;
};

const Loader: React.FC<LoaderProps> = (props) => {
  let preloader_className = props.className
    ? `${style[props.className]} ${style.preloader}`
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

/*import React from 'react';
import style from './style.module.css';

const SizeSImage = require('./images/Size=s.png');
const SizeMImage = require('./images/Size=m.png');
const SizeLImage = require('./images/Size=l.png');

export type LoaderProps = {
  size?: 's' | 'm' | 'l';

  className?: string;
};

const Loader: React.FC<LoaderProps> = (props) => {
  let preloader_className = props.className
    ? `${style[props.className]} ${style.preloader}`
    : `${style.preloader}`;

  return props.size === 'l' ? (
    <img src={SizeLImage} className={preloader_className} />
  ) : props.size === 'm' ? (
    <img src={SizeMImage} className={preloader_className} />
  ) : props.size === 's' ? (
    <img src={SizeSImage} className={preloader_className} />
  ) : (
    <img src={SizeLImage} className={preloader_className} />
  );
};

export default Loader;*/
