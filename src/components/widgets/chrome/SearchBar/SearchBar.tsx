import Image from "next/image";
import React, { useEffect, useState } from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = ({ setSearchData, Data }: any) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        setSearchData(Data);
        const newData = Data.filter(item =>
            item.name.includes(searchTerm),
        );
        setSearchData(newData);
    }, [searchTerm]);
    return (
        <div className={styles.searchInput}>
            <div className={styles.searchInputIcon}>
                <Image src="/searchIcon.svg" width={30} height={30} />
            </div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
