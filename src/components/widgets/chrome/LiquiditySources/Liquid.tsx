/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import { useStore } from "react-redux";

import data from "./data";
import styles from "./liquid.module.scss";

const Liquid = () => {
    const [ishover, setIsHover] = React.useState(false);
    const [info, setinfo] = React.useState(data);
    const [showItem, setShowItem] = React.useState(false);
    const [infoId, setInfoId] = useState(0);
    const [moreId, setMoreId] = useState(0);

    const updateId = id => {
        setInfoId(id);
        setShowItem(!showItem);
    };

    const updateMoreId = Id => {
        setIsHover(true);
        setMoreId(Id);
    };

    return (
        <div className={`${styles.container} my-3`}>
            {info.map(item => {
                const { id, title, children } = item;
                return (
                    <div className={styles.flexbox} key={id}>
                        <div
                            className={`${styles.flexBetween} ${
                                styles.topItem
                            } ${
                                showItem && id === infoId
                                    ? "mb-3"
                                    : ""
                            } px-2`}>
                            <p className={styles.select}>{title}</p>

                            <div
                                className={`${styles.flexBetween} ${styles.flex2}`}>
                                <p>Expand</p>
                                <p>
                                    <BsFillCaretDownFill
                                        onClick={() => updateId(id)}
                                    />
                                </p>
                                <div className={`${styles.caret} `}>
                                    <FaCheck />
                                </div>
                            </div>
                        </div>

                        {showItem &&
                            infoId === id &&
                            children.map(child => {
                                const { titleMore, idMore } = child;
                                return (
                                    <div
                                        className={
                                            styles.collapsedItems
                                        }
                                        key={idMore}>
                                        <div
                                            className={`${styles.collapsedFlex} ${styles.flexBetween} `}>
                                            <div
                                                className={`
                                                    ${styles.collapsed1} 
                                                `}>
                                                <p>
                                                    <FaCalendarAlt />
                                                </p>

                                                <p className="mt-1">
                                                    {titleMore}
                                                </p>
                                            </div>

                                            <div
                                                className={
                                                    styles.collapsed2
                                                }
                                                onClick={() =>
                                                    updateMoreId(
                                                        idMore,
                                                    )
                                                }>
                                                {moreId === idMore &&
                                                    ishover && (
                                                        <FaCheck />
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                );
            })}
        </div>
    );
};

export default Liquid;
