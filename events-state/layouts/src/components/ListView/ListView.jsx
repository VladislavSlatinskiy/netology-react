import './ListView.css'
import {ShopItem} from "../ShopItem/ShopItem.jsx";

export function ListView({items}) {
    return (
        <div className="list-view">
            {items.map((item) => (
                <ShopItem key={item.id} item={item}/>
            ))}
        </div>
    )
}
