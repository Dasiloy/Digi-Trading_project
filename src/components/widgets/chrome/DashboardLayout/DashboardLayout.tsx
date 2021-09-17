import React from "react";

import TopNav from "../TopNav/TopNav";
import styles from "./DashboardLayout.module.scss";

const DashboardLayout = ({ children, topNav }: any) => {
    return (
        <div>
            <TopNav active={topNav} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default DashboardLayout;
