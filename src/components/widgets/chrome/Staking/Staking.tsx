import Image from "next/image";
import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi";

import ContainerCard from "../Card/ContainerCard";
import CardBody from "../CardBody/CardBody";
import CardHFullHeader from "../CardFullHeader/CardFullHeader";
import styles from "./Staking.module.scss";

const Details = [
    {
        id: 1,
        name: "APY",
        info: "20.1%",
    },
    {
        id: 2,
        name: "Reward per minuite",
        info: "4.40803 DGZ",
    },
    {
        id: 3,
        name: "Start",
        info: "25th May 2021 14:00PM",
    },
    {
        id: 4,
        name: "Finish",
        info: "25th June 2021 14:00PM",
    },
    {
        id: 5,
        name: "Your stake",
        info: "0 DGZ",
    },
    {
        id: 6,
        name: "Pool share",
        info: "0%",
    },
    {
        id: 7,
        name: "Participants",
        info: "812",
    },
];

const Staking = ({ count, setCounter }: any) => {
    const [isRefresh, setIsRefresh] = useState(false);
    const [rate, setRate] = useState([]);
    const increaseCounter = () => {
        setCounter(count + 1);
    };

    React.useEffect(() => {
        setRate(Details);
    }, []);
    return (
        <ContainerCard>
            <CardHFullHeader
                title="Staking"
                subtitle="Stake DGZ tokens For great yields"
                setCounter={setCounter}
                count={count}
                firstIcon>
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
            </CardHFullHeader>
            <CardBody firstItem="DGZ Earned" seconditem="777.777 DGz">
                <div className={`${styles.centered}`}>
                    <div>
                        <Image
                            src="/token-dgz.svg"
                            alt="USD"
                            width={50}
                            height={50}
                        />{" "}
                    </div>
                    <h2 className={styles.spacing}>DGZ POOL</h2>
                </div>
            </CardBody>

            <div className={`${styles.body} my-5`}>
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
                                <p className="mt-1"> {name}</p>
                            </div>
                            <div className={styles.adjust}>
                                <p>{info}</p>
                            </div>
                        </div>
                    );
                })}
                <div className={`${styles.stakingProgress} my-4`}>
                    <div className="mb-1">
                        <span>Distributed Tokens</span>{" "}
                    </div>
                    <div className={styles.progressContainer}>
                        <div className={styles.progressBar}> </div>
                    </div>
                    <div className={`${styles.progressInfo} mt-1`}>
                        <span className={styles.yellow}>96.72%</span>
                        <span>193,4471.12457 / 200,000</span>
                    </div>
                </div>
            </div>

            <div className={`${styles.stakingBtn}`}>
                <button
                    className={`${styles.btn} mt-1 mb-3 p-2 mx-auto`}
                    onClick={increaseCounter}>
                    Approve
                </button>
            </div>
        </ContainerCard>
    );
};

export default Staking;
