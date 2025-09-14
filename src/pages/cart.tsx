import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import QuantityControls from "@/components/ui/QuantityControls";
import BrownButton from "@/components/ui/BrownButton";
import { cartStore } from "@/store/cartStore";
import { primaryColor, secondaryColor } from "@/constants/colors";

function Cart() {
  const [cartItems, setCartItems] = useState(cartStore.getItems());

  useEffect(() => {
    setCartItems(cartStore.getItems());
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  const forceUpdate = () => setCartItems(cartStore.getItems());

  return (
    <div className={`bg-${primaryColor} min-h-screen`}>
      <ScrollAnimation>
        <div className="text-center pt-10 pb-8">
          <p className="common-font text-amber-50 text-6xl">Your Cart</p>
        </div>
      </ScrollAnimation>

      {cartItems.length > 0 ? (
        <div className="px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            {cartItems.map((item, index) => (
              <ScrollAnimation key={item.name}>
                <div
                  className={`flex items-center bg-${secondaryColor} rounded-2xl p-6 mb-4 shadow-lg border-2 border-${primaryColor} transform hover:scale-[1.02] transition-all duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md"
                  />
                  <div className="flex-1 ml-6">
                    <h3
                      className={`text-2xl font-bold text-${primaryColor} common-font`}
                    >
                      {item.name}
                    </h3>
                    <p className={`text-${primaryColor} opacity-75`}>
                      {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-40">
                    <QuantityControls
                      itemName={item.name}
                      bgColor={primaryColor}
                      textColor={primaryColor}
                      borderColor={secondaryColor}
                      size="small"
                      onUpdate={forceUpdate}
                      item={{
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        category: item.category,
                        image: item.image,
                      }}
                    />
                  </div>
                  <div className="ml-6 text-right w-32">
                    <p className={`text-2xl font-bold text-${primaryColor}`}>
                      ₹{item.price * item.cartQuantity}
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
                <div className="w-full">
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
            <p className="common-font text-amber-50 text-4xl mb-4">
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
