import './CardsView.css'
import {ShopCard} from "../ShopCard/ShopCard.jsx";

export function CardsView({cards}) {
    return (
        <div className="cards-view">
            {cards.map(card => (
                <ShopCard key={card.id} card={card}/>
            ))}
        </div>
    )
}
