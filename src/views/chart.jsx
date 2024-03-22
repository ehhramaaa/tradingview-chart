/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

const chart = () => {
    let symbol = [
        "BINANCE:ETHUSDT.P", "BINANCE:1000SHIBUSDT.P", "BINANCE:ONDOUSDT.P", "BINANCE:DOGEUSDT.P", "BINANCE:BTCDOMUSDT.P", "BINANCE:SOLUSDT.P", "BINANCE:1000PEPEUSDT.P", "BINANCE:MANTAUSDT.P", "BINANCE:MATICUSDT.P", "BINANCE:XRPUSDT.P", "BINANCE:ADAUSDT.P", "BINANCE:ARBUSDT.P", "BINANCE:FTMUSDT.P", "BINANCE:OPUSDT.P", "BINANCE:WIFUSDT.P", "BINANCE:ICPUSDT.P", "BINANCE:AVAXUSDT.P", "BINANCE:TIAUSDT.P", "BINANCE:FILUSDT.P", "BINANCE:INJUSDT.P", "BINANCE:DOTUSDT.P", "BINANCE:RNDRUSDT.P", "BINANCE:GALAUSDT.P", "BINANCE:SUIUSDT.P", "BINANCE:SANDUSDT.P", "BINANCE:ORDIUSDT.P", "BINANCE:STRKUSDT.P", "BINANCE:RUNEUSDT.P", "BINANCE:WLDUSDT.P", "BINANCE:NEARUSDT.P", "BINANCE:APTUSDT.P", "BINANCE:DYDXUSDT.P", "BINANCE:CKBUSDT.P", "BINANCE:UNIUSDT.P", "BINANCE:SEIUSDT.P", "BINANCE:PYTHUSDT.P", "BINANCE:GRTUSDT.P", "BINANCE:ALTUSDT.P", "BINANCE:ENSUSDT.P", "BINANCE:CHRUSDT.P", "BINANCE:AXSUSDT.P", "BINANCE:DYMUSDT.P", "BINANCE:APEUSDT.P", "BINANCE:TRBUSDT.P", "BINANCE:JUPUSDT.P", "BINANCE:MEMEUSDT.P", "BINANCE:SNXUSDT.P", "BINANCE:CRVUSDT.P", "BINANCE:XAIUSDT.P", "BINANCE:WAVESUSDT.P", "BINANCE:COTIUSDT.P", "BINANCE:LDOUSDT.P", "BINANCE:CTKUSDT.P", "BINANCE:JTOUSDT.P", "BINANCE:AAVEUSDT.P", "BINANCE:GTCUSDT.P", "BINANCE:AGIXUSDT.P", "BINANCE:LUNA2USDT.P", "BINANCE:IMXUSDT.P", "BINANCE:ALICEUSDT.P", "BINANCE:GMTUSDT.P", "BINANCE:EOSUSDT.P", "BINANCE:OCEANUSDT.P", "BINANCE:COMPUSDT.P", "BINANCE:CFXUSDT.P", "BINANCE:MTLUSDT.P", "BINANCE:ZETAUSDT.P", "BINANCE:BAKEUSDT.P", "BINANCE:HOTUSDT.P", "BINANCE:QNTUSDT.P", "BINANCE:SUSHIUSDT.P", "BINANCE:NEOUSDT.P", "BINANCE:API3USDT.P", "BINANCE:QTUMUSDT.P", "BINANCE:1INCHUSDT.P", "BINANCE:WOOUSDT.P", "BINANCE:TRXUSDT.P", "BINANCE:KSMUSDT.P", "BINANCE:KAVAUSDT.P", "BINANCE:LPTUSDT.P", "BINANCE:LEVERUSDT.P", "BINANCE:AUDIOUSDT.P", "BINANCE:RENUSDT.P", "BINANCE:C98USDT.P", "BINANCE:CELOUSDT.P", "BINANCE:BLURUSDT.P", "BINANCE:LSKUSDT.P", "BINANCE:MKRUSDT.P", "BINANCE:STORJUSDT.P", "BINANCE:ROSEUSDT.P", "BINANCE:HIGHUSDT.P", "BINANCE:ACEUSDT.P", "BINANCE:RADUSDT.P", "BINANCE:ARKUSDT.P", "BINANCE:OXTUSDT.P", "BINANCE:OMUSDT.P", "BINANCE:HFTUSDT.P", "BINANCE:BSVUSDT.P", "BINANCE:TONUSDT.P", "BINANCE:MBLUSDT.P", "BINANCE:TWTUSDT.P", "BINANCE:1000BONKUSDT.P", "BINANCE:1000LUNCUSDT.P", "BINANCE:BIGTIMEUSDT.P", "BINANCE:1000RATSUSDT.P", "BINANCE:PIXELUSDT.P", "BINANCE:JASMYUSDT.P", "BINANCE:LRCUSDT.P", "BINANCE:1000SATSUSDT.P", "BINANCE:ATOMUSDT.P", "BINANCE:FETUSDT.P", "BINANCE:LTCUSDT.P", "BINANCE:1000XECUSDT.P", "BINANCE:CHZUSDT.P", "BINANCE:ALGOUSDT.P", "BINANCE:ZILUSDT.P", "BINANCE:PEOPLEUSDT.P", "BINANCE:XLMUSDT.P", "BINANCE:STXUSDT.P", "BINANCE:VETUSDT.P", "BINANCE:TLMUSDT.P", "BINANCE:NMRUSDT.P", "BINANCE:XVSUSDT.P", "BINANCE:USTCUSDT.P", "BINANCE:DEFIUSDT.P", "BINANCE:GLMRUSDT.P", "BINANCE:MOVRUSDT.P", "BINANCE:ETHWUSDT.P", "BINANCE:IDEXUSDT.P", "BINANCE:BICOUSDT.P", "BINANCE:CAKEUSDT.P", "BINANCE:ORBSUSDT.P", "BINANCE:BONDUSDT.P", "BINANCE:HIFIUSDT.P", "BINANCE:WAXPUSDT.P", "BINANCE:STPTUSDT.P", "BINANCE:PHBUSDT.P", "BINANCE:MAVIAUSDT.P", "BINANCE:FRONTUSDT.P", "BINANCE:STEEMUSDT.P", "BINANCE:LINKUSDT.P", "BINANCE:1000FLOKIUSDT.P", "BINANCE:ENJUSDT.P", "BINANCE:XMRUSDT.P", "BINANCE:ONEUSDT.P", "BINANCE:RLCUSDT.P", "BINANCE:PORTALUSDT.P", "BINANCE:OMGUSDT.P", "BINANCE:ARPAUSDT.P", "BINANCE:BLZUSDT.P", "BINANCE:ONTUSDT.P", "BINANCE:PENDLEUSDT.P", "BINANCE:BADGERUSDT.P", "BINANCE:RVNUSDT.P", "BINANCE:AUCTIONUSDT.P", "BINANCE:AMBUSDT.P", "BINANCE:ZENUSDT.P", "BINANCE:KEYUSDT.P", "BINANCE:FOOTBALLUSDT.P", "BINANCE:TRUUSDT.P", "BINANCE:BLUEBIRDUSDT.P", "BINANCE:BNTUSDT.P", "BINANCE:SNTUSDT.P", "BINANCE:USDCUSDT.P", "BINANCE:BNBUSDT.P", "BINANCE:THETAUSDT.P", "BINANCE:BCHUSDT.P", "BINANCE:DUSKUSDT.P", "BINANCE:POWRUSDT.P", "BINANCE:LOOMUSDT.P", "BINANCE:ONGUSDT.P", "BINANCE:HBARUSDT.P", "BINANCE:ETCUSDT.P", "BINANCE:MANAUSDT.P", "BINANCE:CELRUSDT.P", "BINANCE:OGNUSDT.P", "BINANCE:KNCUSDT.P", "BINANCE:BATUSDT.P"
    ]

    const chartConfig = {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT.P",
        "interval": "15",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "save_image": false,
        "details": true,
        "calendar": false,
        "watchlist": symbol,
        "studies": [
            "STD;EMA",
            "STD;Divergence%1Indicator"
        ],
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
    }

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