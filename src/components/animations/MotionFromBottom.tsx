import React from 'react';
import { motion } from 'framer-motion';
import IAnimationProps from './interfaces';

export default function MotionFromBottom({ children }: IAnimationProps) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.4 }}
      className="form-login"
    >
      {children}
    </motion.div>
  );
}
