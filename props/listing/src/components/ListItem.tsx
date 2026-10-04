import type {Etsy} from "../interfaces/etsy.interface.ts";
import type { JSX } from "react";

export function ListItem({ item }: { item: Etsy }): JSX.Element {
    const getQuantityClass: (qty: number) => string =
        (qty: number): string => qty < 10 ? 'low' : (qty < 20 ? 'medium' : 'high');

    return (
      <div className="item">
        <div className="item-image">
          <a href={ item.url }>
            <img src={ item.mainImage?.url570xN } alt={item.url} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{ item.title }</p>
          <p className="item-price">{item.currencyCode}{item.price}</p>
          <p className={`item-quantity level-${getQuantityClass(item.quantity)}`}>{item.quantity} left</p>
        </div>
      </div>
    );
}
