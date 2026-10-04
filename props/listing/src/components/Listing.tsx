import type { JSX } from "react";
import type { Etsy } from "../interfaces/etsy.interface.ts";
import { ListItem } from "./ListItem.tsx";

export function Listing({ items }: { items: Etsy[] }): JSX.Element {
  return (
    <div className="item-list">
        { items.map((item: Etsy) => (
            <ListItem item={item} key={item.listingId} />
        ))}
    </div>
  );
}