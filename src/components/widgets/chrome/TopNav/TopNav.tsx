/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link";
import React from "react";

import { topNavLinks } from "../../../../helpers/constants/constants";
import styles from "./TopNav.module.scss";

const TopNav = ({ active }: any) => {
    const Movelinks = () => {
        console.log("hello");
    };
    return (
        <div className={styles.topNav}>
            <ul>
                {topNavLinks.map(links => {
                    const { id, name, url } = links;
                    return (
                        <li
                            key={id}
                            onClick={Movelinks}
                            className={
                                active === name ? styles.active : ""
                            }>
                            <Link href={`/${url}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TopNav;
