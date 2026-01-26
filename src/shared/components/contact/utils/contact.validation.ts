import type {
  ContactFormData,
  ContactFormErrors,
} from "../types/contact.types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;

export const validateContactForm = (
  data: ContactFormData,
): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.designation.trim()) errors.designation = "Designation is required";
  if (!data.companyName.trim()) errors.companyName = "Company name is required";
  if (!data.companyAddress.trim())
    errors.companyAddress = "Company address is required";

  if (!emailRegex.test(data.email))
    errors.email = "Enter a valid email address";

  if (!phoneRegex.test(data.mobile))
    errors.mobile = "Enter a valid 10-digit mobile number";

  if (!data.services) errors.services = "Please select a service";

  if (data.services === "Others" && !data.otherServices.trim())
    errors.otherServices = "Please specify other services";

  return errors;
};
