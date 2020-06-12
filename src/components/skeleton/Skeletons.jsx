import React from "react";
import SkeletonArticle from "./SkeletonArticle";

const Skeletons = () => (
  <>
    <SkeletonArticle simple={3} />
    <SkeletonArticle simple={4} />
    <SkeletonArticle simple={1} />
    <SkeletonArticle simple={6} />
    <SkeletonArticle simple={5} />
  </>
);

export default Skeletons;
