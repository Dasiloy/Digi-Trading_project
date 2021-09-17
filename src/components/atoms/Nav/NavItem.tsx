import React from "react";

import styles from "../../widgets/chrome/Nav/Nav.module.scss";

const NavItem = ({ title, url }: any) => {
    return (
        <div>
            <a href={url}>
                <div
                    style={{
                        color:
                            title === "DGZ Trading"
                                ? "yellow"
                                : title === "Logout"
                                ? "red"
                                : "white",
                    }}
                    className={styles.navChild}>
                    {title}
                </div>
            </a>
        </div>
    );
};

export default NavItem;
