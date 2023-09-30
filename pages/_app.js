import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  avalancheFuji,
  baseGoerli,
  bscTestnet,
  goerli,
  optimismGoerli,
  polygonMumbai,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import "../styles/globals.css";

const { chains, publicClient } = configureChains(
  [
    avalancheFuji,
    baseGoerli,
    bscTestnet,
    goerli,
    optimismGoerli,
    polygonMumbai,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "New demo",
  projectId: "f33b50fbf2a57795476aa295b2a76216",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />;
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
