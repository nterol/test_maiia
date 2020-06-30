import React from "react";

import SkeletonThumbnail from "../../atoms/skeleton-thumbnail/SkeletonThumbnail";
import MotionCard from "../../atoms/motion-card/MotionCard";

const variants = {
  enter: { y: -100, opacity: 0 },
  visible: { opacity: 1, y: 0 },
  exit: () => ({ opacity: 0 }),
};

const SkeletonArticle = ({ simple, duration }) => (
  <MotionCard
    whileHover={{ scale: 1.05 }}
    initial="enter"
    variants={variants}
    animate="visible"
    exit="exit"
    transition={{
      duration,
      opacity: { duration: duration },
    }}
  >
    <SkeletonThumbnail />
    {Array.from({ length: simple }).map((_, i) => (
      <hr key={i} />
    ))}
  </MotionCard>
);

export default SkeletonArticle;
