interface CartItem {
  name: string;
  quantity: string;
  cartQuantity: number;
  price: number;
}

export const sendWhatsAppOrder = (
  cartItems: CartItem[],
  totalItems: number,
  totalAmount: number,
  phoneNumber: string = "+918310670770"
) => {
  let message = "🛒 *New Order from KukkeKart*\n\n";
  message += "📋 *Order Details:*\n";

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Quantity: ${item.cartQuantity}x (${item.quantity})\n`;
    message += `   Price: Rs.${item.price * item.cartQuantity}\n\n`;
  });

  message += `📊 *Order Summary:*\n`;
  message += `Total Items: ${totalItems}\n`;
  message += `Total Amount: Rs.${totalAmount}`;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const whatsappUrl = isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber.replace("+", "")}&text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
