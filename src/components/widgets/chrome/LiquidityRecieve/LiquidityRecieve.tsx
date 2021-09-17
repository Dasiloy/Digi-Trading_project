import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import ContainerCard from "../Card/ContainerCard";
import CardFullHaeder from "../CardFullHeader/CardFullHeader";
import styles from "./LiquidityRecieve.module.scss";

const Details = [
    {
        id: 1,
        name: "BNB Deposited",
        info: "1",
    },
    {
        id: 2,
        name: "DGZ Deposited",
        info: "7777 77",
    },
    {
        id: 3,
        name: "Rates",
        info: "0.00077BNB => 10DGZ",
        infoExtra: "7777 77DGZ => 1BNB",
    },
    {
        id: 4,
        name: "Share Of Pool",
        info: "0.00000007%",
    },
];

const LiquidityRecieve = ({ count, setCounter }: any) => {
    const [rate, setRate] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false);
    const increaseCounter = () => {
        setCounter(count + 1);
    };

    useEffect(() => {
        setRate(Details);
    }, []);
    return (
        <ContainerCard>
            <CardFullHaeder
                title="You will recieve"
                subtitle="This is how nmuch you will recieve"
                count={count}
                setCounter={setCounter}
                firstIcon={false}>
                <div className={styles.end}>
                    <button>
                        <FaBars className={styles.bars} />
                    </button>
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
            </CardFullHaeder>
            <div
                className={`${styles.header} px-2 px-md-1 px-md-4 py-2`}>
                <div className={styles.headerFlex}>
                    <h3>0.77777</h3>
                    <div className={styles.headerIcon}>
                        <span className="mx-2">
                            <Image
                                src="/token-bnb.svg"
                                alt="bnb"
                                width={40}
                                height={40}
                            />{" "}
                        </span>
                        <span>
                            <Image
                                src="/token-dgz.svg"
                                alt="dgz"
                                width={40}
                                height={40}
                            />{" "}
                        </span>
                    </div>
                </div>
                <h5 className="mt-2 mb-5">BNB/DGZ Pool Tokens</h5>
                <p>
                    Output is estimated. if this price changes by more
                    than 0.5% your transaction will revert
                </p>
            </div>
            <div className={`${styles.body} mt-5 mb-3`}>
                {rate.map(item => {
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
                                <p>{name}</p>
                            </div>
                            <div className={styles.adjust}>
                                <p>{info}</p>
                                {item.infoExtra && (
                                    <p>{item.infoExtra}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button
                className={`${styles.btn} mt-1 mb-3 p-2 mx-auto`}
                onClick={increaseCounter}>
                confirm supply
            </button>
        </ContainerCard>
    );
};

export default LiquidityRecieve;
