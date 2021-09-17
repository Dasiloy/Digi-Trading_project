import React from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";

import styles from "./CardFullHeader.module.scss";

const CardFullHeader = ({
    title,
    setCounter,
    count,
    children,
    subtitle,
    firstIcon,
}: any) => {
    const decreaseCounter = () => {
        setCounter(count - 1);
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div className={`${styles.cardHeader} mb-4`}>
            {firstIcon ? (
                <button className={styles.backButton}>
                    <span className={styles.span}>
                        <FaBars />{" "}
                    </span>
                </button>
            ) : (
                <button
                    onClick={decreaseCounter}
                    className={styles.backButton}>
                    <span className={styles.span}>
                        <FaArrowLeft />{" "}
                    </span>
                </button>
            )}
            <div className="mx-auto">
                <h3 className={` ${styles.flat} fw-bold text-center`}>
                    {title}
                </h3>
                <span className={`${styles.painted} mx-auto`}>
                    {subtitle}
                </span>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default CardFullHeader;
