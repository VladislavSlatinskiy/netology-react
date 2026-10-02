import { Component } from 'react';

export class ShopItemClass extends Component {
    priceFormat = (value) => (value ?? 0).toFixed(2);

    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        const {brand, title, description, descriptionFull, currency, price} = this.item;

        return (
            <div className="main-content">
                <h2>{brand ?? 'NoBrand'}</h2>
                <h1>{title ?? 'NoName'}</h1>
                <h3>{description}</h3>
                <div className="description">{descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{currency}{this.priceFormat(price)}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}