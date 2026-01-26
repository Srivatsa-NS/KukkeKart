interface CartItem {
  name: string;
  price: number;
  quantity: string;
  category: string;
  image: string | import("next/image").StaticImageData;
  cartQuantity: number;
}

class CartStore {
  private items: CartItem[] = [];

  addItem(item: Omit<CartItem, "cartQuantity">) {
    const existingItem = this.items.find(
      (cartItem) =>
        cartItem.name === item.name && cartItem.quantity === item.quantity
    );

    if (existingItem) {
      existingItem.cartQuantity += 1;
    } else {
      this.items.push({ ...item, cartQuantity: 1 });
    }
  }

  removeItem(itemName: string, itemQuantity?: string) {
    const existingItem = this.items.find(
      (cartItem) =>
        cartItem.name === itemName &&
        (!itemQuantity || cartItem.quantity === itemQuantity)
    );

    if (existingItem) {
      if (existingItem.cartQuantity > 1) {
        existingItem.cartQuantity -= 1;
      } else {
        this.items = this.items.filter(
          (item) =>
            !(item.name === itemName && item.quantity === existingItem.quantity)
        );
      }
    }
  }

  getItemQuantity(itemName: string): number {
    const items = this.items.filter((cartItem) => cartItem.name === itemName);
    return items.reduce((total, item) => total + item.cartQuantity, 0);
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
