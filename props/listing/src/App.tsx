import {ETSY} from "./data/etsy.const.ts";
import {Listing} from "./components/Listing.tsx";
import type {Etsy} from "./interfaces/etsy.interface.ts";

export function App() {
  const items: Etsy[] = ETSY.filter(({ state }: Etsy) => state === 'active')

  return (
      <Listing items={items} />
  )
}