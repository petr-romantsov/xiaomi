import clsx from 'clsx';
import { motion } from 'motion/react';

export const CollapseX = ({ children, options = {}, className, ...props }) => {
  return (
    <motion.div className={clsx(className)} {...options} {...props}>
      {children}
    </motion.div>
  );
};
