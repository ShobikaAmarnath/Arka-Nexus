import emailjs from "emailjs-com";
import { emailConfig } from "../../config/email.config";
import type { ContactFormData } from "./email.types";

export const sendThankYouEmail = async (data: {
  name: string;
  email: string;
  companyName: string;
  services: string;
}) => {
  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.thankYouTemplateId,
    {
      to_name: data.name,
      email: data.email,
      company_name: data.companyName,
      services: data.services,
      from_name: "ARKA NEXUS",
    },
    emailConfig.publicKey,
  );
};

export const sendNotificationEmail = async (data: ContactFormData) => {
  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.notificationTemplateId,
    {
      customer_name: data.name,
      customer_designation: data.designation,
      customer_department: data.department || "Not specified",
      company_name: data.companyName,
      company_address: data.companyAddress,
      customer_email: data.email,
      mobile: data.mobile,
      services: data.services === "Others" ? data.otherServices : data.services,
      additional_message: data.message || "No additional message",
      gmail: "service@arkaxus.com",
    },
    emailConfig.publicKey,
  );
};
