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
          <div className="mt-2 h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#f97316]" />
          <span className="text-left text-base font-medium leading-relaxed text-gray-700">
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ListBlock;
