import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import ThumbnailLoader from "../../molecules/thumbnail-loader/ThumbnailLoader";
import ShopButton from "../../molecules/shop-button/ShopButton";
import Quantity from "../../atoms/quantity/Quantity";

function Article({ title, imageUrl, articleId }) {
  const thumbnailRef = useRef(null);

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    thumbnailRef.current = new Image();
    thumbnailRef.current.src = imageUrl;
    if (thumbnailRef.current.complete) setImgLoaded(true);
    else thumbnailRef.current.onload = () => setImgLoaded(true);
  }, [imageUrl]);

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.article}
    >
      <ThumbnailLoader
        imgLoaded={imgLoaded}
        currentRef={thumbnailRef.current}
      />
      <Quantity articleId={articleId} />
      <div
        style={{
          minHeight: "4em",
          marginTop: "2em",
          padding: "0.5em",
        }}
      >
        <h3>{title}</h3>
      </div>

      <ShopButton articleId={articleId} />
    </motion.article>
  );
}

export default Article;
