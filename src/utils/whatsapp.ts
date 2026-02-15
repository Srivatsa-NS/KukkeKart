import { WHATSAPP_CONFIG } from "@/constants/whatsapp";

interface CartItem {
  name: string;
  quantity: string;
  cartQuantity: number;
  price: number;
}

const buildOrderMessage = (
  cartItems: CartItem[],
  totalItems: number,
  totalAmount: number
): string => {
  const items = cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name}\n   Quantity: ${item.cartQuantity}x (${
          item.quantity
        })\n   Price: ${WHATSAPP_CONFIG.CURRENCY}${
          item.price * item.cartQuantity
        }`
    )
    .join("\n\n");

  return `🛒 *New Order from ${WHATSAPP_CONFIG.BUSINESS_NAME}*\n\n📋 *Order Details:*\n${items}\n\n📊 *Order Summary:*\nTotal Items: ${totalItems}\nTotal Amount: ${WHATSAPP_CONFIG.CURRENCY}${totalAmount}`;
};

const getWhatsAppUrl = (message: string, phoneNumber: string): string => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const encodedMessage = encodeURIComponent(message);

  return isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber.replace(
        "+",
        ""
      )}&text=${encodedMessage}`;
};

export const sendWhatsAppOrder = (
  cartItems: CartItem[],
  totalItems: number,
  totalAmount: number,
  phoneNumber: string = WHATSAPP_CONFIG.PHONE_NUMBER
): void => {
  const message = buildOrderMessage(cartItems, totalItems, totalAmount);
  const url = getWhatsAppUrl(message, phoneNumber);
  window.open(url, "_blank");
};
