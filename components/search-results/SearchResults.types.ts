import type { CardProps } from "components/card/Card.types"

export type SearchResultsProps = {
  searchTitle: string;
  Response: string;
  Search: Array<CardProps>;
  totalResults: string;
}