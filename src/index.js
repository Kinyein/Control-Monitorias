import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store/store';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './styles/styledComp/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
