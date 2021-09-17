import React, { useEffect, useState } from "react";

import BuyPageStepOne from "../../components/widgets/buy/buy-page";
import SelectCurrency from "../../components/widgets/buy/select-currency";
import Layout from "../../components/widgets/chrome/Layout/Layout";
import ConfirmPayment from "../../components/widgets/chrome/Payment/ConfirmPayment/ConfirmPayment";
import PaymentModal from "../../components/widgets/chrome/Payment/PaymentModal/PaymentModal";

const BuyPage = () => {
    const [counter, setCounter] = useState(1);
    const [checked, setChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    });
    return (
        <Layout
            title="Dashboard"
            topNav="Buy"
            description="Your personal suite for everything crypto">
            {/* <BuyPageStepOne /> */}
            {counter === 1 && (
                <BuyPageStepOne
                    title="Buy"
                    from="buy"
                    rotateArrow1="ic2"
                    count={counter}
                    setCounter={setCounter}
                />
            )}
            {/* <SelectCurrency/> */}
            {counter === 2 && (
                <SelectCurrency
                    count={counter}
                    setCounter={setCounter}
                    checked={checked}
                    setChecked={setChecked}
                />
            )}
            {/* <SelectPaymentMethod/> */}
            {counter === 3 && (
                <ConfirmPayment
                    count={counter}
                    setCounter={setCounter}
                    setIsModalOpen={setIsModalOpen}
                />
            )}

            {/* PaymentModal */}
            {isModalOpen && (
                <PaymentModal setIsModalOpen={setIsModalOpen} />
            )}
        </Layout>
    );
};

export default BuyPage;
