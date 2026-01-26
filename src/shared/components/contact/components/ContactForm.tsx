import { AnimatePresence, motion } from "framer-motion";
import ContactAlerts from "./ContactAlerts";
import { SERVICE_OPTIONS } from "../utils/contact.constants";
import { useContactForm } from "../hooks/useContactForm";

type Props = {
  onSuccess?: () => void;
};

const ContactForm = ({ onSuccess }: Props) => {
  const {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    showError,
    handleChange,
    handleSubmit,
  } = useContactForm(onSuccess);

  const showOtherServices = formData.services === "Others";

  /* ---------- Label & Input Styles ---------- */
  const labelStyle =
    "font-semibold text-gray-700 text-body-sm tracking-tight after:content-['*'] after:ml-1 after:text-red-600 after:font-bold";

  const optionalLabelStyle =
    "font-semibold text-gray-700 text-body-sm tracking-tight";

  const inputStyle =
    "px-4 py-2 border-2 border-gray-200 rounded-xl text-body-sm transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-gray-300 bg-white text-gray-800 leading-relaxed";

  return (
    <div className="relative w-full">
      {/* Success & Error Toasts */}
      <ContactAlerts showSuccess={showSuccess} showError={showError} />

      <form
        onSubmit={handleSubmit}
        className={`flex w-full flex-col gap-7 transition-opacity duration-300 ${
          showSuccess ? "pointer-events-none opacity-30" : "opacity-100"
        }`}
      >
        {/* ---------------- Header ---------------- */}
        <div className="relative mb-2 overflow-hidden rounded-xl p-6 text-center text-brand-primary">
          <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <h1 className="relative z-10 text-h3 font-bold tracking-tight">
            Get In Touch With Our Engineering Experts
          </h1>
        </div>

        {/* ---------------- Row 1 ---------------- */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelStyle}>
              Name
            </label>
            <input
              id="name"
              name="name"
              className={inputStyle}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="designation" className={labelStyle}>
              Designation
            </label>
            <input
              id="designation"
              name="designation"
              className={inputStyle}
              value={formData.designation}
              onChange={handleChange}
            />
            {errors.designation && (
              <p className="text-sm text-red-600">{errors.designation}</p>
            )}
          </div>
        </div>

        {/* ---------------- Row 2 ---------------- */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="department" className={optionalLabelStyle}>
              Department
            </label>
            <input
              id="department"
              name="department"
              className={inputStyle}
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="companyName" className={labelStyle}>
              Company / Organisation Name
            </label>
            <input
              id="companyName"
              name="companyName"
              className={inputStyle}
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <p className="text-sm text-red-600">{errors.companyName}</p>
            )}
          </div>
        </div>

        {/* ---------------- Address ---------------- */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="companyAddress" className={labelStyle}>
            Company / Organisation Address
          </label>
          <textarea
            id="companyAddress"
            name="companyAddress"
            className={`${inputStyle} resize-vertical min-h-[100px]`}
            value={formData.companyAddress}
            onChange={handleChange}
          />
          {errors.companyAddress && (
            <p className="text-sm text-red-600">{errors.companyAddress}</p>
          )}
        </div>

        {/* ---------------- Email & Mobile ---------------- */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelStyle}>
              Email
            </label>
            <input
              id="email"
              name="email"
              className={inputStyle}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="mobile" className={labelStyle}>
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              className={inputStyle}
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <p className="text-sm text-red-600">{errors.mobile}</p>
            )}
          </div>
        </div>

        {/* ---------------- Services ---------------- */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="services" className={labelStyle}>
            Services
          </label>
          <select
            id="services"
            name="services"
            className={`${inputStyle} cursor-pointer appearance-none pr-12`}
            value={formData.services}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.services && (
            <p className="text-sm text-red-600">{errors.services}</p>
          )}
        </div>

        {/* ---------------- Other Services ---------------- */}
        <AnimatePresence>
          {showOtherServices && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-1.5"
            >
              <label htmlFor="otherServices" className={labelStyle}>
                Please specify other services
              </label>
              <textarea
                id="otherServices"
                name="otherServices"
                className={`${inputStyle} min-h-[100px]`}
                value={formData.otherServices}
                onChange={handleChange}
              />
              {errors.otherServices && (
                <p className="text-sm text-red-600">{errors.otherServices}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------------- Message ---------------- */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={optionalLabelStyle}>
            Additional Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`${inputStyle} min-h-[120px]`}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* ---------------- Submit ---------------- */}
        <button
          type="submit"
          disabled={isSubmitting || showSuccess || showError}
          className="mt-3 rounded-xl bg-gradient-to-br from-[#f66d14] to-[#ff6900] px-5 py-[9px] text-body-sm font-semibold text-neutral-white hover:-translate-y-1 hover:shadow-xl disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
