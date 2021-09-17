/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useState } from "react";

import currency from "../../../helpers/constants/currency";
import styles from "../../../styles/BuyPage.module.scss";
import ContainerCard from "../chrome/Card/ContainerCard";
import CardHeader from "../chrome/CardHeader/CardHeader";
import SearchBar from "../chrome/SearchBar/SearchBar";

const SelectCurrency = ({
    count,
    setCounter,
    checked,
    setChecked,
}: any) => {
    const [SearchData, setSearchData] = useState(currency);
    const [checkItem, setCheckItem] = useState(0);

    const increaseCounter = id => {
        setCheckItem(id);
        setChecked(true);
        setTimeout(() => {
            setCounter(count + 1);
        }, 2000);
    };

    return (
        <ContainerCard>
            <CardHeader
                title="Select Currency"
                setCounter={setCounter}
                count={count}
            />
            <SearchBar
                searchData={SearchData}
                setSearchData={setSearchData}
                Data={currency}
            />
            <div
                className={`${styles.searchOptions} mt-lg-2 mt-2  py-3`}>
                {SearchData.length === 0 && (
                    <h2 className="text-center">
                        no matched currency found
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
                                        src="/token-dgz.svg"
                                        alt="USD"
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

export default SelectCurrency;
