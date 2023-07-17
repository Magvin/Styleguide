import { motion } from "framer-motion";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const Layout: FC<
  PropsWithChildren<{
    initial?: number;
  }>
> = ({ children, initial = 0 }) => (
  <motion.div
    initial={{ x: initial, opacity: 0.2 }}
    animate={{ x: initial, opacity: 1 }}
    exit={{ x: 200, opacity: 0.8 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);
export default Layout;
