import React from "react";
import { AnimatePresence } from "framer-motion";

import SkeletonArticle from "./SkeletonArticle";

const Skeletons = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <>
        <SkeletonArticle simple={3} duration={0.9} />
        <SkeletonArticle simple={4} duration={0.7} />
        <SkeletonArticle simple={1} duration={0.5} />
        <SkeletonArticle simple={6} duration={0.3} />
        <SkeletonArticle simple={5} duration={0.2} />
      </>
    )}
  </AnimatePresence>
);

export default Skeletons;
