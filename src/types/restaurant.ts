export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'combos' | 'grill' | 'rice';
  price: string;
  rawPrice?: number;
  image: string;
  isPopular?: boolean;
  isSignature?: boolean;
  portionOptions?: { name: string; price: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  aspectClass?: string;
}

export interface OrderDetails {
  item: MenuItem;
  portion?: string;
  quantity: number;
  orderType: 'Dine-in' | 'Takeaway' | 'Home Delivery';
  notes: string;
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date: string;
  text: string;
  dishRecommended?: string;
  tag: 'Shawaya & Rice' | 'Al Faham' | 'Family Dine-in' | 'Takeaway & Delivery';
  verified?: boolean;
}
