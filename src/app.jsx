import React from 'react';
import { Provider } from 'react-redux';

import ContactsPage from './pages/contacts';
import configureStore from './configure-store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ContactsPage />
  </Provider>
);

export default App;
