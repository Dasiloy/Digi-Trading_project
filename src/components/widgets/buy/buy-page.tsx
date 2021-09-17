import Image from "next/image";
import React from "react";

import styles from "../../../styles/BuyPage.module.scss";
import ContainerCard from "../chrome/Card/ContainerCard";
import KeypadInput from "../chrome/KeypadInput/KeypadInput";

const BuyPageStepOne = ({ count, setCounter, title, from }: any) => {
    const increaseCounter = () => {
        setCounter(count + 1);
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <ContainerCard>
            <div className="text-center mb-3">
                <h3 className="mb-1 fw-bold">{title}</h3>
                <h6 className={styles.headingColor}>
                    Buy DGZ with your local currency
                </h6>
            </div>

            <div className={styles.overview}>
                <div className={styles.overviewTop}>
                    <h3>250</h3>
                    <div>
                        <span>MAX</span>
                        <Image
                            src="/preferred-currency-usd.svg"
                            alt="USD"
                            width={40}
                            height={40}
                        />
                        <h3 className="m-0">USD</h3>
                        <Image
                            src="/dropdown-caret.svg"
                            alt="USD"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>

                <div className={styles.overviewBottom}>
                    <p className="m-0">
                        <span>USD</span> to <span>pay with</span>
                    </p>
                    <p className="m-0">15.00 USD - 5,000.00 USD</p>
                </div>
            </div>

            <div className={`mt-5 ${styles.buyExchange}`}>
                <div
                    className={`${styles.buy} ${
                        from === "buy" ? " " : styles.ic2Extra
                    }`}>
                    <div>
                        <Image
                            src="/preferred-currency-usd.svg"
                            alt="USD"
                            width={30}
                            height={30}
                        />{" "}
                        <h3 className="mb-0">USD</h3>
                    </div>
                </div>
                <div className={styles.xchangeIcons}>
                    <Image
                        src="/arrow.svg"
                        width={30}
                        height={25}
                        className={` ${
                            from === "buy" ? " " : styles.ic2Extra
                        }`}
                    />
                    <Image
                        src="/arrow.svg"
                        width={30}
                        height={25}
                        className={`${styles.ic2} ${
                            from === "buy" ? styles.ic2Extra : " "
                        }`}
                    />
                </div>
                <div
                    className={`${styles.sell} ${
                        from === "buy" ? " " : styles.ic2Extra
                    }`}>
                    <div>
                        <Image
                            src="/token-dgz.svg"
                            alt="USD"
                            width={30}
                            height={30}
                        />{" "}
                        <h3>DGZ</h3>
                    </div>
                </div>
            </div>

            <p className="text-center mt-3">1 USD ≈ 33,333 DGZ</p>

            <KeypadInput />

            <button
                className={styles.buyButton}
                onClick={increaseCounter}>
                Buy DGZ
            </button>
        </ContainerCard>
    );
};

export default BuyPageStepOne;
