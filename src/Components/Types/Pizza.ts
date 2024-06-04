export interface Pizza {
    id: string;
    name: string;
    new: boolean;
    vegetarian: boolean;
    spicy: boolean;
    level: number;
    popular: boolean;
    categories: string;
    composition: string;
    img: string;
    "weight-small": string;
    "price-small": number;
    "weight-average": string;
    "price-average": number;
    "weight-big": string;
    "price-big": number;
    "weight-mega": string;
    "price-mega": number;
    weight: string;
    price: number;
  }