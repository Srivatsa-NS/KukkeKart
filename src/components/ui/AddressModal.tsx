import { useState } from "react";
import { primaryColor, secondaryColor } from "@/constants/colors";
import AnimatedModal from "./AnimatedModal";

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (address: AddressData) => void;
  bgColor: string;
}

export interface AddressData {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

function AddressModal({
  isOpen,
  onClose,
  onSubmit,
  bgColor,
}: AddressModalProps) {
  const oppositeColor =
    bgColor === primaryColor ? secondaryColor : primaryColor;
  const [formData, setFormData] = useState<AddressData>({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.addressLine1 &&
    formData.city &&
    formData.state &&
    formData.pincode;

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose}>
      <div
        className={`bg-${oppositeColor} rounded-2xl shadow-2xl max-w-md md:max-w-2xl lg:max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 md:p-6 lg:p-8`}
      >
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2
            className={`headings-font text-xl md:text-2xl lg:text-3xl text-${bgColor}`}
          >
            Delivery Address
          </h2>
          <button
            onClick={onClose}
            className={`text-${bgColor} hover:text-red-600 text-2xl font-bold transition-colors`}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className={`body-font text-sm text-${bgColor} mb-1 block`}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded-lg border border-${bgColor} border-opacity-30 body-font text-${bgColor} bg-transparent focus:outline-none focus:border-opacity-100`}
              />
            </div>

            <div>
              <label className={`body-font text-sm text-${bgColor} mb-1 block`}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded-lg border border-${bgColor} border-opacity-30 body-font text-${bgColor} bg-transparent focus:outline-none focus:border-opacity-100`}
              />
            </div>
          </div>

          <div>
            <label className={`body-font text-sm text-${bgColor} mb-1 block`}>
              Address Line 1 *
            </label>
            <textarea
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
              rows={2}
              className={`w-full p-2 rounded-lg border border-${bgColor} border-opacity-30 body-font text-${bgColor} bg-transparent focus:outline-none focus:border-opacity-100 resize-none`}
            />
          </div>

          <div>
            <label className={`body-font text-sm text-${bgColor} mb-1 block`}>
              Address Line 2
            </label>
            <textarea
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              rows={2}
              className={`w-full p-2 rounded-lg border border-${bgColor} border-opacity-30 body-font text-${bgColor} bg-transparent focus:outline-none focus:border-opacity-100 resize-none`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div>
              <label className={`body-font text-sm text-${bgColor} mb-1 block`}>
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded-lg border border-${bgColor} border-opacity-30 body-font text-${bgColor} bg-transparent focus:outline-none focus:border-opacity-100`}
              />
            </div>

            <div>
              <label className={`body-font text-sm text-${bgColor} mb-1 block`}>
                State *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded-lg border border-${bgColor} border-opacity-30 body-font text-${bgColor} bg-transparent focus:outline-none focus:border-opacity-100`}
              />
            </div>

            <div>
              <label className={`body-font text-sm text-${bgColor} mb-1 block`}>
                Pincode *
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className={`w-full p-2 rounded-lg border border-${bgColor} border-opacity-30 body-font text-${bgColor} bg-transparent focus:outline-none focus:border-opacity-100`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2.5 md:py-3 rounded-xl bg-${bgColor} text-${oppositeColor} body-font text-base md:text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Confirm & Proceed
          </button>
        </form>
      </div>
    </AnimatedModal>
  );
}

export default AddressModal;
