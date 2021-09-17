import Image from "next/image";
import React, { useState } from "react";

import ContainerCard from "../Card/ContainerCard";
import CardHeader from "../CardHeader/CardHeader";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./CustomToken.module.scss";

const Token = [
    {
        id: 1,
        name: "123gdjdmodfrs67",
    },
    {
        id: 2,
        name: "123gdjdmodfrs67",
    },
    {
        id: 3,
        name: "123gdjdmodfrs67",
    },
    {
        id: 4,
        name: "123gdjdmodfrs67",
    },
];

const CustomToken = ({
    count,
    setCounter,
    children,
    href,
    info,
    title,
    details,
}: any) => {
    const [SearchData, setSearchData] = useState([]);

    React.useEffect(() => {
        setSearchData(Token);
    }, []);
    return (
        <ContainerCard>
            <CardHeader
                title="Custom Token"
                count={count}
                setCounter={setCounter}
            />
            <SearchBar setSearchData={setSearchData} Data={Token} />
            <div className={styles.tokenBody}>
                <div className={styles.tokenImage}>
                    <Image
                        src={href}
                        alt={info}
                        width={200}
                        height={250}
                    />
                </div>
                <h4 className={styles.tokenTitle}>{title}</h4>
                <p
                    className={`${
                        count === 4
                            ? styles.tokenDetails
                            : styles.tokenDetailsGreen
                    } `}>
                    {details}
                </p>
            </div>
            <div
                className={`${
                    count === 4
                        ? styles.tokenFooterCenter
                        : styles.tokenFooterBetween
                } px-4 py-4`}>
                {children}
            </div>
        </ContainerCard>
    );
};

export default CustomToken;
