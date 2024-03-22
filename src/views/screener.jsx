/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

const screener = () => {

    const config = {
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "defaultScreen": "general",
        "market": "crypto",
        "showToolbar": true,
        "colorTheme": "dark",
        "locale": "eng",
        "isTransparent": false
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.async = true;
        script.innerHTML = JSON.stringify(config);
        document.querySelector('.tradingview-widget-container').appendChild(script);

        // Membersihkan skrip saat komponen unmount
        return () => {
            document.querySelector('.tradingview-widget-container').removeChild(script);
        };
    }, []);

    return (
        <div className="tradingview-widget-container">
        </div>
    )
}

export default screener