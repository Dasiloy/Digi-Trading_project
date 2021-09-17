import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>
                Always make sure the URL is digiblez.com - Press
                (Ctrl+D or Cmd+D) to bookmark it to be safe.
            </span>
        </footer>
    );
};

export default Footer;
