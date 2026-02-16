import { WHATSAPP_CONFIG } from "@/constants/whatsapp";
import { AddressData } from "@/components/ui/AddressModal";

interface CartItem {
  name: string;
  quantity: string;
  cartQuantity: number;
  price: number;
}

const buildOrderMessage = (
  cartItems: CartItem[],
  totalItems: number,
  totalAmount: number,
  address: AddressData
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

  const addressText = `\n\n*Delivery Address:*\n${address.name}\n${
    address.phone
  }\n${address.addressLine1}${
    address.addressLine2 ? "\n" + address.addressLine2 : ""
  }\n${address.city}, ${address.state} - ${address.pincode}`;

  return `Hi, I would like to place an order:\n\n${items}\n\n*Total Items:* ${totalItems}\n*Total Amount:* ${WHATSAPP_CONFIG.CURRENCY}${totalAmount}${addressText}`;
};

export const getWhatsAppUrl = (message: string, phoneNumber: string): string => {
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const encodedMessage = encodeURIComponent(message);

  return isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
};

export const sendWhatsAppOrder = (
  cartItems: CartItem[],
  totalItems: number,
  totalAmount: number,
  address: AddressData,
  phoneNumber: string = "916362612937"
): void => {
  const message = buildOrderMessage(
    cartItems,
    totalItems,
    totalAmount,
    address
  );
  const url = getWhatsAppUrl(message, phoneNumber);
  window.open(url, "_blank");
};
