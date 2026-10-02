import './ShopCard.css'

export function ShopCard({card}) {
    const {name, price, color, img, currency} = card

    return (
        <div className="shop-card">
            <h3 className="shop-card__title">{name}</h3>
            <p className="shop-card__color">{color}</p>
            <div className="shop-card__image">
                <img src={img} alt=""/>
            </div>
            <div className="shop-card__footer">
                <span className="shop-card__price">{currency}{price}</span>
                <button className="shop-card__btn">ADD TO CART</button>
            </div>
        </div>
    )
}
