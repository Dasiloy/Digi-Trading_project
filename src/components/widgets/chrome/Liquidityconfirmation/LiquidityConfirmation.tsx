import Image from "next/image";
import React from "react";

import ContainerCard from "../Card/ContainerCard";
import CardFullHeader from "../CardFullHeader/CardFullHeader";
import styles from "./LiquidityConfirmation.module.scss";

const LiquidityConfirmation = ({ count, setCounter }: any) => {
    return (
        <ContainerCard>
            <CardFullHeader
                title="You will recieve"
                subtitle="Waiting for confirmation"
                count={count}
                setCounter={setCounter}
                firstIcon={false}
            />

            <div className={`${styles.arrowBox} mx-auto`}>
                <span className="mx-1">
                    <Image
                        src="/token-bnb.svg"
                        alt="bnb"
                        width={100}
                        height={200}
                    />{" "}
                </span>
                <span>
                    <Image
                        src="/token-dgz.svg"
                        alt="dgz"
                        width={100}
                        height={200}
                    />{" "}
                </span>
            </div>

            <div className={`${styles.confirmDetails} mb-4`}>
                <h3>Waiting for confirmation</h3>
                <h4 className="mt-3 mb-4">supplying token pair</h4>
                <div className={styles.flex}>
                    <span>1</span>
                    <span>BNB</span>
                </div>
                <div className={styles.flex}>
                    <span>777.77</span>
                    <span>DGZ</span>
                </div>
                <p className="mb-2 mt-3 text-capitalize">
                    confirm this transaction in your wallet
                </p>
            </div>
        </ContainerCard>
    );
};

export default LiquidityConfirmation;
