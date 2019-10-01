import React from "react";
import PropTypes from "prop-types";
import rippleLoader from "assets/images/ripple.svg";
import styles from "./styles.scss";

const Loader = ({ size }) => (
  <div className={`${styles["loader-container"]} ${styles[size]}`}>
    <img src={rippleLoader} alt="Loading..." />
  </div>
);

Loader.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"])
};

Loader.defaultProps = {
  size: "sm"
};

export default Loader;
