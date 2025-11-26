import { cartStore } from "@/store/cartStore";

interface QuantityControlsProps {
  itemName: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  onUpdate: () => void;
  size?: 'small' | 'normal';
  item?: {
    name: string;
    price: number;
    quantity: string;
    category: string;
    image: string | import('next/image').StaticImageData;
  };
}

function QuantityControls({ 
  itemName, 
  bgColor, 
  textColor, 
  borderColor, 
  onUpdate, 
  size = 'normal',
  item 
}: QuantityControlsProps) {
  const quantity = cartStore.getItemQuantity(itemName);
  
  const buttonSize = size === 'small' ? 'w-8 h-8' : 'w-10 h-10';
  const textSize = size === 'small' ? 'text-lg' : 'text-xl';
  const quantityTextSize = size === 'small' ? 'text-lg' : 'text-xl';
  const minWidth = size === 'small' ? 'min-w-[32px]' : 'min-w-[40px]';
  const gap = size === 'small' ? 'gap-2' : 'gap-3';
  console.log("item name", itemName);
  console.log("quantity", quantity);

  const handleAdd = () => {
    if (item) {
      cartStore.addItem(item);
      onUpdate();
    }
  };

  const handleRemove = () => {
    cartStore.removeItem(itemName);
    onUpdate();
  };

  return (
    <div className={`flex items-center ${gap}`}>
      <button
        className={`${buttonSize} rounded-xl border-2 bg-${bgColor} text-${borderColor} border-${borderColor} font-bold ${textSize} shadow-lg cursor-pointer`}
        onClick={handleRemove}
      >
        −
      </button>
      <span className={`font-semibold ${quantityTextSize} ${minWidth} text-center text-${textColor}`}>
        {quantity}
      </span>
      <button
        className={`${buttonSize} rounded-xl border-2 bg-${bgColor} text-${borderColor} border-${borderColor} font-bold ${textSize} shadow-lg cursor-pointer`}
        onClick={handleAdd}
      >
        +
      </button>
    </div>
  );
}

export default QuantityControls;