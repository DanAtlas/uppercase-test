import React, { type FC } from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import type { CardProps } from './Card.types';

const Card: FC<CardProps> = ({
  Poster, 
  Title, 
  Type, 
  Year, 
  imdbID
}) => {
  return (
    <li className={styles['card']}>
      <Image 
        src={Poster && Poster === "N/A" ? '/sample-poster.jpg' : `${Poster}`} 
        alt="Poster" 
        width={245} 
        height={270} 
        quality={100}
        objectFit="contain"
        loading="lazy"
        className={styles['card__poster']}
      />
      <div className={styles['card__content']}>
        <p>Name: {Title}</p>
        <p>Year: {Year}</p>
        <p>imdbID: {imdbID}</p>
        <p>Type: {Type}</p>
      </div>
    </li>
  );
}

export default Card;
