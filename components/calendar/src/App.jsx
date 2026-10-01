import './App.css'
import {Calendar} from "./components/Calendar.jsx";

export function App() {
  const now = new Date(2026, 9, 2);

  return (
      <Calendar date={now} />
  )
}
