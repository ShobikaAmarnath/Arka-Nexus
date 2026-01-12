import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../../../modules/home/components/ContactForm";

type Props = {
  onClose: () => void;
};

const ContactModal = ({ onClose }: Props) => {
  const modalVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-xl md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        /* Modal Content: Implements max-width, max-height, and shadow logic */
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-400/10"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: Replicates the specific hover and border styles from legacy CSS */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 font-medium text-slate-500 transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-neutral-white hover:-translate-y-px active:translate-y-0"
          aria-label="Close Modal"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {/* Scrollable Container: Maintains layout for internal padding and scrollbars */}
        <div className="flex-1 overflow-y-auto p-10 md:p-12 scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-300 hover:scrollbar-thumb-slate-400">
          <ContactForm onSuccess={onClose} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
