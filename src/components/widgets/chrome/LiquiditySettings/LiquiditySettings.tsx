import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi";

import ContainerCard from "../Card/ContainerCard";
import CardFullHeader from "../CardFullHeader/CardFullHeader";
import AdvancedSettings from "./AdvancedSettings";
import styles from "./AdvancedSettings.module.scss";

const LiquiditySettings = ({
    count,
    setCounter,
    title,
    subtitle,
}: any) => {
    const [isRefresh, setIsRefresh] = useState(false);

    return (
        <ContainerCard>
            <CardFullHeader
                title={title}
                count={count}
                setCounter={setCounter}
                subtitle={subtitle}>
                <div className={styles.end}>
                    <button onClick={() => setIsRefresh(!isRefresh)}>
                        <BiRefresh
                            className={`${
                                isRefresh
                                    ? styles.animateRefresh
                                    : styles.refresh
                            }`}
                        />
                    </button>
                </div>
            </CardFullHeader>
            <AdvancedSettings count={count} setCounter={setCounter} />
        </ContainerCard>
    );
};

export default LiquiditySettings;
