import { useMemo } from 'react';

// import  routes from router-dom;
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import pages that makes up the app;
import LandingPage from "./pages/Landing";
import ServicesPage from "./pages/services";
import PaymentPage from "./pages/payment";
import TransactionsPage from "./pages/transactions";

// importing solana and web3 utils for the dapp
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';


// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');


// App component
function App() {

    // The network is set to 'devnet'
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(
         () => [
            new UnsafeBurnerWalletAdapter(),
            ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

      
// JSX Component
  return  (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>

            <Router>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/app' element={<ServicesPage/>} />
              <Route path='/payment' element={<PaymentPage />} />
              <Route path='/transactions' element={<TransactionsPage/>} />
            </Routes>
           </Router>

          </WalletModalProvider>
       </WalletProvider>
      </ConnectionProvider>
      );
}

export default App;
