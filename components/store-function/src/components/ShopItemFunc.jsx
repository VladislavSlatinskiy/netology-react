export function ShopItemFunc({ item }) {

    const {brand, title, description, descriptionFull, currency, price} = item;

    const priceFormat = (value) => (value ?? 0).toFixed(2);

    return (
        <div className="main-content">
            <h2>{ brand ?? 'NoBrand' }</h2>
            <h1>{ title ?? 'NoName' }</h1>
            <h3>{ description }</h3>
            <div className="description">{ descriptionFull }</div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{ currency }{ priceFormat(price) }</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
}