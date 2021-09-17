import React from "react";

import styles from "./CardBody.module.scss";

const CardBody = ({ firstItem, secondItem, children }: any) => {
    return (
        <div className={styles.cardBody}>
            <div className={`${styles.bodyIcon}   px-2 px-md-4 px-2`}>
                {children}
            </div>
            <div
                className={`${styles.cardFooter}  px-md-3 px-2 py-1`}>
                <div>{firstItem}</div>
                <div
                    className={`${
                        firstItem === "DGZ Earned"
                            ? styles.yellow
                            : styles.white
                    }`}>
                    {secondItem}
                </div>
            </div>
        </div>
    );
};

export default CardBody;
