import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  sendNotificationEmail,
  sendThankYouEmail,
} from "../../../core/services/email/email.service";

const serviceOptions = [
  "Energy Audit",
  "Power Quality Audit",
  "Harmonic Audit",
  "Solar Plant Audit",
  "Thermal Study",
  "Vibration Study",
  "Industrial Safety Audit",
  "Industrial Training Program",
  "Others",
];

type Props = {
  onSuccess?: () => void;
};

const ContactForm = ({ onSuccess }: Props) => {
  const [formData, setFormData] = useState({
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

  const [showOtherServices, setShowOtherServices] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "services") {
      setShowOtherServices(value === "Others");
      if (value !== "Others") {
        setFormData((prev) => ({ ...prev, otherServices: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch (err) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper for required labels
  const labelStyle = "font-semibold text-gray-700 text-[15px] tracking-tight after:content-['*'] after:ml-1 after:text-red-600 after:font-bold";
  const optionalLabelStyle = "font-semibold text-gray-700 text-[15px] tracking-tight";

  const inputStyle = "px-4 py-2 border-2 border-gray-200 rounded-xl text-[15px] transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-gray-300 bg-white text-gray-800 leading-relaxed";

  return (
    <div className="relative w-full">

      {/* Success Notification Tooltip */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-3 bg-green-600 text-neutral-white px-6 py-3 rounded-full shadow-2xl border border-green-500"
          >
            <div className="bg-white rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-bold tracking-tight">Request Submitted Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Notification Tooltip */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-3 bg-red-600 text-neutral-white px-6 py-3 rounded-full shadow-2xl border border-red-500"
          >
            <div className="bg-white rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <span className="font-bold tracking-tight">Failed to submit. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form className={`flex flex-col gap-7 w-full transition-opacity duration-300 ${showSuccess ? 'opacity-30 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
        {/* Form Header Area */}
        <div className="relative overflow-hidden p-6 rounded-xl text-center text-brand-primary mb-2">
          {/* Shimmer Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
          <h1 className="relative z-10 text-2xl md:text-3xl font-bold tracking-tight">
            Get In Touch With Our Engineering Experts
          </h1>
        </div>

        {/* Row 1: Name & Designation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelStyle}>Name</label>
            <input type="text" id="name" name="name" className={inputStyle} value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="designation" className={labelStyle}>Designation</label>
            <input type="text" id="designation" name="designation" className={inputStyle} value={formData.designation} onChange={handleInputChange} required />
          </div>
        </div>

        {/* Row 2: Department & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="department" className={optionalLabelStyle}>Department</label>
            <input type="text" id="department" name="department" className={inputStyle} value={formData.department} onChange={handleInputChange} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="companyName" className={labelStyle}>Company/Organisation Name</label>
            <input type="text" id="companyName" name="companyName" className={inputStyle} value={formData.companyName} onChange={handleInputChange} required />
          </div>
        </div>

        {/* Row 3: Company Address */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="companyAddress" className={labelStyle}>Company/Organisation Address</label>
          <textarea id="companyAddress" name="companyAddress" className={`${inputStyle} resize-vertical min-h-[100px]`} value={formData.companyAddress} onChange={handleInputChange} rows={3} required />
        </div>

        {/* Row 4: Email & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelStyle}>Email</label>
            <input type="email" id="email" name="email" className={inputStyle} value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="mobile" className={labelStyle}>Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" className={inputStyle} value={formData.mobile} onChange={handleInputChange} required />
          </div>
        </div>

        {/* Row 5: Services Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="services" className={labelStyle}>Services</label>
          <select
            id="services"
            name="services"
            className={`${inputStyle} cursor-pointer appearance-none bg-[right_16px_center] bg-no-repeat pr-12`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")` }}
            value={formData.services}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Conditional: Other Services */}
        <AnimatePresence>
          {showOtherServices && (
            <motion.div
              className="flex flex-col gap-1.5 origin-top"
              initial={{ opacity: 0, height: 0, scaleY: 0.8 }}
              animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
              exit={{ opacity: 0, height: 0, scaleY: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="otherServices" className={labelStyle}>Please specify other services</label>
              <textarea
                id="otherServices"
                name="otherServices"
                className={`${inputStyle} resize-vertical min-h-[100px]`}
                value={formData.otherServices}
                onChange={handleInputChange}
                rows={3}
                required
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Row 6: Additional Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={optionalLabelStyle}>Additional Message</label>
          <textarea id="message" name="message" className={`${inputStyle} resize-vertical min-h-[120px]`} value={formData.message} onChange={handleInputChange} rows={2} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-3 py-[9px] px-5 rounded-xl font-bold text-lg text-neutral-white tracking-tight transition-all duration-300
                   bg-gradient-to-br from-[#f66d14] to-[#ff6900] shadow-md
                   hover:shadow-xl hover:-translate-y-1 active:translate-y-0
                   disabled:bg-slate-400 disabled:from-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed disabled:animate-pulse disabled:shadow-none"
          disabled={isSubmitting || showSuccess || showError}
        >
          {isSubmitting ? 'Sending...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
