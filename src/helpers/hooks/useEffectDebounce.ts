import { useEffect } from "react";

const useEffectDebounce = (
    func: Function,
    values: [],
    time: number,
) => {
    useEffect(() => {
        const db = setTimeout(() => {
            func();
        }, time);

        return () => clearTimeout(db);
    }, values);
};

export default useEffectDebounce;
