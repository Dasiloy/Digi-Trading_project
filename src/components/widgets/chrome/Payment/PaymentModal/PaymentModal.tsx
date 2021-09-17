import Image from "next/image";
import React from "react";

import styles from "./PaymentModal.module.scss";

const PaymentModal = ({ setIsModalOpen }: any) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <Image
                    src="/logo.svg"
                    alt="USD"
                    width={300}
                    height={300}
                />
                <p>please enable sms notification to continue</p>
                <button className={styles.sms}>
                    enable sms authentication now
                </button>
                <button
                    className="mt-4"
                    onClick={() => setIsModalOpen(false)}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default PaymentModal;
