interface CartItem {
  name: string;
  price: string;
  quantity: string;
  category: string;
  image: any;
  cartQuantity: number;
}

class CartStore {
  private items: CartItem[] = [];

  addItem(item: Omit<CartItem, 'cartQuantity'>) {
    const existingItem = this.items.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
      existingItem.cartQuantity += 1;
    } else {
      this.items.push({ ...item, cartQuantity: 1 });
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.cartQuantity, 0);
  }

  clearCart() {
    this.items = [];
  }
}

export const cartStore = new CartStore();