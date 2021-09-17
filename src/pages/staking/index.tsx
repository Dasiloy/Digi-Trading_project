import React from "react";

import Layout from "../../components/widgets/chrome/Layout/Layout";
import SelectExchange from "../../components/widgets/chrome/SelectExchange/SelectExchange";
import Staking from "../../components/widgets/chrome/Staking/Staking";
import TradingPair from "../../components/widgets/chrome/TradingPair/TradingPair";

const StakingPage = () => {
    const [counter, setCounter] = React.useState(1);
    return (
        <Layout
            title="Dashboard"
            topNav="Staking"
            description="Your personal suite for everything crypto">
            {/* <StakingPageStepOne /> */}
            {counter === 1 && (
                <Staking count={counter} setCounter={setCounter} />
            )}
            {/* <SelectExchange /> */}
            {counter === 2 && (
                <SelectExchange
                    count={counter}
                    setCounter={setCounter}
                />
            )}
            {/* <TradingPair /> */}
            {counter === 3 && (
                <TradingPair
                    count={counter}
                    setCounter={setCounter}
                />
            )}
        </Layout>
    );
};

export default StakingPage;
