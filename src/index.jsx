import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles, { theme } from './components/Global.style';
import Splash from './components/Splash/Splash';
import Nav from './components/Nav/Nav';

import Dashboard from './routes/Dashboard';
import NotFound from './routes/NotFound';

import reportWebVitals from './reportWebVitals';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<Splash />}>
        <Switch>
          <Route component={Dashboard} exact path={['/', '/search']} />
          <Route component={NotFound} path="*" />
        </Switch>
      </Suspense>
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
