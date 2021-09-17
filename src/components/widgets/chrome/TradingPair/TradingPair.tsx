/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useState } from "react";

import tradingPairs from "../../../../helpers/constants/TradingPairs";
import ContainerCard from "../Card/ContainerCard";
import CardHeader from "../CardHeader/CardHeader";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./TradingPair.module.scss";

const TradingPair = ({ count, setCounter }: any) => {
    const [SearchData, setSearchData] = useState(tradingPairs);
    const [checked, setChecked] = useState(false);
    const [checkItem, setCheckItem] = useState(0);

    const increaseCounter = id => {
        setCheckItem(id);
        setChecked(true);
    };

    return (
        <ContainerCard>
            <CardHeader
                title="Select Trading Pair"
                setCounter={setCounter}
                count={count}>
                <span className={`${styles.painted} mx-auto`}>
                    Avaliable on centralised orbit exchange
                </span>
            </CardHeader>
            <SearchBar
                searchData={SearchData}
                setSearchData={setSearchData}
                Data={tradingPairs}
            />
            <div
                className={`${styles.searchOptions} mt-lg-2 mt-2  py-4 mb-2`}>
                {SearchData.length === 0 && (
                    <h2 className="text-center">
                        no matched trading Pair found
                    </h2>
                )}
                {SearchData.length !== 0 &&
                    SearchData.map(item => {
                        const { id, name, prefix } = item;
                        return (
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                            <div
                                key={id}
                                className={styles.currency}
                                onClick={() => increaseCounter(id)}>
                                <span className="mx-2">
                                    <Image
                                        src="/token-bnb.svg"
                                        alt="bnb"
                                        width={30}
                                        height={30}
                                    />{" "}
                                </span>
                                <span className="mr-2">
                                    <Image
                                        src="/token-dgz.svg"
                                        alt="dgz"
                                        width={30}
                                        height={30}
                                    />{" "}
                                </span>
                                <span
                                    className={`${styles.prefix} mx-2 pb--1`}>
                                    {prefix}
                                </span>
                                <span
                                    className={`${styles.name} mx-1 pb--1`}>
                                    {" "}
                                    {name}
                                </span>
                                {checked && checkItem === id && (
                                    <span className={styles.checked}>
                                        <Image
                                            src="/check-double-line.svg"
                                            alt="USD"
                                            width={30}
                                            height={30}
                                        />{" "}
                                    </span>
                                )}
                            </div>
                        );
                    })}
            </div>
        </ContainerCard>
    );
};

export default TradingPair;
