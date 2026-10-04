import styles from './Stars.module.css'
import type { JSX } from "react";
import { Star } from "../Star/Star.tsx";

export function Stars({ count }: { count: number }): JSX.Element {
  const stars: number[] = [...Array(5).keys()];

  return (
      <ul className={ styles['card-body-stars'] }>
        {stars.map((index: number): JSX.Element => (
          <Star key={index} filled={index < count} />
        ))}
      </ul>
  );
}
