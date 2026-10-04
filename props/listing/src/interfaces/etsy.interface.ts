export interface Etsy {
    listingId: number;
    url: string;
    mainImage: { url570xN: string };
    title: string;
    currencyCode: string;
    price: string;
    quantity: number;
    state: 'active' | 'removed';
}