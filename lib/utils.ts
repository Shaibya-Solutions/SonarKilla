import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Form {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
}

// const whatsappBaseUrl = "https://wa.me/919610541122";
const whatsappApiUrl = "https://api.whatsapp.com/send?phone=919610541122";

// Functions to send WhatsApp messages
export const sendWhatsappBookingViaLink = (tourTitle?: string) => {
  const message = `I would like to book a tour. Please provide details about the ${
    tourTitle || "tour"
  }.`;
  // const whatsappUrl = `${whatsappBaseUrl}?text=${message}`;
  const whatsappUrl = `${whatsappApiUrl}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};

export const sendWhatsappBookingViaForm = (formData: Form) => {
  if (formData.name === "" && formData.phone === "" && formData.email === "") {
    alert("Please fill at least one field to proceed.");
    return;
  }

  const message = `I would like to book a tour. \n Name: ${
    formData.name
  } \n Email: ${formData.email || "N/A"} \n Phone: ${
    formData.phone || "N/A"
  } \n Message: ${formData.message || "N/A"}`;

  // const whatsappUrl = `${whatsappBaseUrl}?text=${message}`;
  const whatsappUrl = `${whatsappApiUrl}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};
