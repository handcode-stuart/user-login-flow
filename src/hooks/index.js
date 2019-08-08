import { useState, useEffect } from "react";

export const useFlashScreen = () => {
    const [showFlash, setShowFlash] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowFlash(false);
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return showFlash;
};
