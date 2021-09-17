import Image from "next/image";
import React from "react";

import styles from "./KeypadInput.module.scss";

const KeypadInput = () => {
    return (
        <div>
            <div className={styles.keyGroup}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>.</button>
                <button>0</button>
                <button>
                    <Image src="/delete.svg" width={80} height={20} />
                </button>
            </div>
        </div>
    );
};

export default KeypadInput;
