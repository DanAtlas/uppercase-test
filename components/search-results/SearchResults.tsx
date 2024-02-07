import React, { type FC } from 'react';
import Card from 'components/card/Card';
import styles from './SearchResults.module.scss';
import type { CardProps } from 'components/card/Card.types';
import type { SearchResultsProps } from './SearchResults.types';

const SearchResults: FC<SearchResultsProps> = (props) => {
  return (
    <div className={styles['search-results']}>
      {props.searchTitle ? (
        <div className={styles['search-results__title']}>
          <p>You searched for: <u>{props.searchTitle}</u></p>
          <span>{props.totalResults} results</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles['search-results__wrapper']}>
        {props.Response === "True" ? (
          <ul className={styles['search-results__list']}>
            {props.Search.map((cardItem: CardProps) => {
              return (
                <Card 
                  key={cardItem.imdbID} 
                  Poster={cardItem.Poster} 
                  Title={cardItem.Title} 
                  Type={cardItem.Type} 
                  Year={cardItem.Year} 
                  imdbID={cardItem.imdbID}
                />
              )
            })}
          </ul>) : (
            <p>No results</p>
          )
        }
      </div>
    </div>
  );
}

export default SearchResults;
