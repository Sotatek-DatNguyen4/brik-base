import React from 'react';
import { Provider } from 'react-redux';
import createRoutes from './../routes';
import configStore from './../../state/configStore';
import { PersistGate } from 'redux-persist/integration/react';
import 'antd/dist/antd.css';

const App = () => {
  const { store, persistor } = configStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        { createRoutes() }
      </PersistGate>
    </Provider>
  )
};

export default App;
