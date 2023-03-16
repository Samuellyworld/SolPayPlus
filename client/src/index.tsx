
// react module 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// global styles
import { GlobalStyle } from './styles/global';

// redux modules
import { store, Persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Popup from './components/modal/modal';
import AlertConfirmation from './components/modal/alert';
import Alert from './components/modal/claim';

// root element;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//root render
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
     <PersistGate loading={null} persistor={Persistor}>
     <Popup />
     <AlertConfirmation/>
     <Alert/>
      <App />
    </PersistGate>
     </Provider>
   </React.StrictMode>
);

