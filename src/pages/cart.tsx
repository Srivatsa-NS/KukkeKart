import { useState, useEffect } from "react";
import ImageGrid from "@/components/ui/ImageGrid";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { cartStore } from "@/store/cartStore";
import { primaryColor } from "@/constants/colors";

function Cart() {
  const [cartItems, setCartItems] = useState(cartStore.getItems());

  useEffect(() => {
    setCartItems(cartStore.getItems());
  }, []);

  const gridItems = cartItems.map((item) => ({
    name: item.name,
    image: item.image,
    price: item.price,
    quantity: `${item.quantity} x ${item.cartQuantity}`,
    category: item.category,
    description: `Quantity in cart: ${item.cartQuantity}`,
    showAddToCart: false,
  }));

  return (
    <div className={`bg-${primaryColor} min-h-screen`}>
      <ScrollAnimation>
        <div className="text-center pt-10 pb-8">
          <p className="common-font text-amber-50 text-6xl">Your Cart</p>
        </div>
      </ScrollAnimation>

      {cartItems.length > 0 ? (
        <ImageGrid bgColor={primaryColor} gridItems={gridItems} />
      ) : (
        <div className="text-center py-20">
          <p className="common-font text-amber-50 text-4xl">
            Your cart is empty
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
