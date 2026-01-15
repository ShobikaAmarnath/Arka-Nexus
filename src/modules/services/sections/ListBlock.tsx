import { motion } from "framer-motion";

const ListBlock = ({ items }: { items: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-start gap-3"
        >
          <div className="w-2 h-2 bg-[#f97316] rounded-full mt-2 shrink-0 animate-pulse" />
          <span className="text-gray-700 font-medium text-base leading-relaxed text-left">
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ListBlock;