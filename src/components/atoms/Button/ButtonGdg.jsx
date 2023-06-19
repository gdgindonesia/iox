import React from "react";
import styles from "./Button.module.css";

export function ButtonGdg({ className, href, text, prefixIcon, ...props }) {
  return (
    <a
      className={styles.container}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {prefixIcon && <span className={styles.icon}>{prefixIcon}</span>}
      <span className={styles.text}>{text}</span>
    </a>
  );
}