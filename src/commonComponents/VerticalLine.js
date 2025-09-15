import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./VerticalLine.css"; 

const VerticalLine = () => {
  const lineContainerRef = useRef(null);
  const innerLineRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: lineContainerRef,
    offset: ["start end", "end start"],
  });

  // Set height once container renders
  useEffect(() => {
    if (lineContainerRef.current) {
      const rect = lineContainerRef.current.getBoundingClientRect();
      setContainerHeight(rect.height);
    }
  }, []);

  // Animate height and opacity based on scroll
  const height = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={lineContainerRef} className="vertical-line-container">
      <motion.div
        ref={innerLineRef}
        style={{ height, opacity }}
        className="vertical-line"
      />
    </div>
  );
};

export default VerticalLine;
