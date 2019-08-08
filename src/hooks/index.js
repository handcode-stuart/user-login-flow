import { useState, useEffect } from "react";

export const useSplashScreen = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSplash(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return showSplash;
};
