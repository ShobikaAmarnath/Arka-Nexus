import { motion, AnimatePresence } from "framer-motion";

type Props = {
  showSuccess: boolean;
  showError: boolean;
};

const ContactAlerts = ({ showSuccess, showError }: Props) => (
  <>
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed left-1/2 top-10 z-[10000] -translate-x-1/2 rounded-full bg-status-success px-6 py-3 text-white shadow-xl"
        >
          Request Submitted Successfully!
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed left-1/2 top-10 z-[10000] -translate-x-1/2 rounded-full bg-status-error px-6 py-3 text-white shadow-xl"
        >
          Failed to submit. Please try again.
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

export default ContactAlerts;
