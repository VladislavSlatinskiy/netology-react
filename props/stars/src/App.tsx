import type { JSX } from 'react';
import { Stars } from "./components/Stars/Stars.tsx";
import './App.css'

const RATING: number = 4

export function App(): JSX.Element {
  return (
    <Stars count={RATING}></Stars>
  )
}
