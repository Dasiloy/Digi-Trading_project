import Image from "next/image";
import React from "react";

import styles from "../../widgets/chrome/Nav/Nav.module.scss";
import NavItem from "./NavItem";
import { INavChild, INavHeader } from "./types";

const NavHeader = ({ title, src, children }: INavHeader) => {
    const imgProps = {
        src,
    };

    return (
        <>
            <div className={styles.navHeaderWrapper}>
                <Image {...imgProps} height={30} width={30} />
                <span className={styles.navHeaderTitle}>{title}</span>
            </div>
            {children && children.map((child: INavChild) => (
                <NavItem
                    key={child.title}
                    title={child.title}
                    url={child.url}
                />
            ))}
        </>
    );
};

export default NavHeader;
