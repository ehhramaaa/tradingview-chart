/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

const chart = ({ symbol }) => {
    const chartConfig = {
        "autosize": true,
        "symbol": symbol,
        "interval": "15",
        "timezone": "exchange",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "save_image": false,
        "calendar": false,
        "studies": [
            "STD;EMA",
            "STD;RSI",
        ],
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.async = true;
        script.innerHTML = JSON.stringify(chartConfig);
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

export default chart