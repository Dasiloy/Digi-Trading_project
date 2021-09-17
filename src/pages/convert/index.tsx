import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

import AdvancedConvert from "../../components/widgets/chrome/Advanced/AdvancedConvert";
import Layout from "../../components/widgets/chrome/Layout/Layout";
import CustomToken from "../../components/widgets/chrome/LCustomToken/CustomToken";
import LiquiditySources from "../../components/widgets/chrome/LiquiditySources/LiquidSources";
import SwapBasics from "../../components/widgets/chrome/SwapBasics/SwapBasics";
import styles from "../../styles/Convert.module.scss";

const Details = [
    {
        id: 1,
        name: "Input",
        info: "1 BNB",
    },
    {
        id: 2,
        name: "Rate",
        info: "0.07633 DGZ",
    },
    {
        id: 3,
        name: "Slip",
        info: "0.0000%",
    },
    {
        id: 4,
        name: "Free",
        info: "0.0001 BNB",
    },
    {
        id: 5,
        name: "Output",
        info: "0.07633 DGZ",
    },
];

const ConvertPage = () => {
    const [counter, setCounter] = React.useState(1);
    const [exchanges, setExchanges] = React.useState([]);

    React.useEffect(() => {
        setExchanges(Details);
    }, []);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    });

    return (
        <Layout
            title="Dashboard"
            topNav="Convert"
            description="Your personal suite for everything crypto">
            {/* <ExchangePageStep1/> */}
            {counter === 1 && (
                <SwapBasics
                    title="Convert"
                    firstItem="from"
                    firstItem2="to (est.. )"
                    secondItem2="777 777 75.333 Balannce"
                    secondItem="77 775"
                    subtitle="Quickly swap from one crypto to another"
                    count={counter}
                    setCounter={setCounter}
                    exchanges={exchanges}>
                    <div className={`${styles.convertExtra}`}>
                        <h6 className="mb-3"> View pair analytics</h6>
                    </div>
                </SwapBasics>
            )}
            {/* AdvancedSettings */}
            {counter === 2 && (
                <AdvancedConvert
                    count={counter}
                    setCounter={setCounter}
                />
            )}
            {/* LiquiditySources */}
            {counter === 3 && (
                <LiquiditySources
                    count={counter}
                    setCounter={setCounter}
                />
            )}
            {/* CustomTokensInput */}
            {counter === 4 && (
                <CustomToken
                    count={counter}
                    setCounter={setCounter}
                    title="List is empty"
                    details="cannot find any custom tokens"
                    alt="empty token"
                    href="/digibles.svg">
                    <div className={`${styles.convertButton}`}>
                        <p className={`${styles.addToken} mt-3`}>
                            Add custom tokens
                        </p>
                        <button
                            className="mx-3 mb-1"
                            onClick={() => setCounter(5)}>
                            <FaPlus className={styles.Plus} />
                        </button>
                    </div>
                </CustomToken>
            )}
            {/* CustomTokensConfirm */}
            {counter === 5 && (
                <CustomToken
                    count={counter}
                    setCounter={setCounter}
                    title="Cannot add digibleZ"
                    href="/token-dgz.svg"
                    alt="add token"
                    details="This token has already been used">
                    <div className={`${styles.convertButtonBack}`}>
                        <button
                            className="mx-3 mb-1"
                            onClick={() => setCounter(4)}>
                            <FaTimes className={styles.Plus} />
                        </button>
                        <button className="mx-3">Reset</button>
                        <button
                            className="mx-3 mb-1"
                            onClick={() => setCounter(4)}>
                            <FaMinus className={styles.Plus} />
                        </button>
                    </div>
                </CustomToken>
            )}
        </Layout>
    );
};

export default ConvertPage;
