import { useState, useEffect } from "react";
import Image from "next/image";
import { primaryColor, secondaryColor } from "@/constants/colors";
import { cartStore } from "@/store/cartStore";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string | import("next/image").StaticImageData;
    price?: number;
    category?: string;
    description?: string;
    keyBenefits?: string[];
  };
  bgColor: string;
  onUpdate: () => void;
}

const weightOptions = [
  { label: "250g", value: "250g", multiplier: 0.25 },
  { label: "500g", value: "500g", multiplier: 0.5 },
  { label: "1kg", value: "1kg", multiplier: 1 },
];

function ProductModal({
  isOpen,
  onClose,
  product,
  bgColor,
  onUpdate,
}: ProductModalProps) {
  const getInitialQuantities = () => {
    const cartItems = cartStore
      .getItems()
      .filter((item) => item.name === product.name);
    const quantities: Record<string, number> = {
      "250g": 0,
      "500g": 0,
      "1kg": 0,
    };
    cartItems.forEach((item) => {
      quantities[item.quantity] = item.cartQuantity;
    });
    return quantities;
  };

  const [quantities, setQuantities] = useState<Record<string, number>>(
    getInitialQuantities()
  );
  const [showBenefits, setShowBenefits] = useState(false);
  const oppositeColor =
    bgColor === primaryColor ? secondaryColor : primaryColor;

  useEffect(() => {
    if (isOpen) {
      setQuantities(getInitialQuantities());
      setShowBenefits(false);
    }
  }, [isOpen, product.name]);

  if (!isOpen) return null;

  const getPrice = (weight: string) => {
    const option = weightOptions.find((opt) => opt.value === weight);
    return Math.round((product.price || 0) * (option?.multiplier || 1));
  };

  const getTotalPrice = () => {
    return Object.entries(quantities).reduce((total, [weight, qty]) => {
      return total + getPrice(weight) * qty;
    }, 0);
  };

  const handleQuantityChange = (weight: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [weight]: Math.max(0, prev[weight] + delta),
    }));
  };

  const handleAddToCart = () => {
    const initialQuantities = getInitialQuantities();
    Object.entries(quantities).forEach(([weight, qty]) => {
      const diff = qty - initialQuantities[weight];
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          cartStore.addItem({
            name: product.name,
            price: getPrice(weight),
            quantity: weight,
            category: product.category || "",
            image: product.image,
          });
        }
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          cartStore.removeItem(product.name, weight);
        }
      }
    });
    onUpdate();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`bg-${oppositeColor} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image Section - 30% */}
          <div className="md:w-[30%] w-full p-6 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-48 md:h-64 object-cover rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Content Section - 70% */}
          <div className="md:w-[70%] w-full p-6 md:p-8">
            {!showBenefits ? (
              <>
                <div className="flex justify-between items-start mb-6">
                  <h2
                    className={`headings-font text-3xl md:text-5xl text-${bgColor}`}
                  >
                    {product.name}
                  </h2>
                  <button
                    onClick={onClose}
                    className={`text-${bgColor} hover:text-red-600 text-2xl font-bold transition-colors`}
                  >
                    ✕
                  </button>
                </div>

                {product.description && (
                  <>
                    <p
                      className={`body-font text-sm md:text-base text-${bgColor} mb-2 opacity-80 leading-relaxed`}
                    >
                      {product.description.length > 100
                        ? `${product.description.substring(0, 100)}...`
                        : product.description}
                    </p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowBenefits(true);
                      }}
                      className={`body-font text-sm md:text-base text-${bgColor} underline hover:opacity-100 opacity-70 transition-opacity mb-6 inline-block`}
                    >
                      Key benefits
                    </a>
                  </>
                )}

                <div className="mb-8">
                  <h3
                    className={`body-font text-xl md:text-2xl text-${bgColor} mb-4`}
                  >
                    Select Quantity
                  </h3>
                  <div className="space-y-4">
                    {weightOptions.map((option) => (
                      <div
                        key={option.value}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 border-${bgColor}`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`body-font text-lg md:text-xl font-semibold text-${bgColor}`}
                          >
                            {option.label}
                          </span>
                          <span
                            className={`body-font text-sm md:text-base text-${bgColor}`}
                          >
                            ₹{getPrice(option.value)}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              handleQuantityChange(option.value, -1)
                            }
                            disabled={quantities[option.value] === 0}
                            className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-${bgColor} text-${oppositeColor} font-bold text-xl
                          hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                            -
                          </button>
                          <span
                            className={`body-font text-lg md:text-xl font-bold text-${bgColor} min-w-[2rem] text-center`}
                          >
                            {quantities[option.value]}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(option.value, 1)
                            }
                            className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-${bgColor} text-${oppositeColor} font-bold text-xl
                          hover:scale-110 transition-transform`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`mb-6 p-4 rounded-xl bg-${bgColor} bg-opacity-10`}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className={`body-font text-lg md:text-xl text-${oppositeColor}`}
                    >
                      Total Price:
                    </span>
                    <span
                      className={`body-font text-2xl md:text-3xl font-bold text-${oppositeColor}`}
                    >
                      ₹{getTotalPrice()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={getTotalPrice() === 0}
                  className={`w-full py-4 rounded-xl bg-${bgColor} text-${oppositeColor} body-font text-lg md:text-xl font-bold
                hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  Add to Cart
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-between items-start mb-6">
                  <h2
                    className={`headings-font text-3xl md:text-5xl text-${bgColor}`}
                  >
                    {product.name}
                  </h2>
                  <button
                    onClick={onClose}
                    className={`text-${bgColor} hover:text-red-600 text-2xl font-bold transition-colors`}
                  >
                    ✕
                  </button>
                </div>

                {product.description && (
                  <p
                    className={`body-font text-sm md:text-base text-${bgColor} mb-6 opacity-80 leading-relaxed`}
                  >
                    {product.description}
                  </p>
                )}

                <h3
                  className={`body-font text-xl md:text-2xl text-${bgColor} mb-4 font-bold`}
                >
                  Key Benefits
                </h3>
                {product.keyBenefits && (
                  <ul
                    className={`body-font text-sm md:text-base text-${bgColor} space-y-3 mb-6 list-none`}
                  >
                    {product.keyBenefits.map((benefit, index) => (
                      <li key={index} className="leading-relaxed">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  onClick={() => setShowBenefits(false)}
                  className={`w-full py-4 rounded-xl bg-${bgColor} text-${oppositeColor} body-font text-lg md:text-xl font-bold
                    hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  Back to Product
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
