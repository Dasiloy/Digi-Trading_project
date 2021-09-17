import Image from "next/image";
import React from "react";

import Layout from "../../components/widgets/chrome/Layout/Layout";
import SelectExchange from "../../components/widgets/chrome/SelectExchange/SelectExchange";
import SwapBasics from "../../components/widgets/chrome/SwapBasics/SwapBasics";
import TradingPair from "../../components/widgets/chrome/TradingPair/TradingPair";
import styles from "../../styles/Exchange.module.scss";

const Details = [
    {
        id: 1,
        name: "price",
        info: "+0.007707%",
    },
    {
        id: 2,
        name: "+2% Depth",
        info: "$813,415.81",
    },
    {
        id: 3,
        name: "-2%",
        info: "$361415.63",
    },
    {
        id: 4,
        name: "Volume",
        info: "10,222,495",
    },
    {
        id: 5,
        name: "Volume %",
        info: "0.077%",
    },
];

const ExchangeTradingPage = () => {
    const [counter, setCounter] = React.useState(1);
    const [exchanges, setExchanges] = React.useState([]);

    React.useEffect(() => {
        setExchanges(Details);
    }, []);

    return (
        <Layout
            title="Dashboard"
            topNav="Exchange Trading"
            description="Your personal suite for everything crypto">
            {/* <ExchangePageStep1/> */}
            {counter === 1 && (
                <SwapBasics
                    title="Exchange Trading"
                    firstItem="select an exchange"
                    firstItem2="select a trading pair"
                    secondItem2="77 trading pairs avaliable"
                    secondItem="7 Exchanges avaliable"
                    subtitle="Trade DGZ on some of the best CEXes / DEXes"
                    count={counter}
                    isExchange
                    isPlus
                    setCounter={setCounter}
                    exchanges={exchanges}>
                    <div
                        className={`${styles.exchangeMore} mt-5 mb-2`}>
                        <h5 className="my-3">
                            Who are Horbit <span>CEX</span>?
                        </h5>
                        <p className="my-3">
                            Founded in January 2018 and registered in
                            both Hong Kong and Estonia, with its core
                            team members from China, USA and Taiwan.
                            Hotbit is currently based in Shanghai and
                            Taipei. So far, Hotbit has been running
                            smoothly for 29 months. According to
                            CoinMarketCap, untill October 14th, 2019,
                            Hotbit had listed 547 trading pairs in
                            total and was ranked No. 3 among all
                            exchanges regarding the number of types of
                            cryptocurrency projects listed. Click here
                            to read more.
                        </p>
                        <div className={`${styles.exchangeFooter}`}>
                            <div className={styles.footerDetails}>
                                <div className="mb-1">
                                    <div className={styles.icons}>
                                        <Image
                                            src="/trade-ic1.svg"
                                            alt="USD"
                                            width={15}
                                            height={15}
                                        />{" "}
                                    </div>
                                    <span>
                                        https://www.hotbit.io/
                                    </span>
                                </div>
                                <div className="mb-1">
                                    <div className={styles.icons}>
                                        <Image
                                            src="/trade-ic5.svg"
                                            alt="USD"
                                            width={15}
                                            height={15}
                                        />{" "}
                                    </div>
                                    <span>Hotbit Exchange</span>
                                </div>
                                <div className="mb-1">
                                    <div className={styles.icons}>
                                        <Image
                                            src="/trade-ic3.svg"
                                            alt="USD"
                                            width={15}
                                            height={15}
                                        />{" "}
                                    </div>
                                    <span>Hotbit Chat</span>
                                </div>
                                <div className="mb-1">
                                    <div className={styles.icons}>
                                        <Image
                                            src="/trade-ic2.svg"
                                            alt="USD"
                                            width={15}
                                            height={15}
                                        />{" "}
                                    </div>
                                    <span>Hotbit Fees</span>
                                </div>
                                <div className="mb-1">
                                    <div className={styles.icons}>
                                        <Image
                                            src="/trade-ic4.svg"
                                            alt="USD"
                                            width={15}
                                            height={15}
                                        />{" "}
                                    </div>
                                    <span>Hotbit on Twitter</span>
                                </div>
                            </div>
                            <div className={styles.dark}>
                                {" "}
                                <Image
                                    src="/ex-ic.svg"
                                    alt="ex-ic"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.footerExtra}>
                            <div className="mx-1">
                                {" "}
                                <Image
                                    src="/playstore.svg"
                                    alt="ex-ic"
                                    width={150}
                                    height={50}
                                />
                            </div>{" "}
                            <div>
                                {" "}
                                <Image
                                    src="/apple-store.svg"
                                    alt="ex-ic"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </SwapBasics>
            )}
            {/* Select Exchange */}
            {counter === 2 && (
                <SelectExchange
                    count={counter}
                    setCounter={setCounter}
                />
            )}
            {/* Select Trading Pairs */}
            {counter === 3 && (
                <TradingPair
                    count={counter}
                    setCounter={setCounter}
                />
            )}
        </Layout>
    );
};

export default ExchangeTradingPage;
