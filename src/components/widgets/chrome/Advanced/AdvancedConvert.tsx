import React from "react";

import ContainerCard from "../Card/ContainerCard";
import CardHeader from "../CardHeader/CardHeader";
import Advanced from "./Advanced";

const AdvancedConvert = ({ count, setCounter }: any) => {
    return (
        <ContainerCard>
            <CardHeader
                title="Advanced Settings"
                count={count}
                setCounter={setCounter}
            />
            <Advanced count={count} setCounter={setCounter} />
        </ContainerCard>
    );
};

export default AdvancedConvert;
