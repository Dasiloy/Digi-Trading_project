/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import {
    BsCaretRightFill,
    BsFillCaretDownFill,
    BsFillCaretUpFill,
    BsInfoCircleFill,
} from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";

import styles from "./Advanced.module.scss";

const Advanced = ({ count, setCounter }: any) => {
    const [gasPrice, setgasPrice] = useState("Fast (23 GWEI)");
    const [fast, setFast] = useState("23 fast");
    const [instant, setInstant] = useState("29 instant");
    const [gasType, setgasType] = useState(1);
    const [Slipagevalue, setSlipageValue] = useState(" ");
    const [gasValue, setgasValue] = useState("");
    const [togglegas, setTogglegas] = useState(false);
    const [partialFill, setPartialFill] = useState(false);
    const [optimized, setOptimized] = useState(false);

    const handleGasPrice = (id, isFast) => {
        setgasType(id);
        setgasPrice(isFast);
    };

    // SLIPAGE CONTROLLER
    const [slippage, setSlippage] = useState(1);
    const [toggleSlipage, settoggleSlipage] = useState(false);
    const [price1, setPrice1] = useState(0.1);
    const [price2, setPrice2] = useState(0.3);
    const [price3, setPrice3] = useState(1);
    const [price4, setPrice4] = useState(3);
    const [slipageType, setSlipageType] = useState(0.1);

    const handleSlipage = id => {
        setSlippage(id);
        setSlipageType(id);
    };
    // SLIPAGE CONTROLLER ENDS

    return (
        <div className={`${styles.advancedcontainer} mt-4 mb-3`}>
            <div className={styles.flex}>
                {/* SETTINGS ITEM START */}
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <p>
                                <BsInfoCircleFill />
                            </p>

                            <p>Partial Fill</p>
                        </div>

                        <div
                            className={styles.settings2}
                            onClick={() =>
                                setPartialFill(!partialFill)
                            }>
                            {partialFill === true ? <FaCheck /> : ""}
                        </div>
                    </div>
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <p>
                                <BsInfoCircleFill />
                            </p>
                            <p>Optimized Router</p>
                        </div>

                        <div
                            className={styles.settings2}
                            onClick={() => setOptimized(!optimized)}>
                            {optimized === true ? <FaCheck /> : ""}
                        </div>
                    </div>
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <p>
                                <BsInfoCircleFill />
                            </p>
                            <p>Gas Price</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>{gasPrice}</p>
                            <p>
                                {togglegas ? (
                                    <BsFillCaretUpFill
                                        onClick={() =>
                                            setTogglegas(!togglegas)
                                        }
                                    />
                                ) : (
                                    <BsFillCaretDownFill
                                        onClick={() =>
                                            setTogglegas(!togglegas)
                                        }
                                    />
                                )}
                            </p>
                        </div>
                    </div>

                    {togglegas ? (
                        <div className={styles.formWrap}>
                            <form>
                                <div
                                    className={
                                        styles.buttonContainer
                                    }>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleGasPrice(
                                                1,
                                                "Fast (23 GWEI)",
                                            )
                                        }
                                        className={`${
                                            gasType === 1
                                                ? styles.buttonActive
                                                : styles.button
                                        }`}>
                                        {fast}
                                        {gasType === 1 ? (
                                            <GiSevenPointedStar />
                                        ) : (
                                            ""
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleGasPrice(
                                                2,
                                                "Instant (29 GWEI)",
                                            )
                                        }
                                        className={`${
                                            gasType === 2
                                                ? styles.buttonActive
                                                : styles.button
                                        }`}>
                                        {instant}
                                        {gasType === 2 ? (
                                            <GiSevenPointedStar />
                                        ) : (
                                            ""
                                        )}
                                    </button>
                                </div>

                                <div className={styles.formInput}>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Custom"
                                        value={gasValue}
                                        onChange={e => {
                                            setgasValue(
                                                e.target.value,
                                            );
                                            setgasPrice(gasValue);
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <p>
                                <BsInfoCircleFill />
                            </p>
                            <p>Slippage Tolerance</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>{slippage}</p>
                            <p>
                                {toggleSlipage ? (
                                    <BsFillCaretUpFill
                                        onClick={() =>
                                            settoggleSlipage(
                                                !toggleSlipage,
                                            )
                                        }
                                    />
                                ) : (
                                    <BsFillCaretDownFill
                                        onClick={() =>
                                            settoggleSlipage(
                                                !toggleSlipage,
                                            )
                                        }
                                    />
                                )}
                            </p>
                        </div>
                    </div>

                    {toggleSlipage ? (
                        <div className={styles.formWrap}>
                            <form>
                                <div
                                    className={
                                        styles.buttonContainer
                                    }>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSlipage(0.1)
                                        }
                                        className={`${
                                            styles.slipButton
                                        } ${
                                            slipageType === 0.1
                                                ? styles.buttonSlippageActive
                                                : styles.buttonSlipage
                                        }`}>
                                        {price1}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSlipage(0.3)
                                        }
                                        className={`${
                                            styles.slipButton
                                        } ${
                                            slipageType === 0.3
                                                ? styles.buttonSlippageActive
                                                : styles.buttonSlipage
                                        }`}>
                                        {price2}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSlipage(1)
                                        }
                                        className={`${
                                            styles.slipButton
                                        } ${
                                            slipageType === 1
                                                ? styles.buttonSlippageActive
                                                : styles.buttonSlipage
                                        }`}>
                                        {price3}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSlipage(3)
                                        }
                                        className={`${
                                            styles.slipButton
                                        } ${
                                            slipageType === 3
                                                ? styles.buttonSlippageActive
                                                : styles.buttonSlipage
                                        }`}>
                                        {price4}
                                    </button>
                                </div>

                                <div className={styles.formInput2}>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Custom"
                                        value={Slipagevalue}
                                        onChange={e => {
                                            setSlipageValue(
                                                e.target.value,
                                            );
                                            setSlippage(Slipagevalue);
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <p>
                                <BsInfoCircleFill />
                            </p>
                            <p>Liquidity Sources</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>65</p>
                            <p>
                                <BsCaretRightFill
                                    onClick={() =>
                                        setCounter(count + 1)
                                    }
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <p>
                                <BsInfoCircleFill />
                            </p>
                            <p>Custom Token</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>0</p>
                            <p>
                                <BsCaretRightFill
                                    onClick={() =>
                                        setCounter(count + 2)
                                    }
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advanced;
