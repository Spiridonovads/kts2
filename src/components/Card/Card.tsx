import React from 'react';
import style from './style.module.css';
import Text from '../Text';

export type CardProps = {
  /** Дополнительный classname */
  className?: string;
  /** URL изображения */
  image: string;
  /** Слот над заголовком */
  captionSlot?: React.ReactNode;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Описание карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  contentSlot?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  /** Слот для действия */
  actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, subtitle, className, ...props }) => {
  return (
    <div className={`${className} ${style.wrapper}`} onClick={props.onClick}>
      <img className={style.image} src={props.image} alt='img'/>
      <div className={style.content}>
        {props.captionSlot && (
          <Text tag="span" className="captionSlot">
            {props.captionSlot}
          </Text>
        )}
        <Text tag="h1" className="title">
          {title}
        </Text>
        <Text tag="p" className="subtitle">
          {subtitle}
        </Text>
        <div className={style.footer}>
          {props.contentSlot && (
            <Text tag="span" className="contentSlot">
              {props.contentSlot}
            </Text>
          )}
          {props.actionSlot}
        </div>
      </div>
    </div>
  );
};

export default Card;
