export interface Product {
    id: number;
    productImage: string;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      productImage: "https://picsum.photos/1920/1080?random=7",
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      productImage: "https://picsum.photos/1920/1080?random=8",
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      productImage: "https://picsum.photos/1920/1080?random=9",
      name: 'Phone Standard',
      price: 299,
      description: 'Standard boring phone'
    }
  ];