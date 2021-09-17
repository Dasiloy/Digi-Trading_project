import Image from "next/image";
import React, { useEffect } from "react";

import NavHeader from "../../../atoms/Nav/NavHeader";
import { LINKS } from "./links";
import styles from "./Nav.module.scss";

const Nav = () => {
    const socials = [
        {
            name: "Twitter",
            src: "/images/social-twitter.svg",
            width: 30,
            height: 30,
        },
        {
            name: "Medium",
            src: "/images/social-twitter.svg",
            width: 30,
            height: 30,
        },
        {
            name: "Reddit",
            src: "/images/social-twitter.svg",
            width: 30,
            height: 30,
        },
        {
            name: "Tiktok",
            src: "/images/social-twitter.svg",
            width: 30,
            height: 30,
        },
        {
            name: "Instagram",
            src: "/images/social-twitter.svg",
            width: 30,
            height: 30,
        },
        {
            name: "Telegram",
            src: "/images/social-twitter.svg",
            width: 30,
            height: 30,
        },
    ];

    useEffect(() => {
        window.addEventListener("resize", () => {});
    });
    return (
        <nav className={styles.nav}>
            <section className={styles.navigation}>
                <Image
                    alt="Logo"
                    src="/images/Logo.png"
                    width={168}
                    height={55}
                />

                <h1 className={styles.balance}>$77,777.77</h1>

                {/* Nav system */}
                {Object.values(LINKS).map((nav: any) => (
                    <NavHeader
                        key={nav.title}
                        title={nav.title}
                        src="/options.svg"
                        url={nav.url}>
                        {nav.children && nav.children}
                    </NavHeader>
                ))}
            </section>

            {/* Social bar */}
            <div className={styles.socials}>
                {socials.map((social: any) => (
                    <Image
                        key={social.name}
                        src={social.src}
                        height={social.height}
                        width={social.width}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Nav;
