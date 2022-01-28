import React from "react";
import styles from "../css/Left/LeftContainer.module.css";

const LeftContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <h1 className={styles.nameStyle}>KENDI</h1>
        <ul className={styles.ulContainer}>
          <li className={styles.ulTextStyles}>Home</li>
          <li className={styles.ulTextStyles}>About</li>
          <li className={styles.ulTextStyles}>Portfolio</li>
          <li className={styles.ulTextStyles}>News</li>
          <li className={styles.ulTextStyles}>Contact</li>
        </ul>
        <div>
          <p className={styles.copyRightText}>© 2022 Tirane</p>
          <p className={styles.copyRightText}>Created by me</p>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
