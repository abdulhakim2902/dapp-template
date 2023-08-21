import "../styles/globals.css";

import { AppProps } from "next/app";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { localhost } from "wagmi/chains";

import Layout from "@/src/components/layout";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
    walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID ?? "",

    // Required
    appName: "Web3 Dapp Template",

    // Optional
    chains: [sepolia, localhost],
    appDescription: "This is a web3 dapp template",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
  }),
);

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App;
