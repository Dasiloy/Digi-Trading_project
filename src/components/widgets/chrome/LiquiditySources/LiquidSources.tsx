import React, { useState } from "react";

import ContainerCard from "../Card/ContainerCard";
import Cardheader from "../CardHeader/CardHeader";
import SearchBar from "../SearchBar/SearchBar";
import Liquid from "./Liquid";

const data = [
    {
        id: 1,
        name: "testing",
    },
    {
        id: 2,
        name: "testing",
    },
    {
        id: 3,
        name: "testing",
    },
    {
        id: 4,
        name: "testing",
    },
    {
        id: 5,
        name: "testing",
    },
];

const LiquiditySources = ({ count, setCounter }: any) => {
    const [searchData, setSearchData] = useState(data);
    return (
        <ContainerCard>
            <Cardheader
                count={count}
                setCounter={setCounter}
                title="Liquidity Sources"
            />
            <SearchBar Data={data} setSearchData={setSearchData} />
            <Liquid />
        </ContainerCard>
    );
};

export default LiquiditySources;
