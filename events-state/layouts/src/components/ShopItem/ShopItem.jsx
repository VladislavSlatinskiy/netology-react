import './ShopItem.css'

export function ShopItem({item}) {
    const {name, price, color, img, currency} = item

    return (
        <div className="shop-item">
            <img src={img} alt=""/>

            <h3 className="shop-item__title">{name}</h3>
            <p className="shop-item__color">{color}</p>

            <span className="shop-item__price">{currency}{price}</span>
            <button className="shop-item__btn">ADD TO CART</button>
        </div>
    )
}
