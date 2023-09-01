import React from "react";
import clsx from "clsx";
import styles from "./Input.module.css";
const Input = ({ onChange, type, className, ...props }) => {
  return (
    <input
      type="text"
      {...props}
      className={clsx(styles.input, className)}
      onChange={onChange}
    />
  );
};

export default Input;
