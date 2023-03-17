//@ts-ignore
// import lazy and suspense from react
import { lazy, Suspense } from 'react';

import { useMemo } from 'react';
import LandingPage from './pages/Landing';
// import  routes from router-dom;
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// importing solana and web3 utils for the dapp
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// dispatch
import {useSelector} from 'react-redux';
import { RootState } from './store/store';
import Spinner from './components/spinner/spinner';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

// import pages that makes up the app;
const ServicesPage = lazy(() => import('./pages/services'));
const PaymentPage = lazy(() => import('./pages/payment'));
const TransactionsPage = lazy(() => import('./pages/transactions'));


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

    const address = useSelector((state : RootState) => (
       state?.currentUser?.currentUser
    ))
      
// JSX Component
  return  (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Router>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/app' element={
                 <Suspense fallback={<Spinner />}>
                     <ServicesPage/>
                 </Suspense>
                 } />
              <Route path='/payment' element={
                            !address 
                             ? <Navigate to="/app"/> :
                              (
                               <Suspense fallback={<Spinner/>}>
                                  <PaymentPage />
                               </Suspense>
                              )} 
                              />
              <Route path='/transactions' element={
                                !address
                                 ? <Navigate to="/app"/>
                                 :(
                                  <Suspense fallback={<Spinner/>}>
                                    <TransactionsPage/>
                                  </Suspense>
                                 )}
                                  />
            </Routes>
           </Router>
          </WalletModalProvider>
       </WalletProvider>
      </ConnectionProvider>
      );
}

export default App;
