"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ArticleContent = ({ children }: { children: ReactNode }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless prose-invert"
        >
            {children}
        </motion.article>
    );
};