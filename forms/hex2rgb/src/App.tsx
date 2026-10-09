import {type JSX, useState} from 'react'
import './App.css'

const MAX_LENGTH: number = 7;
const INITIAL_COLOR: string = '#ffffff'
const ERROR_COLOR: string = '#ef4444'

function isValidHex(value: string): boolean {
  return /^#([0-9a-fA-F]{6})$/.test(value);
}

function hexToRgb(hex: string): string {
  if (!isValidHex(hex)) {
      return 'Error!';
  }

  const [r, g, b]: [number, number, number] = [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16)
  ]

  return `rgb(${r}, ${g}, ${b})`;
}

export function App(): JSX.Element {
  const [color, setColor] = useState(INITIAL_COLOR);
  const [hex, setHex] = useState(INITIAL_COLOR);

  function handleChange(value: string): void {
    setHex(value);

    if (value.length !== 7) {
        return;
    }

    setColor(value);
  }

  return (
    <div className="form" style={{ backgroundColor: isValidHex(color) ? color : ERROR_COLOR}}>
      <input
        className="form__input"
        name="hexInput"
        type="text"
        value={hex}
        maxLength={MAX_LENGTH}
        onChange={e => handleChange(e.target.value)}
      />

       <div className="form__rgb">{hexToRgb(color)}</div>
    </div>
  )
}