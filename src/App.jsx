import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chart from "./views/chart";
import News from "./views/news";
import './App.css'

function checkDuplicates(arr) {
  let valuesAlreadySeen = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (!valuesAlreadySeen[value]) {
          valuesAlreadySeen[value] = true;
          result.push(value);
      }
  }

  return result;
}

function App() {

  const platform = 'BINANCE'
  const symbols = [
    "ETHUSDT.P", "1000SHIBUSDT.P", "ONDOUSDT.P", "DOGEUSDT.P", "BTCDOMUSDT.P", "SOLUSDT.P", "1000PEPEUSDT.P", "MANTAUSDT.P", "MATICUSDT.P", "XRPUSDT.P", "ADAUSDT.P", "ARBUSDT.P", "FTMUSDT.P", "OPUSDT.P", "WIFUSDT.P", "ICPUSDT.P", "AVAXUSDT.P", "TIAUSDT.P", "FILUSDT.P", "INJUSDT.P", "DOTUSDT.P", "RNDRUSDT.P", "GALAUSDT.P", "SUIUSDT.P", "SANDUSDT.P", "ORDIUSDT.P", "STRKUSDT.P", "RUNEUSDT.P", "WLDUSDT.P", "NEARUSDT.P", "APTUSDT.P", "DYDXUSDT.P", "CKBUSDT.P", "UNIUSDT.P", "SEIUSDT.P", "PYTHUSDT.P", "GRTUSDT.P", "ALTUSDT.P", "ENSUSDT.P", "CHRUSDT.P", "AXSUSDT.P", "DYMUSDT.P", "APEUSDT.P", "TRBUSDT.P", "JUPUSDT.P", "MEMEUSDT.P", "SNXUSDT.P", "CRVUSDT.P", "XAIUSDT.P", "DYMUSDT.P", "APEUSDT.P", "TRBUSDT.P", "JUPUSDT.P", "MEMEUSDT.P", "SNXUSDT.P", "CRVUSDT.P", "XAIUSDT.P", "WAVESUSDT.P", "COTIUSDT.P", "LDOUSDT.P", "CTKUSDT.P", "JTOUSDT.P", "AAVEUSDT.P", "GTCUSDT.P", "AGIXUSDT.P", "LUNA2USDT.P", "IMXUSDT.P", "ALICEUSDT.P", "GMTUSDT.P", "EOSUSDT.P", "OCEANUSDT.P", "COMPUSDT.P", "CFXUSDT.P", "MTLUSDT.P", "ZETAUSDT.P", "BAKEUSDT.P", "HOTUSDT.P", "QNTUSDT.P", "SUSHIUSDT.P", "NEOUSDT.P", "API3USDT.P", "QTUMUSDT.P", "1INCHUSDT.P", "WOOUSDT.P", "TRXUSDT.P", "KSMUSDT.P", "KAVAUSDT.P", "LPTUSDT.P", "LEVERUSDT.P", "AUDIOUSDT.P", "RENUSDT.P", "C98USDT.P", "CELOUSDT.P", "BLURUSDT.P", "LSKUSDT.P", "MKRUSDT.P", "STORJUSDT.P", "ROSEUSDT.P", "HIGHUSDT.P", "ACEUSDT.P", "RADUSDT.P", "ARKUSDT.P", "OXTUSDT.P", "OMUSDT.P", "HFTUSDT.P", "BSVUSDT.P", "TONUSDT.P", "MBLUSDT.P", "TWTUSDT.P", "AVAXUSDT.P", "1000BONKUSDT.P", "RNDRUSDT.P", "GALAUSDT.P", "SANDUSDT.P", "1000LUNCUSDT.P", "BIGTIMEUSDT.P", "ORDIUSDT.P", "STRKUSDT.P", "RUNEUSDT.P", "1000RATSUSDT.P", "PIXELUSDT.P", "NEARUSDT.P", "DYDXUSDT.P", "JASMYUSDT.P", "LRCUSDT.P", "PYTHUSDT.P", "1000SATSUSDT.P", "ATOMUSDT.P", "FETUSDT.P", "MEMEUSDT.P", "LTCUSDT.P", "1000XECUSDT.P", "COTIUSDT.P", "WAVESUSDT.P", "CHZUSDT.P", "ALGOUSDT.P", "ZILUSDT.P", "AAVEUSDT.P", "AGIXUSDT.P", "PEOPLEUSDT.P", "LUNA2USDT.P", "XLMUSDT.P", "ALICEUSDT.P", "STXUSDT.P", "OCEANUSDT.P", "COMPUSDT.P", "MTLUSDT.P", "ZETAUSDT.P", "VETUSDT.P", "TLMUSDT.P", "NMRUSDT.P", "XVSUSDT.P", "ACEUSDT.P", "RADUSDT.P", "USTCUSDT.P", "ARKUSDT.P", "OXTUSDT.P", "DEFIUSDT.P", "OMUSDT.P", "GLMRUSDT.P", "HFTUSDT.P", "BSVUSDT.P", "MOVRUSDT.P", "ETHWUSDT.P", "IDEXUSDT.P", "BICOUSDT.P", "CAKEUSDT.P", "TONUSDT.P", "MBLUSDT.P", "ORBSUSDT.P", "BONDUSDT.P", "HIFIUSDT.P", "WAXPUSDT.P", "TWTUSDT.P", "STPTUSDT.P", "BIGTIMEUSDT.P", "PIXELUSDT.P", "JASMYUSDT.P", "ATOMUSDT.P", "FETUSDT.P", "1000XECUSDT.P", "WAVESUSDT.P", "CHZUSDT.P", "ZILUSDT.P", "PEOPLEUSDT.P", "LUNA2USDT.P", "XLMUSDT.P", "ALICEUSDT.P", "STXUSDT.P", "OCEANUSDT.P", "MTLUSDT.P", "VETUSDT.P", "SUSHIUSDT.P", "1INCHUSDT.P", "LEVERUSDT.P", "AUDIOUSDT.P", "PHBUSDT.P", "STORJUSDT.P", "MAVIAUSDT.P", "BONDUSDT.P", "HIFIUSDT.P", "FRONTUSDT.P", "WAXPUSDT.P", "STEEMUSDT.P", "TWTUSDT.P", "STPTUSDT.P", "LINKUSDT.P", "1000BONKUSDT.P", "1000LUNCUSDT.P", "BIGTIMEUSDT.P", "1000FLOKIUSDT.P", "1000RATSUSDT.P", "LRCUSDT.P", "1000SATSUSDT.P", "ATOMUSDT.P", "FETUSDT.P", "LTCUSDT.P", "1000XECUSDT.P", "CHZUSDT.P", "ALGOUSDT.P", "ZILUSDT.P", "ENJUSDT.P", "PEOPLEUSDT.P", "XLMUSDT.P", "STXUSDT.P", "VETUSDT.P", "PHBUSDT.P", "XMRUSDT.P", "ONEUSDT.P", "RLCUSDT.P", "PORTALUSDT.P", "OMGUSDT.P", "ARPAUSDT.P", "BLZUSDT.P", "ONTUSDT.P", "PENDLEUSDT.P", "BADGERUSDT.P", "RVNUSDT.P", "AUCTIONUSDT.P", "AMBUSDT.P", "ZENUSDT.P", "KEYUSDT.P", "FOOTBALLUSDT.P", "TRUUSDT.P", "BLUEBIRDUSDT.P", "BNTUSDT.P", "SNTUSDT.P", "USDCUSDT.P", "BNBUSDT.P", "THETAUSDT.P", "BCHUSDT.P", "DUSKUSDT.P", "POWRUSDT.P", "LOOMUSDT.P", "ONGUSDT.P", "HBARUSDT.P", "ETCUSDT.P", "MANAUSDT.P", "CELRUSDT.P", "OGNUSDT.P", "KNCUSDT.P", "BATUSDT.P"
  ];

  let uniqueSymbols = checkDuplicates(symbols);


  const routes = uniqueSymbols.map(symbol => ({
    path: `/${symbol.toLowerCase().replace('usdt.p', '')}`, // Menggunakan simbol sebagai bagian dari path
    element: <Chart symbol={symbol} />, // Ganti 'Component' dengan komponen yang sesuai
  }));

  return (
    <>
      <RouterProvider router={
        createBrowserRouter([
          {
            path: "/",
            element: < Chart symbol={`${platform}:BTCUSDT.P`} />
          },
          {
            path: "/news",
            element: < News />
          },
          ...routes
        ])
      } />
    </>
  )
}

export default App
