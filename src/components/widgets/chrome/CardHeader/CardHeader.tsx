import React from "react";

import styles from "./CardHeader.module.scss";

const CardHeader = ({ title, setCounter, count, children }: any) => {
    const decreaseCounter = () => {
        setCounter(count - 1);
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div className={`${styles.cardHeader} mb-4`}>
            <button
                onClick={decreaseCounter}
                className={styles.backButton}>
                <h5>Back</h5>
            </button>
            <div className="mx-auto">
                <h3 className={` ${styles.flat} fw-bold text-center`}>
                    {title}
                </h3>
                {children}
            </div>
        </div>
    );
};

export default CardHeader;
