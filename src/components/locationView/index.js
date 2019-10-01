import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "~/modules/app/contextProvider";
import styles from "./styles.scss";

export default ({ setShowSideBar }) => {
  const [appContextValue] = useAppContext();
  const { userLocation: { mainText, secondaryText } = {} } = appContextValue;

  return (
    <div
      className={styles["location-picker-container"]}
      onClick={() => setShowSideBar(true)}
    >
      <span>
        <span className={styles["locality"]}>
          {mainText || "Choose a location"}
        </span>
      </span>
      <span className={styles["address"]}>{secondaryText}</span>
      <span>
        <span className={styles["address-icon"]}>
          <FontAwesomeIcon icon="angle-down" size="1x" />
        </span>
      </span>
    </div>
  );
};
