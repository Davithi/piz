import React from "react";
import styles from './NotFoundBlock.module.scss'
function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        there is nothing
      </h1> 
      <p className={styles.description}>
      unfortunately this page is missing
      </p>
    </div>
  );
}

export default NotFoundBlock;
