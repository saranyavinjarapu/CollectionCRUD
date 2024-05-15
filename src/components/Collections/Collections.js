import React from "react";
import styles from "./Collections.module.css";
import CollectionDetail from "../CollectionDetail/CollectionDetail";

const Collections = () => {
  return (
    <div className={styles.collectionsMain}>
      <div className={styles.filteredCollections}>
        <div className={styles.collectionInfo}>
          <div className={styles.collectionInfoTitle}>My Collections</div>
          <div className={styles.collectionInfoDescription}>
            Introducing collections: the ability to organise the materials in a
            way
            <br />
            that the brands and influencers can access the elements and
            collections
            <br />
            in and organised and scalable way
            <br />
          </div>
        </div>
        <div className={styles.collectionResultsCount}>Showing 118 Results</div>
      </div>
      <CollectionDetail></CollectionDetail>
    </div>
  );
};

export default Collections;
