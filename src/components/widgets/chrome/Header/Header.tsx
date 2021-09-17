import Image from "next/image";
import React, { useState } from "react";
import { Badge, Button } from "reactstrap";

import styles from "./Header.module.scss";

const Header = ({ title, description }) => {
    const [authed, setAuthed] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [tooltips, setTooltips] = useState(true);
    const [zLock, setZLock] = useState(false);
    const [shoppingBasket, setShoppingBasket] = useState(true);

    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.heading}>
                    {title}
                    {title === "Dashboard" && (
                        <span className={styles.vipStatus}>
                            {" "}
                            Diamond
                        </span>
                    )}
                </h1>
                <span className={styles.subheading}>
                    {description}
                </span>
            </div>
            <div className={styles.connectWalletWrapper}>
                <Image
                    onClick={() => setAuthed(!authed)}
                    alt="Logo"
                    src={`/profile-icon-small${
                        authed ? "" : "-ko"
                    }.svg`}
                    width={45}
                    height={45}
                />

                <Button
                    className={styles.connectWalletAddress}
                    color={authed ? "warning" : "secondary"}
                    outline>
                    {authed ? "0x1337lol420..." : "Connect Wallet"}
                </Button>
            </div>

            <div className={styles.actionableCTAWrapper}>
                <Button
                    onClick={() => setDarkMode(!darkMode)}
                    style={{
                        borderColor: darkMode ? "#B757F2" : "#F0B90B",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="Dark Mode CTA"
                        src={`/${
                            darkMode ? "dark" : "light"
                        }-mode.svg`}
                        width={25}
                        height={25}
                    />
                </Button>

                <Button
                    onClick={() => setTooltips(!tooltips)}
                    style={{
                        borderColor: tooltips ? "#F0B90B" : "#707070",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="Tooltip Toggle CTA"
                        src={`/tooltips-${
                            tooltips ? "on" : "off"
                        }.svg`}
                        width={25}
                        height={25}
                    />
                </Button>

                <Button
                    onClick={() => setZLock(!zLock)}
                    style={{
                        borderColor: zLock ? "#F0B90B" : "#707070",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="ZLock CTA"
                        src={`/zlock-${zLock ? "on" : "off"}.svg`}
                        width={25}
                        height={25}
                    />
                </Button>

                <Button
                    onClick={() => setShoppingBasket(!shoppingBasket)}
                    style={{
                        borderColor: shoppingBasket
                            ? "#F0B90B"
                            : "#707070",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="Shopping Basket CTA"
                        src={`/shopping-basket-${
                            shoppingBasket ? "used" : "unused"
                        }.svg`}
                        width={25}
                        height={25}
                    />
                    <Badge
                        style={{
                            border: `solid 1px ${
                                shoppingBasket ? "#0AAE2E" : "#707070"
                            }`,
                            color: shoppingBasket
                                ? "#0AAE2E"
                                : "#707070",
                        }}
                        className={styles.actionableCTABadge}>
                        10
                    </Badge>
                </Button>

                {/* <Button
                    onClick={() => setShoppingBasket(!shoppingBasket)}
                    style={{
                        borderColor: shoppingBasket
                            ? "#F0B90B"
                            : "#707070",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="Shopping Basket CTA"
                        src={`/notifications-${
                            shoppingBasket ? "new" : "old"
                        }.svg`}
                        width={25}
                        height={25}
                    />
                    <Badge
                        style={{
                            border: `solid 1px ${
                                shoppingBasket ? "#F60B0B" : "#707070"
                            }`,
                            color: shoppingBasket
                                ? "#F60B0B"
                                : "#707070",
                        }}
                        className={styles.actionableCTABadge}>
                        33
                    </Badge>
                </Button>

                <Button
                    onClick={() => setZLock(!zLock)}
                    style={{
                        borderColor: "#F0B90B",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="ZLock CTA"
                        src="/network-binance.svg"
                        width={25}
                        height={25}
                    />
                </Button>

                <Button
                    onClick={() => setZLock(!zLock)}
                    style={{
                        borderColor: "#F0B90B",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="Preferred Currency CTA"
                        src="/preferred-currency-usd.svg"
                        width={25}
                        height={25}
                    />
                </Button>

                <Button
                    onClick={() => setZLock(!zLock)}
                    style={{
                        borderColor: "#F0B90B",
                    }}
                    className={styles.actionableCTA}
                    outline>
                    <Image
                        className={styles.actionableCTAIcon}
                        alt="Preferred Language CTA"
                        src="/preferred-language-usa.svg"
                        width={25}
                        height={25}
                    />
                </Button> */}
            </div>
        </header>
    );
};

export default Header;
