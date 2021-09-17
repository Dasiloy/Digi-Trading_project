/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import React, { useEffect, useState } from "react";

import ContainerCard from "../Card/ContainerCard";
import CardHeader from "../CardHeader/CardHeader";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./SelectExchange.module.scss";

const centralized = [
    {
        id: 1,
        name: "Kuccin",
    },
    {
        id: 2,
        name: "Probbit",
    },
    {
        id: 3,
        name: "Hobbit",
    },
    {
        id: 4,
        name: "Cointiger",
    },
];

const deCentralized = [
    {
        id: 5,
        name: "PancakeSwap",
    },
    {
        id: 6,
        name: "Lbank",
    },
    {
        id: 7,
        name: "Dodoex",
    },
    {
        id: 8,
        name: "DigizbleZ",
    },
];

const data = [...centralized, ...deCentralized];

const SelectExchange = ({ count, setCounter }: any) => {
    const [searchData, setSearchData] = useState([data]);
    const [isCentralized, setIsCentralized] = useState(centralized);
    const [isDecentralized, setIsDeCentralized] = useState(
        deCentralized,
    );
    const [checked, setChecked] = useState(false);
    const [checkItem, setCheckItem] = useState(0);

    const filteredDecentralised = () => {
        const newData = searchData.filter(item => item.id >= 5);
        setIsDeCentralized(newData);
    };

    const filteredCentralised = () => {
        const newData = searchData.filter(item => item.id < 5);
        setIsCentralized(newData);
    };

    const increaseCounter = id => {
        setCheckItem(id);
        setChecked(true);
        setTimeout(() => {
            setCounter(count + 1);
        }, 1000);
    };

    useEffect(() => {
        setIsCentralized(centralized);
        setIsDeCentralized(deCentralized);
        filteredCentralised();
        filteredDecentralised();
    }, [searchData]);
    return (
        <ContainerCard>
            <CardHeader
                title="Exchange"
                setCounter={setCounter}
                count={count}>
                <span className={`${styles.painted} mx-auto`}>
                    from those that provide DGZ trading pairs
                </span>
            </CardHeader>
            <SearchBar setSearchData={setSearchData} Data={data} />
            <div className={`${styles.exchangePairs} py-2`}>
                {searchData.length > 0 ? (
                    <div className={styles.filled}>
                        {/* centralized */}
                        <div
                            className={`${styles.centralized}  px-2 px-md-3 mb-4 mt-4 pb-1`}>
                            <h2 className="pt-2">
                                CEX / Centralised exchanges
                            </h2>
                            <div
                                className={`${styles.centralizedItem} mb-1 `}>
                                {isCentralized.length > 0 && (
                                    <div>
                                        {isCentralized.map(item => {
                                            const { id } = item;
                                            return (
                                                <div
                                                    key={item.id}
                                                    onClick={() =>
                                                        increaseCounter(
                                                            id,
                                                        )
                                                    }
                                                    className={`${styles.item}  my-1`}>
                                                    <span
                                                        className={
                                                            styles.span
                                                        }>
                                                        <Image
                                                            src="/ex-ic.svg"
                                                            alt="USD"
                                                            width={20}
                                                            height="15px"
                                                        />{" "}
                                                    </span>
                                                    <span className="pb-1">
                                                        {item.name}
                                                    </span>
                                                    {checked &&
                                                        checkItem ===
                                                            item.id && (
                                                            <span
                                                                className={
                                                                    styles.checked
                                                                }>
                                                                <Image
                                                                    src="/check-double-line.svg"
                                                                    alt="USD"
                                                                    width={
                                                                        30
                                                                    }
                                                                    height="25px"
                                                                />{" "}
                                                            </span>
                                                        )}
                                                </div>
                                            );
                                        })}
                                        {isCentralized.length < 1 && (
                                            <h2>
                                                no centralized
                                                exchange
                                            </h2>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* decentralized */}
                        <div
                            className={`${styles.centralized}  px-2 px-md-3 mb-4 mt-4 pb-1`}>
                            <h2 className="pt-2">
                                DEX / Decentralised exchanges
                            </h2>
                            <div
                                className={`${styles.centralizedItem} mb-1 `}>
                                {isDecentralized.length > 0 && (
                                    <div>
                                        {isDecentralized.map(item => {
                                            const { id } = item;
                                            return (
                                                <div
                                                    key={item.id}
                                                    onClick={() =>
                                                        increaseCounter(
                                                            id,
                                                        )
                                                    }
                                                    className={`${styles.item}  my-1`}>
                                                    <span
                                                        className={
                                                            styles.span
                                                        }>
                                                        <Image
                                                            src="/ex-ic.svg"
                                                            alt="USD"
                                                            width={20}
                                                            height="15px"
                                                        />{" "}
                                                    </span>
                                                    <span className="pb-1">
                                                        {item.name}
                                                    </span>
                                                    {checked &&
                                                        checkItem ===
                                                            item.id && (
                                                            <span
                                                                className={
                                                                    styles.checked
                                                                }>
                                                                <Image
                                                                    src="/check-double-line.svg"
                                                                    alt="USD"
                                                                    width={
                                                                        30
                                                                    }
                                                                    height="25px"
                                                                />{" "}
                                                            </span>
                                                        )}
                                                </div>
                                            );
                                        })}
                                        {isDecentralized.length <
                                            1 && (
                                            <h2>
                                                no centralized
                                                exchange
                                            </h2>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 className={styles.empty}>
                        no matching exchange found
                    </h2>
                )}
            </div>
        </ContainerCard>
    );
};

export default SelectExchange;
