import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import BrownButton from "@/components/ui/BrownButton";
import { cartStore } from "@/store/cartStore";
import { primaryColor, secondaryColor } from "@/constants/colors";
import { sendWhatsAppOrder } from "@/utils/whatsapp";

function Cart() {
  const [cartItems, setCartItems] = useState(cartStore.getItems());
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    setCartItems(cartStore.getItems());
  }, [updateTrigger]);

  // Group items by product name
  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = {
        name: item.name,
        image: item.image,
        category: item.category,
        weights: [],
        totalPrice: 0,
      };
    }
    acc[item.name].weights.push({
      quantity: item.quantity,
      cartQuantity: item.cartQuantity,
      price: item.price,
    });
    acc[item.name].totalPrice += item.price * item.cartQuantity;
    return acc;
  }, {} as Record<string, { name: string; image: string | import("next/image").StaticImageData; category: string; weights: Array<{ quantity: string; cartQuantity: number; price: number }>; totalPrice: number }>);

  const groupedItemsArray = Object.values(groupedItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  const handleCheckout = () => {
    sendWhatsAppOrder(cartItems, totalItems, totalAmount);
  };

  return (
    <div className={`bg-${primaryColor} min-h-screen`}>
      <ScrollAnimation>
        <div className="text-center pt-10 pb-8">
          <p className="headings-font text-amber-50 text-6xl">Your Cart</p>
        </div>
      </ScrollAnimation>

      {groupedItemsArray.length > 0 ? (
        <div className="px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            {groupedItemsArray.map((item) => (
              <ScrollAnimation key={item.name}>
                <div
                  className={`flex items-center bg-${secondaryColor} rounded-2xl p-6 mb-4 shadow-lg border-2 border-${primaryColor} transform hover:scale-[1.02] transition-all duration-300`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="flex-1 ml-6">
                    <h3
                      className={`text-2xl font-bold text-${primaryColor} headings-font`}
                    >
                      {item.name}
                    </h3>
                    <p className={`text-${primaryColor} opacity-75 text-sm font-semibold`}>
                      {item.weights.map((w, idx) => (
                        <span key={idx}>
                          {w.quantity} x {w.cartQuantity}
                          {idx < item.weights.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="ml-6 text-right w-32">
                    <p className={`text-2xl font-bold text-${primaryColor}`}>
                      ₹{item.totalPrice}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}

            <ScrollAnimation>
              <div
                className={`bg-${secondaryColor} rounded-2xl p-8 mt-8 shadow-xl border-3 border-${primaryColor}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-2xl font-bold text-${primaryColor}`}>
                    Total Items:
                  </span>
                  <span className={`text-2xl font-bold text-${primaryColor}`}>
                    {totalItems}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-3xl font-bold text-${primaryColor}`}>
                    Total Amount:
                  </span>
                  <span className={`text-4xl font-bold text-${primaryColor}`}>
                    ₹{totalAmount}
                  </span>
                </div>
                <div className="w-full" onClick={handleCheckout}>
                  <BrownButton name="Proceed to Checkout" textSize="4xl" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      ) : (
        <ScrollAnimation>
          <div className="text-center py-20">
            <div className="text-8xl mb-8">🛒</div>
            <p className="headings-font text-amber-50 text-4xl mb-4">
              Your cart is empty
            </p>
            <p className="text-amber-50 text-xl opacity-75">
              Add some delicious items to get started!
            </p>
          </div>
        </ScrollAnimation>
      )}
    </div>
  );
}

export default Cart;
