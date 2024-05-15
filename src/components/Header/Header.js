import React from "react";
import styles from "./Header.module.css";
import collection_logo from "../../assets/collection_logo.png";
import header_profile from "../../assets/header_profile.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.collectionLogo}
        src={collection_logo}
        alt="Collection Header Logo"
      ></img>
      <div className={styles.headerTabs}>
        <a href="#proposals">Proposals</a>
        <a href="#projects">Projects</a>
        <a href="#influencers">Influencers</a>
        <a href="#brands">Brands</a>
        <a href="#collections" className={styles.headerTabActive}>
          Collections
        </a>
      </div>
      <img src={header_profile} alt="Header User Icon"></img>
    </header>
  );
};

export default Header;
