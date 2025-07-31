import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "forlanceyea@icloud.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 6000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-center text-sm rounded-full font-extralight bg-gray-900 w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence>
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img
              src="assets/copy-done.svg"
              alt="copy-done icon"
              className="w-5"
            />
            Email has copied
          </motion.p>
        ) : (
          <p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/copy.svg " className="w-5" alt="copy icon" />
            Copy Email Address
          </p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default CopyEmailButton;
