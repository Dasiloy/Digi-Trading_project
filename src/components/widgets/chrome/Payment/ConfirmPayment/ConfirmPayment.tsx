import React, { useEffect, useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

import ContainerCard from "../../Card/ContainerCard";
import CardHeader from "../../CardHeader/CardHeader";
import styles from "./ConfirmPayment.module.scss";

const ConfirmPayment = ({
    count,
    setCounter,
    setIsModalOpen,
}: any) => {
    const [idChecked, setIdChecked] = useState(0);
    const [isTimeOut, setIsTimeOut] = useState(false);
    const [timer, setTimer] = useState(60);

    const handleClick = id => {
        setIdChecked(id);
    };

    const handleTimeout = () => {
        setIsTimeOut(!isTimeOut);
        if (isTimeOut) {
            setTimer(60);
        }
    };

    useEffect(() => {
        if (timer === 0) {
            setIsTimeOut(true);
        }
        const counter =
            timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(counter);
    }, [timer]);
    return (
        <ContainerCard>
            <CardHeader
                title="Select Payment Method"
                setCounter={setCounter}
                count={count}
            />
            {/* flat channels */}
            <section className={styles.flatChannel}>
                <div className={`${styles.firstChild}  px-3 `}>
                    <article>
                        <h3>Flat channels</h3>
                    </article>
                    <article>
                        <h3>Price</h3>
                    </article>
                </div>
                <div className={`${styles.secondChild} px-3 `}>
                    <article className={styles.secondChildFlex}>
                        <AiFillBank className={styles.bankIcon} />
                        <div>
                            <span className={styles.bold}>Bank</span>
                            <div className={styles.bankDetails}>
                                <span className={styles.bankHeader}>
                                    5478909****0967
                                </span>
                                <button
                                    type="button"
                                    className={styles.bankBtn}>
                                    Change Card
                                </button>
                            </div>
                        </div>
                    </article>
                    <article className={styles.bankUSD}>
                        <h6>
                            250 <span>USD</span>
                        </h6>
                        <button
                            type="button"
                            onClick={() => handleClick(1)}
                            className={`${
                                idChecked === 1
                                    ? styles.checkBtnCheck
                                    : styles.checkBtn
                            }`}>
                            <FaCheck />
                        </button>
                    </article>
                </div>
            </section>

            {/* P2P Trading */}
            <section className={`${styles.P2PTrading} mt-5`}>
                <div className={`${styles.firstChild}  px-3 `}>
                    <article>
                        <h3>P2P Trading</h3>
                    </article>
                    <article>
                        <h3>Price</h3>
                    </article>
                </div>
                <div className={`${styles.secondChild} px-3 mb-2`}>
                    <article className={styles.secondChildFlex}>
                        <AiFillBank className={styles.bankIcon} />
                        <div className={styles.info}>
                            <span>AirtTM</span>
                        </div>
                    </article>
                    <article className={styles.bankUSD}>
                        <h6>
                            250 <span>USD</span>
                        </h6>
                        <button
                            type="button"
                            onClick={() => handleClick(2)}
                            className={`${
                                idChecked === 2
                                    ? styles.checkBtnCheck
                                    : styles.checkBtn
                            }`}>
                            <FaCheck />
                        </button>
                    </article>
                </div>
                <div className={`${styles.thirdChild} px-3`}>
                    <article className={styles.thirdChildFlex}>
                        <AiFillBank className={styles.bankIcon} />
                        <div className={styles.info}>
                            <span>Skrill </span>
                        </div>
                    </article>
                    <article className={styles.bankUSD}>
                        <h6>
                            250 <span>USD</span>
                        </h6>
                        <button
                            type="button"
                            className={`${
                                idChecked === 3
                                    ? styles.checkBtnCheck
                                    : styles.checkBtn
                            }`}
                            onClick={() => handleClick(3)}>
                            <FaCheck />
                        </button>
                    </article>
                </div>
            </section>

            {/* Private info */}
            <div className={`${styles.more_info} px-4`}>
                {isTimeOut ? (
                    <div>
                        <button
                            type="button"
                            onClick={handleTimeout}
                            className={styles.btnTimeout}>
                            please refrwsh to get the new price
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className={styles.red}>
                            in other to protect the security of assets
                            we will implement T+1 withdrawal
                            retrsictions on purchases{" "}
                        </p>
                        <p className={styles.smaller}>
                            {timer > 0 ? `${timer}s` : " "}
                        </p>
                    </div>
                )}
            </div>

            <div className={`${styles.cardFooter}  px-4 py-3`}>
                <div>
                    <span className={styles.smallerTop}>
                        You will pay
                        <br />
                        777.77{" "}
                    </span>

                    <span className={styles.smallText}>USD</span>
                </div>
                <button
                    className={styles.btnConfirm}
                    onClick={() => setIsModalOpen(true)}>
                    confirm (33)
                </button>
            </div>
        </ContainerCard>
    );
};

export default ConfirmPayment;
