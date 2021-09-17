import React, { useState } from "react";

import Layout from "../../components/widgets/chrome/Layout/Layout";
import LiquidityConfirmation from "../../components/widgets/chrome/Liquidityconfirmation/LiquidityConfirmation";
import LiquidityRecieve from "../../components/widgets/chrome/LiquidityRecieve/LiquidityRecieve";
import LiquiditySettings from "../../components/widgets/chrome/LiquiditySettings/LiquiditySettings";
import SwapBasics from "../../components/widgets/chrome/SwapBasics/SwapBasics";
import styles from "../../styles/Liquidity.module.scss";

const Details = [
    {
        id: 1,
        name: "DGZ per BNB",
        info: "3333.33",
    },
    {
        id: 2,
        name: "BNB per DGZ",
        info: "0.003333",
    },
    {
        id: 3,
        name: "Share of Pool",
        info: "<0.0000%",
    },
];

const LiquidityPage = () => {
    const [counter, setCounter] = React.useState(1);
    const [exchanges, setExchanges] = React.useState([]);
    const [isEnableBnb, setIsEnableBnb] = useState(false);

    React.useEffect(() => {
        setExchanges(Details);
    }, []);

    return (
        <Layout
            title="Dashboard"
            topNav="Liquidity"
            description="Your personal suite for everything crypto">
            {/* <ExchangePageStep1/> */}
            {counter === 1 && (
                <SwapBasics
                    title="Liquidity"
                    firstItem="first token"
                    firstItem2="select a trading pair"
                    secondItem2="777 77777.33 balance"
                    secondItem="77 775 balance"
                    subtitle="Add liquidity to recieve DGZ-LP tokens for staking"
                    count={counter}
                    isPlus
                    setCounter={setCounter}
                    exchanges={exchanges}>
                    <div className={styles.Extra}>
                        <h5 className={`${styles.title}`}>
                            find other lp tokens
                        </h5>
                        <h6 className={`${styles.subTitle} mb-4`}>
                            if you donot see the pool you joined
                        </h6>
                        <p className={`${styles.info} px-md-3`}>
                            by adding liquidity you will earn 0.17% of
                            all trades on this share proportional to
                            your share of the pool
                        </p>
                        <p className={`${styles.info} px-md-3`}>
                            Fees are added to the pool, accrue in real
                            time and can be claimed by withdrawing
                            your liquidity.
                        </p>
                        <button
                            type="button"
                            onClick={() =>
                                setIsEnableBnb(!isEnableBnb)
                            }
                            className={`${styles.Enable} my-3 py-2`}>
                            {isEnableBnb
                                ? "Enabling BNB..."
                                : "Enable BNB"}
                        </button>
                    </div>
                </SwapBasics>
            )}
            {/* <AfdvancedSettings */}
            {counter === 2 && (
                <LiquiditySettings
                    count={counter}
                    title="Advanced Settings"
                    subtitle="Adjust the settings to suit your needs"
                    setCounter={setCounter}
                />
            )}
            {/* <ImportPool> */}
            {counter === 3 && (
                <LiquiditySettings
                    count={counter}
                    title="Import Pool"
                    subtitle="Import an existing pools"
                    setCounter={setCounter}
                />
            )}
            {/* <LiquidityRecieve/> */}
            {counter === 4 && (
                <LiquidityRecieve
                    count={counter}
                    setCounter={setCounter}
                />
            )}
            {/* LiquidityConfirmation */}
            {counter === 5 && (
                <LiquidityConfirmation
                    count={counter}
                    setCounter={setCounter}
                />
            )}
        </Layout>
    );
};

export default LiquidityPage;
