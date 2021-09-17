import Image from "next/image";
import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

import ContainerCard from "../Card/ContainerCard";
import CardBody from "../CardBody/CardBody";
import CardFullHeader from "../CardFullHeader/CardFullHeader";
import styles from "./SwapBasics.module.scss";

const SwapBasics = ({
    isExchange,
    isPlus,
    exchanges,
    firstItem,
    firstItem2,
    secondItem2,
    secondItem,
    title,
    subtitle,
    count,
    setCounter,
    children,
}: any) => {
    const [isRefresh, setIsRefresh] = useState(false);
    const increaseCounter = () => {
        setCounter(count + 1);
    };
    return (
        <ContainerCard>
            <CardFullHeader
                title={title}
                subtitle={subtitle}
                firstIcon
                count={count}
                setCounter={setCounter}>
                <div className={styles.end}>
                    <button onClick={() => setIsRefresh(!isRefresh)}>
                        <BiRefresh
                            className={`${
                                isRefresh
                                    ? styles.animateRefresh
                                    : styles.refresh
                            }`}
                        />
                    </button>
                </div>
            </CardFullHeader>
            <CardBody firstItem={firstItem} secondItem={secondItem}>
                <div
                    className={` ${
                        isExchange ? styles.right : styles.flexSpread
                    }`}>
                    {isExchange ? (
                        <div className={styles.flex}>
                            <div>
                                <Image
                                    src="/ex-ic.svg"
                                    alt="USD"
                                    width={32}
                                    height={32}
                                />{" "}
                            </div>
                            <h4 className={`${styles.spacing} mx-2`}>
                                Horbit{" "}
                                <span className={styles.yellow}>
                                    {" "}
                                    CEX
                                </span>
                            </h4>
                            <div>
                                <Image
                                    src="/down-arrow.svg"
                                    alt="USD"
                                    width={16}
                                    height={16}
                                />{" "}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.flexBetween}>
                            <div>
                                <h4>1</h4>
                            </div>
                            <div className={`${styles.flexEnd} mt-2`}>
                                <h6
                                    className="mx-2 mt-1"
                                    style={{ color: "#06B5DB" }}>
                                    MAX
                                </h6>{" "}
                                <div>
                                    <Image
                                        src="/token-dgz.svg"
                                        alt="USD"
                                        width={32}
                                        height={32}
                                    />{" "}
                                </div>
                                <h5
                                    className={`${styles.spacing} mx-2`}>
                                    BNB{" "}
                                </h5>
                                <div>
                                    <Image
                                        src="/down-arrow.svg"
                                        alt="USD"
                                        width={16}
                                        height={16}
                                    />{" "}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </CardBody>
            <div className={styles.icons}>
                {isPlus ? (
                    <div className={`${styles.plus} py-5`}>
                        <FaPlus />
                    </div>
                ) : (
                    <div
                        className={`${styles.xchangeIcons} py-5 my-2`}>
                        <div>
                            <Image
                                src="/arrow.svg"
                                width={50}
                                height={65}
                                className={` ${styles.ic1}`}
                            />
                        </div>
                        <div>
                            <Image
                                src="/arrow.svg"
                                width={50}
                                height={65}
                                className={`${styles.ic2}`}
                            />
                        </div>
                    </div>
                )}
            </div>

            <CardBody firstItem={firstItem2} secondItem={secondItem2}>
                <div
                    className={` ${
                        isExchange ? styles.right : styles.flexSpread
                    }`}>
                    {isExchange ? (
                        <div className={styles.flex}>
                            <div>
                                <Image
                                    src="/token-bnb.svg"
                                    alt="USD"
                                    width={32}
                                    height={32}
                                />{" "}
                            </div>
                            <h4 className={`${styles.spacing} mx-2`}>
                                BNB /{" "}
                            </h4>
                            <div>
                                <Image
                                    src="/token-bnb.svg"
                                    alt="USD"
                                    width={32}
                                    height={32}
                                />{" "}
                            </div>
                            <h4 className={`${styles.spacing} mx-2`}>
                                SDG{" "}
                            </h4>
                            <div>
                                <Image
                                    src="/down-arrow.svg"
                                    alt="USD"
                                    width={16}
                                    height={16}
                                />{" "}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.flexBetween}>
                            <div>
                                <h4>777</h4>
                            </div>
                            <div className={`${styles.flexEnd} mt-2`}>
                                <h6
                                    className="mx-2 mt-1"
                                    style={{ color: "#06B5DB" }}>
                                    MAX
                                </h6>{" "}
                                <div>
                                    <Image
                                        src="/token-dgz.svg"
                                        alt="USD"
                                        width={32}
                                        height={32}
                                    />{" "}
                                </div>
                                <h5
                                    className={`${styles.spacing} mx-2`}>
                                    BNB{" "}
                                </h5>
                                <div>
                                    <Image
                                        src="/down-arrow.svg"
                                        alt="USD"
                                        width={16}
                                        height={16}
                                    />{" "}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </CardBody>

            {/* Range Slider Goes here */}

            <div className={`${styles.body} my-5`}>
                {exchanges.map(item => {
                    const { id, name, info } = item;
                    return (
                        <div
                            key={id}
                            className={`${styles.item} px-1 px-md-3 mb-2`}>
                            <div className={styles.single}>
                                <div>
                                    <Image
                                        src="/tooltip.svg"
                                        alt="tool tip"
                                        width={10}
                                        height={15}
                                    />
                                </div>
                                <p className="mt-1"> {name}</p>
                            </div>
                            <div className={styles.adjust}>
                                <p>{info}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={`${styles.stakingBtn}`}>
                <button
                    className={`${styles.btn} mt-1 mb-3 p-2 mx-auto`}
                    onClick={increaseCounter}>
                    trade on horbit exchange
                </button>
            </div>
            {children}
        </ContainerCard>
    );
};

export default SwapBasics;
