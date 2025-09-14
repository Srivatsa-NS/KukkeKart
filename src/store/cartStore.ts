interface CartItem {
  name: string;
  price: number;
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

  removeItem(itemName: string) {
    const existingItem = this.items.find(cartItem => cartItem.name === itemName);
    
    if (existingItem) {
      if (existingItem.cartQuantity > 1) {
        existingItem.cartQuantity -= 1;
      } else {
        this.items = this.items.filter(item => item.name !== itemName);
      }
    }
  }

  getItemQuantity(itemName: string): number {
    const item = this.items.find(cartItem => cartItem.name === itemName);
    return item ? item.cartQuantity : 0;
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