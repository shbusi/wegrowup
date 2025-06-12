import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedHomepage() {
  const [shakeTree, setShakeTree] = useState(false);

  const handleClick = () => {
    setShakeTree(true);
    setTimeout(() => setShakeTree(false), 1500);
  };

  const leaves = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden">
      <h1 className="text-3xl font-extrabold text-green-800 mb-6">
        🌳 Welcome to the GlowUp Garden
      </h1>

      <motion.div
        className="w-40 h-40 bg-[url('/tree.png')] bg-contain bg-no-repeat cursor-pointer"
        animate={shakeTree ? { rotate: [0, -10, 10, -10, 0] } : {}}
        transition={{ duration: 1.2 }}
        onClick={handleClick}
      />

      <AnimatePresence>
        {shakeTree &&
          leaves.map((leaf) => (
            <motion.div
              key={leaf}
              className="absolute w-6 h-6 bg-[url('/leaf.png')] bg-contain bg-no-repeat"
              initial={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              animate={{
                y: [0, 200],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: 360,
                opacity: 0,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ top: "40%", left: "50%" }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}