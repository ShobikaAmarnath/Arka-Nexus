import React, { useState } from "react";
import {
  sendNotificationEmail,
  sendThankYouEmail,
} from "../../../../core/services/email/email.service";
import type {
  ContactFormData,
  ContactFormErrors,
} from "../types/contact.types";
import { validateContactForm } from "../utils/contact.validation";

export const useContactForm = (onSuccess?: () => void) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    designation: "",
    department: "",
    companyName: "",
    companyAddress: "",
    email: "",
    mobile: "",
    services: "",
    otherServices: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // Clear otherServices if services is changed to a non-"Others" value
      if (name === "services" && value !== "Others") {
        updated.otherServices = "";
      }
      return updated;
    });
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementsByName(firstErrorField);
      if (element && element[0]) {
        element[0].scrollIntoView({ behavior: "smooth", block: "center" });
        element[0].focus();
      }
      return;
    }

    setIsSubmitting(true);
    try {
      await sendNotificationEmail(formData);
      await sendThankYouEmail({
        name: formData.name,
        email: formData.email,
        companyName: formData.companyName,
        services:
          formData.services === "Others"
            ? formData.otherServices
            : formData.services,
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onSuccess?.();
      }, 3000);
    } catch {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    showError,
    setFormData,
    handleChange,
    handleSubmit,
  };
};
