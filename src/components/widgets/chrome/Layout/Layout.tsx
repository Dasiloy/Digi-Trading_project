import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";

import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import styles from "./Layout.module.scss";

export default function Layout({
    children,
    title,
    topNav,
    description,
}: any) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Nav />
            <main className={styles.mainPage}>
                <Header title={title} description={description} />

                <section>
                    <DashboardLayout topNav={topNav}>
                        {children}
                    </DashboardLayout>
                </section>

                <Footer />
            </main>
        </div>
    );
}
